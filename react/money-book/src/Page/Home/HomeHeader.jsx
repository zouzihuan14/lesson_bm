import React from 'react';
import logo from '../../logo.svg'

class HomeHeader extends React.Component {
  render() {
    return(
      <React.Fragment>
        <div className='row'>
          <img src={logo} alt=""/>
        </div>
      </React.Fragment>
    )
  }
}


export default HomeHeader;