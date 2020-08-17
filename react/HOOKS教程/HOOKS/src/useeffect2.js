import React , {useState,useEffect} from 'react'
export const Mycomponent = ()=>{
    const [visible,setVisible] = useState(false)
    // useEffect(()=>{
    //     console.log('useffect')
    // },[])
    return (
        <>
        {/* <h4>{visible}</h4> */}
        { visible &&<MyChildComponent/>}
        <button onClick = {()=>setVisible(!visible)}>
            Toggle Child Component visibility
            </button>
        </>
    )
}
//每次更新都会先卸载然后再挂载上去
export const MyChildComponent = ()=>{
    const [userInfo,setUserInfo] = useState(
        {
            name:"john",
            lastName:'Doe'
        }
    )
    useEffect(()=>{
        console.log("A. called when the component is mounted")
        return ()=>{
            console.log("B. called on component unmounted , check the [] on the react use effet")
        }
    },[])
    return(
        <>
        <h4>{userInfo.name}{userInfo.lastName}</h4>
        <input type='text' value={userInfo.name}
        onChange={(e)=>setUserInfo({
            ...userInfo,
            name:e.target.value
            // 类中 setState是合并  
            // 函数组件中的setstate是替换  需要先解构再重新修改
        })}
        ></input>
        <input type='text' value={userInfo.lastName}
        onChange={(e)=>setUserInfo({
            ...userInfo,
            lastName:e.target.value
            // 类中 setState是合并  
            // 函数组件中的setstate是替换  需要先解构再重新修改
        })}
        ></input>
        </>
    )
}