Meteor.startup(function(){
    // Startup code goes in here.
    Accounts.config({});

    // Import the litter bin data into MongoDB
    var bins = Bins.find().count();
    if( bins <= 0 ) {
        var bins = JSON.parse(Assets.getText('citycentre.json'));
        _.each(bins.features, function( bin ) {
            Bins.insert(bin);
        });
    }
});