import React from 'react';
import { HashRouter, Route , Redirect } from 'react-router-dom'
import './App.css';
import Home from './component/page-home/index'
import All from './component/page-all/index'
import Info from './component/page-info'
import My from './component/page-my'
import Detail from './component/page-all/details/air_clean/detail'


function App() {
  return (
    <div className="App">
      <HashRouter>
          <Route path='/home' component={Home} />
          <Route path='/all' component={All} />
          <Route path='/info' component={Info} />
          <Route path='/my' component={My} />
          <Route path='/detail' component={Detail} />
          {/* <Route path='*' component={Home} /> */}
          < Redirect from = '/*' to = '/home' />
      </HashRouter>
    </div>
  );
}

export default App;
