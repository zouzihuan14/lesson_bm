import React from 'react';
import ReactDOM from 'react-dom'
import TodoList from './Todolist'
import {Provider} from 'react-redux'
import store from './store/index'

const App = (
    <Provider store = {store}>
        <TodoList/>
    </Provider>
)
ReactDOM.render(App , document.getElementById('root'))

