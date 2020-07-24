import React from 'react';
import { HashRouter, Route , Redirect } from 'react-router-dom'
import './App.css';
import Home from './component/page-home'
import All from './component/page-all/index'
import Info from './component/page-info'
import My from './component/page-my'
import Detail from './component/page-all/details/air_clean/detail'


function App() {
  return (
    <div className="App">
      <HashRouter>
          <Route exact={true} path='/' component={Home} />
          <Route path='/all' component={All} />
          <Route path='/Info' component={Info} />
          <Route path='/My' component={My} />
          <Route path='/detail' component={Detail} />
          {/* <Route path='*' component={Home} /> */}
          {/* < Redirect from = '/*' to = '/detail' /> */}
      </HashRouter>
    </div>
  );
}

export default App;
