let enc_qq = [6, 3, 1, 7, 5, 8, 9, 2, 4], // 加密的QQ号
  qq = [], //真正的QQ号
  head = 0, //头指针 变量中间值
  tail = 9;
    // !      !~
// 631758924
// 17589243
// 5892437
// 924378
// 43782
// 7823
// 238
// 83
// 3
// console.log(typeof enc_qq); // oject 对象的一种，可以枚举的对象
// 移除第一个元素，　第二个元素放置到最后
// 不满足条件就退出
while(head < tail) { //退出条件是什么哦？length boolean  
  // 规则的 
  qq.push(enc_qq[head]) // 抽象能力
  head++; // 
  enc_qq[tail] = enc_qq[head]; // 相邻的变成了新的尾部
  tail++;
  head++;
}

console.log(qq.join(''))
