const http = require('http');
const fs = require('fs');
let version = 12345679;
let server = http.createServer((req, res) => {
  // If-None-Match
  if (req.url == '/') {
    res.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'});
    fs.WriteStream('./index.html').pipe(res);
    return;
  }


  // if (req.headers['if-none-match']) {
  //   // console.log(Number(req.headers['if-none-match']) == version);
  //   if (Number(req.headers['if-none-match']) == version) {
  //     res.statusCode = 304 // 没有改变版本
  //     res.end();
  //     return;
  //   } else {
  //     res.setHeader('Etag', version);
  //     res.end('hello, world2');
  //     return
  //   }
  // }
  // res.setHeader('Etag', version);
  // res.end('hello, world');
});


server.listen(3000);