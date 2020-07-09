import { CHANGE_INPUT,ADD_ITEM,DELETE_ITEM } from './actionTypes'

const defaultState = {
    inputValue:'write Someting',
    list:[
        '早上七点半起床',
        '早上八点出门吃早餐',
        '上午十点开始上课'
    ]
}
export default (state =defaultState , action)=>{
    // console.log(action)
    //reducer里只能接受state 不能改变state  需要声明newstate局部变量
    if(action.type === CHANGE_INPUT)
    {
        let newState = JSON.parse(JSON.stringify(state))  //ES6深度拷贝
        newState.inputValue = action.value
        return newState
    }
    if(action.type ===ADD_ITEM){
        let newState = JSON.parse(JSON.stringify(state))  //ES6深度拷贝
        newState.list.push(newState.inputValue)       
        newState.inputValue = ''
        return newState
    }
    if(action.type === DELETE_ITEM){
        let newState = JSON.parse(JSON.stringify(state))  //ES6深度拷贝
        newState.list.splice(action.index,1)       
        return newState
    }
    return state
}