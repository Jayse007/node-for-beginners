var fs = require('fs');

fs.appendFile('info.txt', 'Name: Shawon James Sesughter\nOccupation: Backend developer', function(err){
    if (err){throw err;}
    console.log("File created or editied.");
});