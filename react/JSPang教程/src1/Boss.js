import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group'
class Boss extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            isShow :true
        }
        this.show = this.show.bind(this)
    }
    render() { 
        return ( 
            <div>
                <CSSTransition >
                 {/* in={this.state.isShow} timeout={2000} classNames = { boss_box }> */}
                <div >NBA全明星curry</div>
                </CSSTransition>
                
                <div><button onClick = {this.show}>开始比赛</button></div>
            </div>
         );
    }
    show(){
        this.setState({
            isShow: this.state.isShow ? false:true
        })
    }
}
 
export default Boss;