// 模板字符串
function createPhoneNumber(number){
    number = number.join('')
    return `(${number.substring(0,3)}) ${number.substring(3,6)}-${number.substring(6)}`
 }

console.log(createPhoneNumber([1,2,3,4,5,6,7,8,9,0]))
