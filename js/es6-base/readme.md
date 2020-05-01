* call   apply  this指向第一个参数

Array.prototype.map.call(lis,function(LiNode){
    console.log(LiNode)
})借用


静态方法不需要实例化  
Array.from()
非静态方法则需要实例化
Array.prototype.map.call(lis,function(LiNode){
    console.log(LiNode)
})

## static 静态方法
##  es6  ...操作符
扩展运算符(…)用于取出参数对象中的所有可遍历属性，拷贝到当前对象之中
## str="abcdef"
   let arr=[...str]
   arr=>[a,b,c,d,e]
对象也可以展开
   {...obj}

   