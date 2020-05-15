//两个数比较时 100%交换 洗牌算法
//从后往前 取一个数的位置
//所有的未洗牌的区间之内随机取出一个数b
//ab交换
//

// function shuffle(arr){
//     let len =arr.length;
//     for(let i =0 ;i<len ;i++){
//         let idx = Math.floor(Math.random()*(len-i))
//         // [arr[len - 1 - i],arr[idx] ]= [arr[idx],arr[len-1-i]]
        
//          [arr[len - 1 - i], arr[idx]] = [arr[idx], arr[len - 1 - i]]
//         // let temp =arr[len - 1 - i];
//         // arr[len - 1 - i] = arr[idx]
//         // arr[idx]=temp
//     }
//     return arr
// }
function shuffle(arr) {
    let len = arr.length;
    for (let i = 0; i < len; i ++) {
      // - i 从后面
      // 
      let idx = Math.floor(Math.random() * (len - i));
      [arr[len - 1 - i], arr[idx]] = [arr[idx], arr[len - 1 - i]]
    }
    return arr;
  }
arrs=[1,2,34,5,6,7,68,4]
console.log(shuffle(arrs));