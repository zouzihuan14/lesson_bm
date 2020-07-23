function init(a){
    b = a + 3
}
// b无法放在init函数的AO对象之中    词法分析不太充分的话 声明就放在全局里面
init(2)