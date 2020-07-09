const MyKoa = require("./lib/application"); // 全栈  koa class 
// // 手写koa  模块化
const app = new MyKoa();
// //  http服务， 
// // 源码
// // 上下文  req  res 
app.use((req,res)=>{
    res.end('hello world')
})


app.listen(8088, () => {
  console.log('你的应用在8088端口启动');
});