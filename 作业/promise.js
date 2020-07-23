// Promise.resolve(1).then(console.log);  // ??
//   let arr = [1,2,3];
// arr.map(parseInt)     // ??


let p1 = Promise.resolve(1)
let p2 = Promise.reject(2)
Promise.allSettled([p1,p2]).then(function(args){
    console.log(args);
  })
//要你完成：不管最终的他们是resolve 还是reject
//我只想要最终,状态变化完的结果  怎么办。
