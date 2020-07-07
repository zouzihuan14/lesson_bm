function test (){
    var num = []
    var i

    for (i = 0; i < 10; i++) {
        num[i] = function () {
            console.log(i)
        }
    }

    return num[9]
}
test()()  //结果是10 循环10次后全局变量的i变成10
// 函数作用域中没有i 只能探出头往外找 则i=10

var test = (function() {
    var num = 0
    return () => {
        return num++
    }
}())

for (var i = 0; i < 10; i++) {
    test()
}

console.log(test())  //10 


// 在test的函数中返回值是一个箭头函数 而此函数需要返回一个num 箭头函数的函数作用域中并没有num 则向外找num形成一个闭包
// 故调用多次test()  依然可以找到之前num的值

var a = 1;
function test(){
    a = 2;  
    return function(){
        console.log(a);
    }
    var a = 3;// 变量提升 ，先输出a =2 
}
test()();


function foo(a,b){
    console.log(b);
    return {
      foo:function(c){
        return foo(c,a);
      }
    }
  }
   /* func1={
       function(c){
           return 
       }
   }
*/    
  var func1=foo(0);
  func1.foo(1);
  func1.foo(2);
  func1.foo(3);
  var func2=foo(0).foo(1).foo(2).foo(3);
  var func3=foo(0).foo(1);
  func3.foo(2);
  func3.foo(3);