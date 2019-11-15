const http = require('http');
const url = require('url');
const fs = require('fs');

console.log('Started Server')
http.createServer(function (req, res) {
  console.log('Request received');
  var q = url.parse(req.url, true);
  p = q.pathname + '.html'
  var filename = '.' + p;
  fs.readFile(filename, function(err, data) {
    if (err) {
      res.writeHead(404, {'Content-Type': 'text/html'});
      return res.end("404 Not Found");
    }
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
}).listen(8000);
