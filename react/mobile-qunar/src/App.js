import React,{ useCallback ,useMemo} from 'react'
import './App.css'
import Header from './components/header/Header'
import Journey from './components/Journey/Journey.jsx'
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux'
import {exchangeFromTo} from './store/actions'
function App(props) {
  const {from , to} =props
  const onBack = useCallback(() => {
    window.history.back();
  },[])
//usecallback无返回值 无return
  const cbs = useMemo(()=>{
    return bindActionCreators({
      exchangeFromTo
    },dispatch)
  },[])
//usememo有返回值 有return
  return (
    <div className="App">
      <div className="header-wrapper">
        <Header title="火车票" onBack={onBack}/>
      </div>
      <from action = "./query.html" className ='form'>  
        <Journey from ={from} to={to}/>
      </from>
    </div>
  )
}

// export default App;
export default connect(function mapStateToProps(state){
  return state
},function mapDispatchToprops(dispatch){
  
})(App);