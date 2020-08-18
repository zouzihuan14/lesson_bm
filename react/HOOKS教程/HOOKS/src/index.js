import React from 'react'
import ReactDOM from 'react-dom'
import {MyComponent} from './ref_dom'
function App(){
    return (
        <div className='App'>
            <MyComponent />
        </div>
    )
}

const RootElement = document.getElementById('root')
ReactDOM.render(<App />,RootElement);