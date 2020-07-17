// var str = "aa"
/*
split() 可以将一个字符串拆分成一个数组
方法可以传递一个正则表达式作为参数，这样方法会根据正则表达式去拆分字符串
search() 可以搜索字符串是否含有指定内容，如果搜索到，返回开始的索引  否则 -1
方法也可以传递一个正则表达式作为参数
match()  可以根据正则表达式 从一个字符串中提取出符合条件的内容  设置全局匹配 g 可找到所有
match() 返回的结果是数组,即使只返回一个

replace() 可以将字符串的内容替换成新的字符串 
- 参数 1 被替换的内容  2  新的内容   默认只替换第一个
第一个参数可接受一个正则表达式作为参数
*/
/*
量词 可以设置一内容出现的次数  只对 前面一个内容起作用
{N}正好出现N次  {M,N}  出现 M-N 次  {M,} M次以上
+ 至少一个 * 零个或多个  ? 零个或一个
*/
/*
^表示开头  /^a/ a开头
$表示结尾  /a$/ a结尾

*/
// var result = (/^a|b$/).test(str)


// console.log(result)

// Given a list of integers and a single sum value, return the first two values (parse from the left please) in order of appearance that add up to form the sum


// 手机号的规则： 十一位
// 1 以一开头
// 2 第二位：3-9的任意数字
// 3 第三位以后任意数字9个
// ^1 [3-9] [0-9]{9}$ 

// var phoneStr = '135654323452'
// var phoneReg = /^1[3-9][0-9]{9}$/
// var reg = /^[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/
// // console.log(phoneReg.test(phoneStr))
// // console.log(reg.test('2017-09-31'))

// // console.log('2017-09-31'.match(reg))

// let reg5 =/[a-z]/g
// let str = 'abc'
// console.log(reg5.test(str))
// console.log(reg5.test(str))
// console.log(reg5)
// console.log(reg5.lastIndex)
// console.log(reg5.test(str))
// console.log(reg5.test(str)) //LastIndex 上一个索引
// console.log(reg5.test(str))



//  replace

let state = {
    name:'lilei',
    age:18
}
let str = 'my name is {name} , age is {age}'
function compile(obj,tpl){
    let name = obj.name
    let age = obj.age
    let string1 = tpl.replace('{name}', name);
    let string = string1.replace('{age}', age);
    return string
}
console.log(compile(state,str))