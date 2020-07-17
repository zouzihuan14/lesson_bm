let str ='my name is {name},age is {age}';
let data ={
    name:'curry',age:18
}
function com(str,obj){
    // for(let item in obj)
    
        let reg = /\{([0-9A-Za-z_]+)\}/g
        let i = 0
        let info = reg.exec(str)
        let res = ''
        while(info){
            console.log(info)
            res+=str.substring(i,info.index)
            let key = info[1]
            res+=obj[key]
            console.log(obj[key])
            i=reg.lastIndex
            info = reg.exec(str)  
    }
    return res
}
com(str,data)