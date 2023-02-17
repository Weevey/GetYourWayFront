import React from 'react'
import logo from '../Images/GetYourWay.gif'
import NavigationBar from './NavigationBar'

const Header = () => {
  return (
    <header className="header-style">
        <div>
            <div className="row">
            <a href="/">
            <img src={logo} width="300px" className="header-logo"/>
            </a>
            <NavigationBar />
            </div>
        </div>
    </header>
    
  )
}

export default Header