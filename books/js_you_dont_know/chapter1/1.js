function a(age){
    console.log(age)
    var age =20
    console.log(age)
    // function age(){
       
    // }
    // console.log(age)
}
a(18)

// 都会在所有的作用域中查询  
// 严格模式下，找不到所需的变量，引擎会抛出referenceError异常
// 非严格模式下 LHS会自动创建一个全局变量
// 查询成功后，如果对变量进行不合理的操作
// TypeError