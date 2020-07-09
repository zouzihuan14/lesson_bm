import React, { Component , Fragment } from 'react';
import './style.css'
import XiaojiejieItem from './XiaojiejieItem'
// import axios from 'axios' 
import Boss from './Boss'

class Xiaojiejie extends Component {
    // 生命周期函数：在某一时刻可以自动执行的函数
    constructor(props){
        super(props)
        this.state = {
            inputValue: '欧洲步' ,
            list: ['三步上篮', 'SOMA步']
        }
    }
    // axios获取后台数据
    // componentDidMount() {
    //     axios.post('baidu.com')
    //     .then((res)=>{
    //         console.log('axxios获取数据成功'+JSON.stringify(res))})
    //     .catch((error)=>{console.log('axios 获取数据失败'+error)})
    // }
    render() { 
        return ( 

            <Fragment>
                {/* 第一次写注释 */}
                <div>
                    <label htmlFor='basket'>增加服务</label>
                    <input 
                    id='basket'
                     className='input'  
                     value= {this.state.inputValue} 
                      onChange = {this.inputChange.bind(this)}
                      ref = {(e)=>{ this.inputref=e}}
                      /> 
                    <button onClick = {this.addList.bind(this)}>增加技能包</button>
                </div>
                <ul ref = {(ul)=>{this.ulref=ul}}>
                    {
                        this.state.list.map((item,index)=>{
                            return (
                                <div key ={index+item}>
                                    <XiaojiejieItem 
                                    
                                    content={item}
                                    index={index}
                                    deleteItem={this.deleteItem.bind(this)}
                                    />

                                </div>
                                    )

                        })
                    }
                </ul>
                <Boss />
            </Fragment>
         );
    }
    inputChange(){
        // console.log(this)
        this.setState({
            inputValue:this.inputref.value
        })
    }
    //增加列表
    addList(){
        if(this.state.inputValue==='')
        {
            this.setState({
                list:[...this.state.list],
                inputValue: ''
    
            })
        }
        else
        {
            this.setState({
                list:[...this.state.list,this.state.inputValue],
                inputValue: ''
            },()=>{
                console.log(this.ulref.querySelectorAll('li').length)
            })
        }

    }
    //删除列表项
    deleteItem(index){
        // console.log(index)
        let list = this.state.list
        list.splice(index,1)
        // console.log(list)
        this.setState({
            list:list
        })
    }
}
 
export default Xiaojiejie;