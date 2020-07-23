
```js
var a = 1
var obj = {
  a: 2,
  func2: () => {
    console.log(this.a)
  },
  
  func3: function() {
    console.log(this.a)
  }
}

// func1
var func1  = () => {
  console.log(this.a)
}

// func2
var func2 = obj.func2
// func3
var func3 = obj.func3

func1()
func2()
func3()
obj.func2()
obj.func3()
```

<!--答案  11112 -->

- 箭头函数的this指向定义时所在的外层第一个普通函数，跟使用位置没有关系。
被继承的普通函数的this指向改变，箭头函数的this指向会跟着改变

3. 不能直接修改箭头函数的this指向
上个栗子中的foo函数修改一下，尝试直接修改箭头函数的this指向。
去修改被继承的普通函数的this指向，然后箭头函数的this指向也会跟着改变
