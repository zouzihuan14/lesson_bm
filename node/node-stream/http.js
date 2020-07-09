const https =require('https')
const fs = require('fs')
// https.get('https://movie.douban.com/top250', function(res) {
// //   console.log(res);//继承了流   可读流  提供数据的那一方
//   //将html保存为本地文件 douban.html
//     const writeStream= fs.createWriteStream('./douban.html')
//     res.pipe(writeStream)
// });

https.get('https://ns-strategy.cdn.bcebos.com/ns-strategy/upload/fc_big_pic/part-00018-2113.jpg',function(res){
    const writeStream=fs.createWriteStream('./ac22.jpg')
    res.pipe(writeStream);
})

// https.createServer((req,res)=>{

// })