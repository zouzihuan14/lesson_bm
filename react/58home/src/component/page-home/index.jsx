import React from 'react';
import HomePage from './component'
import { Route } from 'react-router-dom'
import City from './child-page/city/City'

export default function Home() {
    return (
        <div className="wrapper">
                <Route exact path='/home' component={HomePage} />
                <Route path='/home/city' component={City} />
        </div>
    )
}