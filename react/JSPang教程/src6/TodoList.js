import React, { Component } from 'react';
import store from './store'
import {changeInputAction,addItemAction,deleteItemAction,getListAction} from  './store/actionCreators'
import TodolistUI from './TodolistUI'
import axios from 'axios'
class TodoList extends Component {
    constructor(props){
        super(props)
        // console.log(store.getState())
        this.state = store.getState()
        this.changeInputValue = this.changeInputValue.bind(this)
        this.storeChange = this.storeChange.bind(this)
        this.clickBtn = this.clickBtn.bind(this)
        store.subscribe(this.storeChange)
        this.deleteItem= this.deleteItem.bind(this)
    }
    render() { 
        return ( 
            <TodolistUI  
            inputValue={this.state.inputValue}
            changeInputValue={this.changeInputValue}
            clickBtn={this.clickBtn}
            list={this.state.list}
            deleteItem={this.deleteItem}
            
            />
         );
    }

    // componentDidMount(){
    //     axios.get('https://www.easy-mock.com/mock/5f06fa033d75a643f8c8523b/example/getlist')
    //     .then((res)=>{
    //         const data = res.date
    //         const action= getListAction(data)
    //         store.dispatch(action)
    //         console.log(data)

    //     })
    // }
    changeInputValue(e){
        // console.log(e.target.value)
        const action = changeInputAction(e.target.value)
        store.dispatch(action)
    }
    storeChange(){
        this.setState(store.getState())
    }
    clickBtn(){
        const action = addItemAction()
        if(this.state.inputValue !== '')
        {store.dispatch(action)  }  
    }
    deleteItem(index){
        const action = deleteItemAction(index)
        store.dispatch(action)
    }
}
 
export default TodoList;