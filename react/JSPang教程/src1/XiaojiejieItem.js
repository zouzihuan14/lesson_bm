import React, { Component } from 'react';
import PropTypes from 'prop-types'


class XiaojiejieItem extends Component {
    constructor(props){
        super(props)
        this.handClick=this.handClick.bind(this)
    }
    //组件第一次存在于dom中，函数是不会被执行的
    //如果已经存在于DOM中，发生变化时才会被执行
    // UNSAFE_componentWillReceiveProps(nextProps) {
    //     console.log('5-----------componentWillReceiveProps')
        
    // }
    shouldComponentUpdate(nextProps,nextState) {
        if(nextProps.content!== this.props.content)
        {return true;}
        else 
        {return false;}

    }
    render() { 
        console.log('child-render')

        return ( 
            <li onClick = {this.handClick}>
                {this.props.aname}  教你  {this.props.content}
                </li>
         );
         
    }
    //子组件对父组件进行修改数据  不能直接操作数据 先通过父组件向子组件传方法，再操作父组件的数据
    handClick(){
        this.props.deleteItem(this.props.item)
    }
    // 通过

}
//propTypes 
 XiaojiejieItem.propTypes={
     aname:PropTypes.string.isRequired,
     content:PropTypes.string,
     index:PropTypes.number,
     deleteItem:PropTypes.func
 }
 XiaojiejieItem.defaultProps = {
     aname:'curry'
 }
export default XiaojiejieItem;