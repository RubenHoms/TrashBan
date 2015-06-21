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

Router.route('/monster', function() {
    this.render('monster');
});

Router.route('/report', function() {
    this.render('report');
});

Router.route('/eat', function() {
    this.render('eat');
});

Router.route('/stats', function() {
    this.render('stats');
});