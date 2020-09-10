const express = require('express');
const app = express()

app.get('/',(req,res)=>{
    res.send("Hello Express")
})
app.listen(8000,()=>{
    console.log("服务已经启动，8000")
});