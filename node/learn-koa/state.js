const fs = require('fs');
const Koa = require('koa');
const app = new Koa();
const static = require('koa-static');
const main = ctx =>{
    ctx.response.type = 'html';
    ctx.response.body = fs.createReadStream('./template.html');
}
// 先引入static 静态文件
app.use(static('./'));
app.use(main);
app.listen(8080,function(){
    console.log('启动成功')
});
