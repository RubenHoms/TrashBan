Router.configure({
    layoutTemplate: 'layout'
});

Router.route('/', function() {
    this.render('home');
});

Router.route('/scanner', function() {
    this.render('scanner');
});

Router.route('/qrcode', function() {
    this.render('qrcode');
});