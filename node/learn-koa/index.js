//轻量级的web开发框架。 
const Koa = require('koa') //请上koa
const app =new Koa();
const fs=require('fs');
//启动一个服务，函数封装一个服务
const func=ctx=>{
    ctx.response.body="func";
}
const main=ctx =>{
    // console.log(ctx.request,'-------------');
    // ctx.response.body="Hello World"
    ctx.response.type='html'  //相应头
    const html=fs.readFileSync('./template.html','utf-8');
    ctx.response.body=html
}
// app.use(func);
app.use(main);  //启用了一个服务,给访问者用  request 
app.listen(3000);
