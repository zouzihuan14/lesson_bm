import React , {useState}from 'react';
import {List , Icon} from "antd"
const {Item} = List

const TodoList = ({todos,onToggleFinished})=>{
    //删除
    const onDelete = e =>{

    }
    return(
        <div className="list-wrap">
            {todos.length === 0?(<p>暂无待办事项</p>):(
                <List
                itemLayout="horizontal"
                dataSource={todos}
                renderItem={(id,text,finished)=>{
                    const itemClasses = classNames({
                        "list-item":true,
                        "list-item__finished":finished

                    })
                    return(
                        // BEM block element Modifier   CSS命名
                    <Item className='list-item list-item__finished'>

                    </Item>
                    )
                }}
                />
            )}
        </div>
    )
}