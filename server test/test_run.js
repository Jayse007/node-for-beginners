const fs = require('fs');
fs.unlink("new.txt", function(err){
    if (err) throw err;
    console.log("Deleted");
});