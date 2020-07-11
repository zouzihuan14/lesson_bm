var theThing = null;
var replaceThing = function () {
  var originalThing = theThing;
  var unused = function () {
    if (originalThing) // 'originalThing'的引用
      console.log("嘿嘿嘿");
  };
  theThing = {
    longStr: new Array(1000000).join('*'),
    someMethod: function () {
      console.log("哈哈哈");
    }
  };
};
setInterval(replaceThing, 1000);
// theThing 那个栗子看了一些其他人的理解，最后自己也总结了一下自己的理解
// ： 1. `window.theTing.someMethod` 可抵达，不会被垃圾回收
//  2. 在 V8 中，一旦不同的作用域位于同一个父级作用域下，
//  那么它们会共享这个父级作用域 --> unused 作用域与 someMethod 作用域同处于（共享） 
//  replaceThing 作用域，都引用了变量 originalThing 3. 由 1 + 2 可知：someMethod 
//  不会被:chicken:回收，导致其引用的变量 originalThing 也不会被回收 4. originalThing 
//  不会被回收，那么每次 setInterval 完事后，originalThing 都会引用上一次 theThing 保存的那个对象
//   5. 其实只要在脑子里跑 3 遍，在第 3 遍的时候就发现有一个 theThing 成了孤儿
//   （当然，第 2 遍的时候也可以认为，null 也在孤儿院了，毕竟 null 也是个对象/斜眼）