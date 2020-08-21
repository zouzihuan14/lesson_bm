//类型定义文件   React FC
// 类型声明和业务分开
interface IUser{
    name:string;
    age:number;
}
type IUserINfoFunc=(user:IUser)=>string;



const getUserInfo:IUserINfoFunc = (user)=>{
    return `name:${user.name} age:${user.age}`
}