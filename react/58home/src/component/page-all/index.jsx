import React from 'react';
import { BrowserRouter as Router , Route , Link} from 'react-router-dom'
import Hot from './pages/hot'
// import Video from './Pages/Video'
// import Workplace from './Pages/Workplace'

import './index.css'


function All(){
    let routerConfig = [
        {path:'/all',title:'热门',exact:true,component:Hot},
        {path:'/all',title:'热门',exact:true,component:Hot},
        {path:'/all',title:'热门',exact:true,component:Hot},
        {path:'/all',title:'热门',exact:true,component:Hot},
        {path:'/all',title:'热门',exact:true,component:Hot},
    ]
    return (

        <Router>
            <div className="nav">
                <div className='search'>擦玻璃</div>
                <div className='add'></div>
            </div>
                <div className = 'mainDiv'>
                <div className = 'leftNav'>
                    
                    <ul>
                       {

                           routerConfig.map((item,index)=>{
                               if(item.title === '热门'){
                               return(
                                <div className='link'>
                               <Link to ={item.path}>
                                <div style={{'color':'black'}}>{item.title}</div>
                                </Link>
                                </div>
                               
                               )}
                               else return ''
                           })
                       }
                    </ul>
                </div>
                <div className="rightMain">
               { 
               routerConfig.map((item,index)=>{
                return(
                <Route 
                key={index} path={item.path} exact={item.exact} 
                component={item.component} 
                />
                )})       
                }
                </div>
            </div>

        </Router>
    )
}
export default All