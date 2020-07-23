import React from 'react'
import PropTypes from 'prop-types'
import './Journey.css'

export default function Journey(props){
    const { from ,to} = props
    return (
        <>
        <div className="journey">
            <div className="journey-station"><input type="text" className="journey-input" name = 'from'
            readOnly value={from}/>
             </div>
        </div>
        <div className="journey-switch" onClick ={()=>exchangeFromTo()}>
            <img src="" alt=""/>
        </div>
         <div className="journey">
         <div className="journey-station"><input type="text" className="journey-input" name = 'from'
            readOnly value={to}/></div>
        </div>       
        </>
    )
}
Journey.protoTypes = {
    from: PropTypes.string.isRequired,
    to:PropTypes.string.isRequired
}