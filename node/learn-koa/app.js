const http = require('http')
// web编程的基石http协议
http.createServer((req,res)=>{
    // req 访问者通过浏览器访问  res服务器返回数据
    if(req.url === '/'){
    //设置响应头
    res.writeHead(200,{'Content-Type' : 'text/html;charset=utf8'})
    res.end('首页');
    }
    else if(req.url==='/about'){
    res.end('About');
    }
})
.listen(1314)