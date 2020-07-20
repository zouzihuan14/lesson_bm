const express = require('express');
const md5 =require('md5')
const app = express()
//GET 路由
app.get('/big.js',(req,res)=>{
    console.log('here')
    const fs = require('fs')
    const jsContent = fs.readFileSync('./big.js','utf-8')
    //一堆 头部字段  content-type
    //强缓存：200 from memory/disk cache ，请求不会到达服务器
    res.setHeader('Cache-Control','max-age=20')
    // 协商缓存 请求会到达服务器
    // 20 之后 请求(会携带一个 if-none-match)
    const Etag = md5(jsContent)
    const oldEtag = req.headers['if-none-match']
    if(Etag === oldEtag)
    {
        //文件没有变化
        // 从缓存里面读取304 (not modified)
        res.sendStatus(304).end('')
    }

    res.setHeader('Etag',Etag)
    res.end(jsContent)
})
app.listen(9090,()=>{
    console.log(9090)
})