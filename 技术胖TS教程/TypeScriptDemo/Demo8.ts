interface Girl{
    name:string;
    age:number;
    abc:number;
    waistline?:number
}
const girl={
    name:'大脚',
    age:18,
    abc:94,
    waistline:11
}
const screenResume = (girl:Girl) =>{
    girl.age<24&& girl.abc>=90&&console.log(girl.name+'进入面试')
    girl.age>=24|| girl.abc<90&&console.log(girl.name+'你被淘汰')
}
const getResume =(girl:Girl)=>{
    console.log(girl.name+'年龄是'+girl.age)
    console.log(girl.name+'这个是'+girl.abc)
    girl.waistline&&console.log(girl.name+'腰围是'+girl.waistline)

}
screenResume(girl)
getResume(girl)