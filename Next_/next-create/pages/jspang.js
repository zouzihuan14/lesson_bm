import React, {useState} from 'react'
import Myheader from '../components/myheader'
function Jspang(){
    //关键代码----------start-------
    const [color,setColor] = useState('blue')

    const changeColor=()=>{

        setColor(color=='blue'?'red':'blue')
    }
     //关键代码----------end-------

    return (
        <>
            <Myheader/>
            <div>技术胖免费前端教程</div>
            <div><button onClick={changeColor}>改变颜色</button></div>
            <style jsx>
                {`
                    div { color:${color};}
                `}
            </style>
        </>
    )
}
export default Jspang