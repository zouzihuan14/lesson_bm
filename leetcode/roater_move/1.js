let arr = [1,2,3,4,5,6,7,8,9] ,k = 3
function rightShift(list,k){
    const copy =  [...list]
    const n = list.length
    for(let i = 0;i < n; i++){
        list[i] = copy[[k + i] % n]  //左移  模运算
    }
    return list;
    
}
console.log(rightShift(arr,3))


function cyclicShift(array,num) { //API实现
    return array.slice(array.length-num).concat(array.slice(0,array.length-num))
}

//三次翻转法
// [0,n-k-1]
// [n-k,n-1]
// [0,n-1]
function reverse(list , start , end){
    let t = null
    while(start < end){
        t = list[start]
        list[start] = list[end]
        list[end] = t;
        start ++
        end --
    }

}
function RShift(list,k){
    const n = list.length
    if( k % n === 0 ) return 
    reverse(list, 0 ,n-k-1)
    
}