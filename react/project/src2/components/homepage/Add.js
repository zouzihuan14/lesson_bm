import React, { Component } from 'react';
import { Link } from 'react-router-dom';
let obj1
class Add extends Component {
    constructor() {
        super()
        this.state = {
            nameVal: '',
            imgVal: '',
            obj: []
        }
    }
    // componentWillMount(){
    //     this.setState({
    //         nameVal:'',
    //         imgVal : '',
    //     })
    // }
    componentDidMount() {
        if (localStorage.getItem('state')) {
            this.setState({
                obj: JSON.parse(localStorage.getItem('state'))
            })
        }
    }
    handleNameVal(e) {
        this.setState({
            nameVal: e.target.value
        })
    }
    handleImgVal(e) {
        this.setState({
            imgVal: e.target.value
        })
    }
    handleLocalStroage() {
        obj1 = this.state.obj
        obj1.push({ 'img': `${this.state.imgVal}`, 'name': `${this.state.nameVal}` })
        localStorage.setItem('state', JSON.stringify(obj1))
    }
    render() {
        // console.log(this.props)
        console.log(this.state.nameVal ? 1 : 2)
        return (
            <div>

                <div className="add-top">
                    <Link to='/'><div>取消</div></Link>
                    
                        {this.state.nameVal ? <Link to='/'><div
                            onClick={this.handleLocalStroage.bind(this)}
                        >下一步</div></Link> : <Link to='#'><div
                        >下一步</div></Link>}
                    
                </div>
                <div className='add-main'>
                    <input value={this.state.imgVal} onChange={this.handleImgVal.bind(this)} type="text" />
                    <input type="text" value={this.state.nameVal} onChange={this.handleNameVal.bind(this)} />
                </div>
            </div>
        );
    }
}

export default Add;