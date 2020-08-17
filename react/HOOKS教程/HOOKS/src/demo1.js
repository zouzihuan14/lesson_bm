import React, { useState } from 'react'


export const Mycomponent = props=>{
    const [userInfo,setUserInfo] = useState(
        {
            name:"john",
            lastName:'Doe'
        }
    )
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