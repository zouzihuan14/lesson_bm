var reg = /./
var str ='a\\'
// console.log(reg.test(str))
// .表示任意字符

//在正则中  使用斜杠\表转义字符   使用两个斜杠代表一个
reg=/\\/
// console.log(reg)
reg = new RegExp("\\.")
// console.log(reg)
// console.log(reg.test(str))
/*
 \w  任意字母、数字、下划线  [A-z0-9_]
 \W  除了字母、数字、下划线  [^A-z0-9_]
 \d  任意的数字[0-9]
 \D  除了数字[0-9]
 \s  空格
 \S  除了空格
 \b  单词边界
 \B  除了单词边界

*/

str = 'child'
reg =/\bchild\b/
console.log(reg.test(str))


//去除空格，使用空串替换空格

str =' hello        sss       a         '
console.log(str.length)
// str = str.replace(/\s/g,"")
// console.log(str)
// 去除开头的空格和结尾的空格
str = str.replace(/^\s*|\s*$/g,"")
console.log(str.length)
