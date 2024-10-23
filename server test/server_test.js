var http = require('http');
var dt = require('./date_al');

http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type':'text/html'});
    res.write('Hello World!\nThe date is ' + dt.myDate());
    res.end();
}).listen(8080);