const http = require('http');
class MyKoa {
  constructor() {
    //手写代码  源码分析
    this.fn =undefined;
  }
  // listen    use
  // 有没有什么es6 的写法， 可以替代？   
  listen(...args) { // 抽象 
    let server = http.createServer(this.fn);
    server.listen(...args) // 怎么写？ 
  }


  use (fn) {
    this.fn=fn
  }
}



module.exports = MyKoa