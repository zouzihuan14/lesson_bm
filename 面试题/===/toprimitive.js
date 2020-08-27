let obj ={
    //重写内部实现  就不会去查找原型链上的方法
    toString(){
        return 'str'
    },
    valueOf(){
        return 0
    },
    [Symbol.toPrimitive]:(hint)=>{
        console.log('正在转换为',hint)
        if(hint==='string')
        return 'hahah'
        else
        return 0
    }
}
console.log(obj==0)
console.log(String(obj))
console.log(Number(obj))