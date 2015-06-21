qrScanner.on('scan', function( err, binId ) {
    if(binId) {
        console.log("QR Code scanned:", binId);
        Meteor.call('feedBin', binId, function( err ) {
            if( err == "404" ) {
                alert("Bin not found.");
            } else {
                Meteor.call('feedMonster', function( err, res) {
                    if( err == "404" ) {
                        alert("Monster not found.");
                    }
                });
            }
        });
        Router.go('/monster/eaten');
    }
});