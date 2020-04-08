// js es6  class 关键字 面向对象
const UUID = require('uuid'); // 引入第三方库，

class Wallet  {
  // 属性和方法组成
  constructor() { //构造函数里声明
    this._id = UUID.v1().replace(/-/g,''); //命名规则约定  _变量 私有
    //创建时间  不能改
    this._createTime = + new Date();
    //余额 
    this._balance = 0; 
    //余额 设计成私有的属性
    
    //final_time 最后修改时间
    this._final_time=new Date();
    // console.log(this.id);
    // console.log('欢迎使用支付宝钱包');
    // 设计支付宝用的钱包， 几十亿人都在用的
    // 19979113182 
    // 数字货币的概念 比特币， 
    // 1. 唯一 id， autoincremnet  Node, 绝对不会重复 
   //
  }
  getCreateTime()
  {
      return this._createTime;
  }
  getId() {
    return this._id;
  }
  setId() {
    throw new Error('私有属性_id 不可以修改');
  }
  getBalance(){
    console.log('余额：')
    return this._balance;
}

 getFinalTime()
 {
     return this._final_time;
 }
  increaseBalance(increaseAmount){
      console.log('多了'+increaseAmount);
      console.log('最后修改时间：'+this.getFinalTime())
      this._balance+=increaseAmount;
  }
  decreaseBalance(decreaseAmount){
      console.log('少了'+decreaseAmount)
      console.log('最后修改时间：'+this.getFinalTime())
      this._balance-=decreaseAmount
  }
  
}

const zzwWallet = new Wallet(); //实例化
console.log(zzwWallet.getId());
// console.log(zzwWallet.setId());
// console.log(zzwWallet.getCreateTime());
 zzwWallet.increaseBalance(10.0);
 zzwWallet.decreaseBalance(8.1);
 console.log(zzwWallet.getBalance().toFixed(2));
// zzwWallet._id = '12212'; //id 属性只读， 但不能修改
// console.log(zzwWallet._id); // id 是zzwWallet 的public 属性