var fs = require('fs');
var rs = fs.createReadStream('./demofile.txt');
fs.open('demofile.txt', 'w', function(err){
    if (err) throw err;
    console.log('new');
})
rs.on('open', function(){
    console.log("This file is open.");
});