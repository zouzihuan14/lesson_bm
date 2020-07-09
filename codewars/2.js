// (xxx) xxx-xxxx   用正则表达式
// \d{3}  \d{3}  \d{4}   [0-9]
function createPhoneNumber(number){
    // 代码语意连贯，连贯性的代码更易理解
   return number.join('').replace(/(\d{3})(\d{3})(\d{4})/,'($1) $2-$3')  
}
console.log(createPhoneNumber([1,2,3,4,5,6,7,8,9,0]))