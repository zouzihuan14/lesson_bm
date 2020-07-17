
function digPow(n, p) {
    // ...
    let arr = n.toString().split('')
    let result = arr.reduce(function(accumulator, currentValue,index)
     { return accumulator + currentValue**(p+index);},0)
     console.log(result)
     let int = result/n
     if(int%1===0){
         return int
     }
     else{
         return -1
     }
}

console.log(digPow(46288, 3))