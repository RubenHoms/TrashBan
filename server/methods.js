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
    }
});