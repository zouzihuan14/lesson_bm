import React from 'react';
import { Route , Link} from 'react-router-dom'
import ReactPage from './video/ReactPage'
import Flutter from './video/Flutter'
import Vue from './video/Vue'


function Video(){
    return (
        <div>
            <div className="topNav">
                <ul>
                    <li>
                        <Link to='/video/reactpage/'>react教程</Link>
                        <Link to='/video/flutter/'>flutter教程</Link>
                        <Link to='/video/vue/'>vue教程</Link>
                    </li>
                </ul>
            </div>
            <div className='videoContent'>
                <div><h3>视频教程</h3></div>
                <Route path='/video/reactpage/' component={ReactPage} />
                <Route path='/video/flutter/' component={Flutter} />
                <Route path='/video/vue/' component={Vue} />

            </div>
        </div>
    )
}

export default Video