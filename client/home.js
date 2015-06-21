Template.home.onRendered(function() {
    //DIRTY HACK AHEAD. CHOO CHOO.
    Meteor.setTimeout(function() {
        Meteor.user() ? Router.go('/monster') : undefined;
    }, 1000);
});