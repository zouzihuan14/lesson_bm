import React, { Component } from 'react';
import {Link} from 'react-router-dom'
class Index extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            list :[
                {cid:123,title:'库里的三分之旅-1'},
                {cid:456,title:'库里的三分之旅-2'},
                {cid:789,title:'库里的三分之旅-3'},
                {cid:12,title:'库里的三分之旅-4'}
            ]
         }
         this.props.history.push("/home")
    }
    render() { 
        return ( 
            <div>
                {/* <Redirect to= "/home/"/> */}
                <h2>Index</h2>
                <ul>
                    {
                        this.state.list.map((item,index)=>{
                        return (<li key={index}>
                            <Link to = {'/list/'+item.cid}>{item.title}</Link>
                            </li>)
                        })
                    }
                </ul>
            </div>
        );
    }
}
 
export default Index;