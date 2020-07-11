## commonJS
导出：
module.exports = function(){

}
导入：
require
1. common.js 一定要是代码运行起来 才知道引入了哪些模块
2. 可以出现在逻辑分支里面


## es-module 
1. import/export 不管你写在哪  都会提前执行
2. 在代码静态分析(代码不用执行代码)，就可以分析出你引入了哪些模块