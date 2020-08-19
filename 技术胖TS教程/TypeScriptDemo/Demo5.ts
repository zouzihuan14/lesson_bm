//函数返回类型的注解
// function getTotal(one :number ,two :number):number{
//     return one + two 
// }
// const total= getTotal(1,2)

// function sayhello():void{
//     console.log('Hello World')
// }

function errorFuntion():never{
    throw new Error()
    console.log('hello world')
}

function forNever():never{
    while(true){}
    console.log('hello world')
}

function add({one,two}:{one:number,two:number}){
    return one + two
}
const total = add({one:1,two:2})

function getNumber({one}:{one:number}){
    return one
}

const number =getNumber({one:1})