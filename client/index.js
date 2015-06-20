Meteor.startup(function(){
    Accounts.ui.config({
        requestPermissions: {
            facebook: ['user_likes', 'email'],
            google: ['email']
        },
        requestOfflineToken: {
            google: true
        },
        passwordSignupFields: 'USERNAME_AND_OPTIONAL_EMAIL'
    });
});
