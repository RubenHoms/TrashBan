Template.monster.helpers({
    /**
     * This function will calculate how hungry the monster is depending
     * on how many times it has eaten in the last month.
     */
    getHealth: function() {
        var monster = Monster.findOne({user: Meteor.userId()});
        if(monster) {
            var feedingTimes = [];
            var oneWeekAgo = moment().subtract(1, 'weeks');

            _.each(monster.timesFed, function( timestamp ) {
                var timestampMoment = moment(timestamp.timestamp);
                if (timestampMoment.isBetween(oneWeekAgo, moment())) {
                    feedingTimes.push(timestamp);
                }
            });

            var health = feedingTimes.length > 10 ? 10 : feedingTimes.length;
            return 45 + health * 20;

        }
    },
});