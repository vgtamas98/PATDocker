var http = require('http');

var port = 5000;

var server = http.createServer(function (req, res) {   //create web server
    if (req.url == '/') { //handle requests
        res.writeHead(200, { 'Content-Type': 'text/html' }); 
        res.write('<html><body><h1>Hello PAT students !</h1></body></html>');
        res.end();
    }
    else
        res.end('Invalid Request!');
});

server.listen(port);

console.log('Node.js web server at port',port,'is running..')