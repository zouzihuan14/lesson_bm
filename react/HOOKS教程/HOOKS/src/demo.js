import React, { useState } from 'react'


export const Mycomponent = props=>{
    // 括号里的为初始值 可以是string Number Object Boolean 
    const [name,setName] = useState('jion')
    return(
        <>
        <h4>{name}</h4>
        <input type='text' value={name}
        onChange={(e)=>setName(e.target.value)}
        ></input>
        </>
    )
}