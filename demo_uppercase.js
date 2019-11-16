const http = require('http');
const us = require('upper-case');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(us("hello world!!"));
  res.end();
}).listen(8000);
