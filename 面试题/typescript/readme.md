业务:

- 聊  
     UML JAVA C++ 都是有类型约束的
     JS弱类型  -> 强类型 
     :string  ->  interface -> type 

     ts + react 最好的应用demo
     login 

     interface {username:string ,password:string}
     type userLoginFunc  api bool
     model user  {name,age,avatar,hobbies}


在ts中，定义类型由两种方式：接口（interface）和类型别名（type alias）
interface只能定义对象类型，type声明的方式可以定义组合类型，交叉类型和原始类型
如果用type alias 声明的方式，会导致一些功能的缺失
1.interface方式可以实现接口的extends/implements，而type 不行

interface可以实现接口的merge，但是type不行