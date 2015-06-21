Template.scanner.qrCode = function() {
    qrScanner.message();
};

qrScanner.on('scan', function( err, binId ) {
    if(binId) {
        console.log("QR Code scanned:", binId);
        Meteor.call('feedBin', binId, function( err ) {
            if( err == "404" ) {
                alert("Bin not found.");
            }
        });
        Router.go('/');
    }
});