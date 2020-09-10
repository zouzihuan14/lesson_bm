const express = require('express');
const app = express()

app.get('/server',(req,res)=>{
    //设置相应头
    let aaa ='ssss'
    res.setHeader('Access-Control-Allow-Origin','*')
    res.send(aaa)
})
app.listen(8000,()=>{
    console.log("服务已经启动，8000")
});