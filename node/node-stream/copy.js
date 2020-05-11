const fs = require('fs')
function copy(sourceUrl,destUrl){
    const readStream = fs.createReadStream(sourceUrl);
    const writeStream= fs.createWriteStream(destUrl);
    readStream.pipe(writeStream);}

//     fs.readFile(sourceUrl,(err,info)=>{
//         if(!err){
//             fs.writeFile(destUrl,info,(err)=>{
//                 if(!err){
//                     console.log('拷贝完毕')
//                 }
//             })
//         }
//     })
// }
//不用流 
//读完一个文件得到内容，info 变量 放到我们计算机内存里面的 写到某个地方

// 前端：
//浏览器执行js 浏览器申请内存 浏览器在各自的电脑上运行 天然就是分布式的
//高并发
//后端： baidu.com 一台服务器(linux 电脑)   他要处理 多个人的请求

copy('./readme.md','./copy.md')