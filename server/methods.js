Meteor.methods({
    // Put methods in here.
    feedBin: function( binId ) {
        var coords =  binId.split(','),
            x = parseFloat(coords[0]),
            y = parseFloat(coords[1]);
        var binToFeed = Bins.findOne( { "geometry.coordinates": { $in: [ x, y ] } } );
        binToFeed.timestamp = new Date();
        if(!binToFeed) {
            return "404";
        }
        var user = Meteor.user();
        Points.insert( { user: user._id, bin: binToFeed, timestamp: new Date() } );
    },
    /**
     * This method will feed the monster.
     * It will save a timestamp in the timesFed array on the monster object.
     * @returns {string}
     */
    feedMonster: function() {
        var monster = Monster.findOne({user: Meteor.userId()});
        if( monster ) {
            // Monster has ben found
            Monster.update(monster._id, { $push: { timesFed: { timestamp: new Date() } } } );
        } else {
            // No monster found
            return "404"
        }
    },
    /**
     * This function will calculate how hungry the monster is depending
     * on how many times it has eaten in the last month.
     */
    calculateHunger: function() {

    },
    /**
     * This function will create a monster for a new user.
     * @param name
     * @param hat
     */
    createMonster: function( name, hat ) {
        Monster.insert( { user: Meteor.userId(), name: name, hat: hat, timesFed: [] } );
    }
});