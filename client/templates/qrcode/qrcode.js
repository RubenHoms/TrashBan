Template.qrcode.events({
    'click #generate': function() {
        var bin = Bins.findOne();
        var binId = bin.geometry.coordinates[0] + "," + bin.geometry.coordinates[1];
        $('#code').qrcode({text: binId});
    }
});