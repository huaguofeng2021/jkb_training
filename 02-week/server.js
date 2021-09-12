const http = require('http');
const fs = require('fs');

http.createServer((request, response) => {
  let body = [];
  request.on('error', (err) => {
    console.error(err);
  }).on('data', (chunk) => {
    body.push(chunk);
  }).on('end', () => {
    body = Buffer.concat(body).toString();
    response.writeHead(200, {'Content-type': 'text/html'});
    //response.end(' Hello World\n');
    fs.readFile('./test.html', function (err, html) {
      if (err) { throw err; }       
      response.write(html);  
      response.end();  
    })
  })
}).listen(8088);

console.log('server started');