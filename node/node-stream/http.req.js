const http = require('http')
const fs =require('fs')
const request = require('request');

request('https://www.baidu.com').pipe(fs.createWriteStream('./baidu.html'))
http.createServer((req,res)=>{

    // console.log(req)
    //GET 
    const writeStream = fs.createWriteStream('./params.txt')
    req.pipe(writeStream);
    res.end('ok')
})
.listen(8088,()=>{
    console.log('8088')
})