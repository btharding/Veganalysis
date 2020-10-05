import React from 'react';

import Logo from '../img/logo.svg';

class Header extends React.Component{
  render(){
    return(
      <div id = "header">
        <div id = "logo" onClick = {this.props.changeStateFn.bind(this,"goHome",true)}>
          <img src = {Logo} id = "logoImg" alt="logo"></img>
          <h1 id = "logoTxt">VEGANALYSIS</h1>
        </div>
      </div>
    )
  }
}

export default Header;
