import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Nav extends Component {
    render() {
        return (
            <div>
              <header>
              
    <div className="menu-btn">
      <div className="btn-line"></div>
      <div className="btn-line"></div>
      <div className="btn-line"></div>
    </div>

    <nav className="menu">
      <div className="menu-branding">
        <div className="portrait"></div>
      </div>
      <ul className="menu-nav">
        <li className="nav-item current">
         <a href="/" className="nav-link">
            Home
          </a>
        </li>
        <li className="nav-item current">
         <a href="/resume" className="nav-link">
            Resume
          </a>
        </li>
        <li className="nav-item current">
         <a href="/about" className="nav-link">
            About Me
          </a>
        </li>
        <li className="nav-item current">
         <a href="/MyWork" className="nav-link">
            My Work
          </a>
        </li>
        <li className="nav-item current">
         <a href="/contact" className="nav-link">
            How you Reach Me
          </a>
        </li>
      </ul>
    </nav>
 
  </header>
               
   
    
       </div>
        )
    }
}

















