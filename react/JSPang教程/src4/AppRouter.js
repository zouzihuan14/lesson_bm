import React from 'react';
import { BrowserRouter as Router , Route , Link} from 'react-router-dom'
import Index from './Pages/Index'
import List from './Pages/List'
import Home from './Pages/Home'
function Approuter(){
    return (
        <Router>
            <ul>
                <li><Link to = '/'>首页</Link></li>
                <li><Link to = '/list/12311111111'>列表</Link></li>
            </ul>
            <Route path = '/' exact component ={Index} />
                      {/* key值为id */}
            <Route path = '/list/:id'  component ={List} />
            <Route path = '/home/' exact component ={Home} />

        </Router>
    )
}
export default Approuter