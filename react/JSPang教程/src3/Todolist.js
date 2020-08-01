import React from 'react';
import {connect} from 'react-redux'

const Todolist = (props)=>{
    let {inputValue,inputChange,clickButton,list} = props
    return (    
        <div>
            <div>
                <input value = {inputValue} onChange={inputChange}/>
                <button onClick={clickButton}>提交</button>
            </div>
            <ul>
                {
                    list.map((item,index)=>{
                    return (<li key={index}>{item}</li>)
                    })
                }
            </ul>
        </div>
     );
}


 //将store里面的state映射到组件中
const stateToProps = (state)=>{
    return {
        inputValue:state.inputValue,
        list:state.list
    }
}
const dispatchToProps =(dispatch)=>{
    return{
        inputChange(e){
            let action = {
                type:'change_input',
                value:e.target.value
            }
            dispatch(action)
            console.log(e.target.value)
        },
        clickButton(){
            let action ={type:'add_item'}
            dispatch(action)
        }
    }
}
export default connect(stateToProps,dispatchToProps)(Todolist);