import React from 'react'
import ReactDOM from 'react-dom'
import {Mycomponent} from './useeffect2'
function App(){
    return (
        <div className='App'>
            <Mycomponent />
        </div>
    )
}

const RootElement = document.getElementById('root')
ReactDOM.render(<App />,RootElement);