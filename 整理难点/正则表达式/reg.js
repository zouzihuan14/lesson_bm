
/*
1. 构造函数创建正则表达式 (更加灵活 构造函数可以传一个变量)

2. 使用字面量来创建正则表达式(更加简单 )
   语法 var 变量 = /正则表达式/匹配模式
*/
// var reg =new RegExp("a","i")
// reg = /a/i
//console.log(typeof reg)
//console.log(reg.test("abc"))


//创建一个正则表达式  检查一个字符串中是否有 a 或b 或 c
// reg = /a|b/;

// 创建一个正则表达式检查一个字符串是否有字母 

//***** */ 中括号里的内容也是或的关系
reg =/[a-z]/  //[a-z]任意小写字母
reg =/[A-Z]/i  //[A-Z]任意大写字母 i 忽略大小写
reg =/[A-z]/   //x任意字母  


// 检查一个字符串中是否含有abc 或 adc 或 aec
// reg = /abc|adc|aec/
reg = /a[bde]c/

// 除了^ 
reg = /[^ab]/

// [0-9]
reg = /[^0-9]/
console.log(reg.test("0323231"))

