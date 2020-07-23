import React from 'react';
import authStore from './store/auth'
import { Route } from 'react-router';

{/* <PrivateRouter path='/collect'/> */}


function PrivateRoute(props){
    //auth
    const isLogin = authStore.isLogin;
    const {path , component} =props
    if(!isLogin){
        return <Redirect to="/login"/>
    }
    return <Route path={path} component={component}  /> 

}
export default PrivateRoute