import React from 'react';
import { NavLink} from 'react-router-dom';
import logo from '../images/logo192.png';
import '../App.css';
import './navbar.css';

const Navbar = () => {
    const url = 'to be declared';
    return ( 
        <nav className="navbar is-fixed-top customNav has-background-light" role="navigation" aria-label="main navigation">
          <div className="navbar-brand">
            <a className="navbar-item" href="https://sungharsh.github.io/" target="_blank" rel="noopener noreferrer">
            <img src={logo} className="App-logo" alt="logo" />
            </a>

            <a href={url} role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>

          <div id="navbarBasicExample" className="navbar-menu">
            <div className="navbar-start">
              <NavLink className="navbar-item" to="/Profile">Profile</NavLink>
              <NavLink className="navbar-item" to="/DisplayAPI">DisplayAPI</NavLink>
          
              <div className="navbar-item has-dropdown is-hoverable">
                <a href={url} className="navbar-link">
                  More
                </a>

                <div className="navbar-dropdown">
                      <NavLink className="navbar-item" to="/AllUsers">AllUsers</NavLink> 
                      <NavLink className="navbar-item" to="/InputToOutPut">InOut</NavLink>      
                      <NavLink className="navbar-item" to="/Alert">Alert</NavLink>
                      <NavLink className="navbar-item" to="/Add">Add</NavLink>
                      <NavLink className="navbar-item" to="/DOMAnimate">Animate</NavLink>
                      <NavLink className="navbar-item" to="/GetReusable">HOC-Com</NavLink>
                  <a href={url} className="navbar-item">
                    Contact
                  </a>
                  <hr className="navbar-divider" />
                  <a href={url} className="navbar-item">
                    Report an issue
                  </a>     
                </div> 
              </div>
            </div>
            <div className="navbar-end">
              <div className="navbar-item">
              
                  <a href={url} className="is-light">
                    Sign up &nbsp;&nbsp;&nbsp;&nbsp;
                  </a>
                  <a href={url} className="is-light">
                    Log in
                  </a>
                
              </div>
            </div>
          </div>
        </nav>
     );
}
export default Navbar;