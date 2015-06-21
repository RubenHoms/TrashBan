Template.home.onRendered(function() {
    //DIRTY HACK AHEAD. CHOO CHOO.
    Meteor.setInterval(function() {
        Meteor.user() ? Router.go('/monster') : undefined;
    }, 1000);
});