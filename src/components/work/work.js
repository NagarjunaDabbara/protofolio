import React, { Component } from 'react'
import Footer from '../footer/footer';
import Nav from '../nav/nav.js'
import arjun from "../../assets/img/portrait1.jpg"

export default class Work extends Component {
    render() {
        return (
            <div>
                <Nav/>
                <div id="main">
                <main id="work">
    <h1 className="lg-heading">
      My
      <span className="text-secondary">Work</span>
    </h1>
    <h2 className="sm-heading">
      Check out some of my projects...
    </h2>
    <div className="Projects">
      <div className="item">
        <a href="#!">
          <img src={arjun} alt="Project"/>
        </a>
        <a href="#" className="btn-light">
          <i className="fa fa-eye"></i> Project
        </a>
        <a href="#" className="btn-dark">
          <i className="fa fa-github"></i> Github
        </a>
      </div>
      <div className="item">
        <a href="#!">
          <img src={arjun} alt="Project"/>
        </a>
        <a href="#" className="btn-light">
          <i className="fa fa-eye"></i> Project
        </a>
        <a href="#" className="btn-dark">
          <i className="fa fa-github"></i> Github
        </a>
      </div>
      <div className="item">
        <a href="#!">
          <img src={arjun} alt="Project"/>
        </a>
        <a href="#" className="btn-light">
          <i className="fa fa-eye"></i> Project
        </a>
        <a href="#" className="btn-dark">
          <i className="fa fa-github"></i> Github
        </a>
      </div>
      <div className="item">
        <a href="#!">
          <img src={arjun} alt="Project"/>
        </a>
        <a href="#" className="btn-light">
          <i className="fa fa-eye"></i> Project
        </a>
        <a href="#" className="btn-dark">
          <i className="fa fa-github"></i> Github
        </a>
      </div>
      
    </div>
  </main>
  </div>
     <Footer/>
        </div>
        )
    }
}
