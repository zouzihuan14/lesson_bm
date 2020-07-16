import React ,{useState , useEffect}from 'react';
import {BrowserRouter as Router , Route ,Link} from 'react-router-dom'
function Index(){
  useEffect(()=>{
    console.log('useEffect=> 老弟你来了index页面')
    return ()=>{
      console.log('老弟你走哦了')
    }
  },[])
  return <h2>邹子欢</h2>
}
function List(){
  console.log('useEffect=> 老弟你来了List页面')
  return <h2>Curry</h2>
}
function Example(){
    // const [count , setCount ] = useState(100)  //数组结构
    // return (
    //     <div>
    //         <p>You Clickd {count} times</p>
    //         <button onClick = {()=>{setCount(count+1)}}>
    //         Click me!!
    //         </button>
    //     </div>
    // )
    const [count, setCount] = useState(0);
      useEffect(()=>{
        console.log(`useeffect => you clicked${count} times`)
        return ()=>{
          console.log('===========')
        }
      },[])
    return (
    <>
      Count: {count}
      <button onClick={() => setCount(0)}>Reset</button>
      <button onClick={() => setCount(count - 1)}>-</button>
      <button onClick={() => setCount(count + 1)}>+</button>
    
    <Router>
      <ul>
        <li><Link to = '/'>首页</Link></li>
        <li><Link to = '/list/'>列表</Link></li>
        <Route path = "/" exact component ={Index}/>
        <Route path = "/list/" component ={List}/>
      </ul>
    </Router>
    </>
    )


}
export default Example;