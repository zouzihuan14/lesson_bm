const http = require('http');
const fs = require('fs');
const users= require('./user.json')
console.log(users)
let version = 12345679;
let server = http.createServer((req, res) => {
  // If-None-Match
  if (req.url == '/') {
    res.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'});
    fs.createReadStream('index.html').pipe(res);
  }
  else if(req.url == '/users'){
      res.writeHead(200,{'Content-Type': 'text/json;charset=utf-8'})
    //   JSON对象调查文本
      res.setHeader()
      res.end(JSON.stringify(users))
  }
});


server.listen(3000);