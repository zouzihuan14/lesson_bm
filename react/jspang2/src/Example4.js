import React ,{useState ,createContext, useContext} from 'react';

const CountContext = createContext()

function Counter(){
    let count = useContext(CountContext)
    return(
    <h2>{count}</h2>
    )
}

function Example(){
    const [count , setCount ] = useState(0)  //数组结构
    return (
        <div>
            <p>You Clickd {count} times</p>
            <button onClick = {()=>{setCount(count+1)}}>Click me!!00</button>
            <CountContext.Provider value={count}>
                <Counter/>
            </CountContext.Provider>
        </div>
    )
    


}
export default Example;