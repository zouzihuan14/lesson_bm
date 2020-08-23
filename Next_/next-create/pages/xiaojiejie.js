import {withRouter } from 'next/router'
import Link from 'next/link'
import axios from 'axios'


const Xiaojiejie = ({router})=>{
    return (
        <>
        <div>{router.query.name}来了</div>
        <Link href='/'><a>返回首页</a></Link>
            {/* <div>{hot}</div> */}
        </>
    )
}

Xiaojiejie.getInitialProps = async ()=>{
    const promise =new Promise((resolve)=>{
        axios('http://localhost:8080/all/all')
        .then(
            (res)=>{
            console.log('远程数据结果',res)
            resolve(res.data)}
        )
    })
    return await promise 
}
export default withRouter(Xiaojiejie)