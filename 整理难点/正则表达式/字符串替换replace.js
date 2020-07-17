// let str ='my name is {name},age is {age}';
// let data ={
//     name:'curry',age:18
// }
// function compile(obj, tpl){
//     for(let item in obj) {
//         // let reg = new RegExp("{"+item+"}")
//         tpl = tpl.replace(`{${item}}`, obj[item])
//     }
//     return tpl;
// }
// compile(data,str)




// let str ='my name is {name},age is {age}';
// let data ={
//     name:'curry',age:18
// }
// let reg = /\{(\w+)\}/g
// let newStr = str.replace(reg,(...arg)=>{
//     console.log(arg)
//     let key = arg[1]
//     return data[key]
// })
// console.log(newStr)


// let str = '2017-12-20 2018-12-22'
// function format(str){
// // /^(\d{4})-(\d{2})-(\d{2})$/,'$2-$3.$1'
// let reg = /(\d{4})-(\d{2})-(\d{2})/g
//     return str.replace(reg,(...arg)=>{
//         console.log(arg)
//         return `${arg[2]}-${arg[3]}.${arg[1]}`
//     })
// }
// console.log(format(str))
// MM-DD.YYYY

// 驼峰式命名
// background-color
// backgroundColor
let str = 'web-kit-sd'
let reg = /-([a-zA-Z]{1})/g
let newStr = str.replace(reg,(...arg)=>{
    console.log(arg)
    return arg[1].toUpperCase()
})
console.log(newStr)