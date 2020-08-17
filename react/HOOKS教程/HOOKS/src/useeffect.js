import React , {useState,useEffect} from 'react'

export const Mycomponent = props =>{
    const [username,setuserName] = useState('')
    useEffect(()=>{
        console.log('useffect')
        setTimeout(() => {
            setuserName('jhon')
        }, 1000);
    },[])
    // [] useeffect 只在组件第一次挂载和卸载的时候执行
    // componentDidMount componentUpdata componentUnMount
    return (
        <>
        <h4>{username}</h4>
        <input value={username} 
          onChange={(e)=>{setuserName(e.target.value)}}
        />
        </>
    )
}