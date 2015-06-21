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
            switch(health){
                case 0:
                    Session.set("trash", 5);
                    break;
                case 1:
                    Session.set("trash", 5);
                    break;
                case 2:
                    Session.set("trash", 4);
                    break;
                case 3:
                    Session.set("trash", 4);
                    break;
                case 4:
                    Session.set("trash", 3);
                    break;
                case 5:
                    Session.set("trash", 3);
                    break;
                case 6:
                    Session.set("trash", 2);
                    break;
                case 7:
                    Session.set("trash", 2);
                    break;
                case 8:
                    Session.set("trash", 1);
                    break;
                case 9:
                    Session.set("trash", 1);
                    break;
                case 10:
                    Session.set("trash", 0);
                    break;
                default:
                    Session.set("trash", 5);
            }
            return 45 + health * 20;
        }
    },
    getTrashSize: function() {
        var array = [];
        for(var i = 0; i < Session.get("trash"); i++) {
            array.push(i+1);
        }
        return array;
    }
});

Template.monster.rendered = function() {
    if( this.data ) {
        $("#monster-gif").remove();
        $("#wrapper-monster").prepend('<img id="monster-gif" src="/images/monster_eating.gif">');
        Meteor.setTimeout(function() {
            $("#monster-gif").remove();
            $("#wrapper-monster").prepend('<img id="monster-gif" src="/images/monster.gif">');
        }, 5000);
    }
};