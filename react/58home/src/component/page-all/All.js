import React from 'react';
import { BrowserRouter, Route, Link ,sw } from 'react-router-dom'
import Detail from './details/air_clean/index'
import All from './index'


function All_Router() {
  return (
      
    <BrowserRouter>
        <Route exact path='/All' component={All}></Route>
        <Route exact path='/detail' component={Detail}></Route>
    </BrowserRouter>
    );
}

export default All_Router;
