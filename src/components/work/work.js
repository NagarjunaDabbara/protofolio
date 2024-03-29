import React, { Component } from 'react'
import Footer from '../footer/footer';
import Nav from '../nav/nav.js'
import arjun from "../../assets/img/portrait1.jpg"

export default class Work extends Component {
    render() {
        return (<div> 
                <Nav/>
    <h1 className="lg-heading">My<span className="text-secondary">Work</span></h1>
    <h2 className="sm-heading">Check out some of my projects...</h2>
                
   <div className="Projects">   
      <div className="item">
        <a href="#!"> <img src={arjun} alt="Project"/> </a>
        <a href="https://ananyaeliteproject.herokuapp.com/" className="btn-light"> <i className="fa fa-eye"></i> Project</a>
        <a href="https://github.com/arjunchowdaryd/ananyaengineers" className="btn-dark"> <i className="fa fa-github"></i> Github </a>
      </div>
                
      <div className="item">
        <a href="#!"> <img src={arjun} alt="Project"/> </a>
        <a href="https://beachproject.herokuapp.com/" className="btn-light"> <i className="fa fa-eye"></i> Project</a>
        <a href="https://github.com/arjunchowdaryd/beachresort" className="btn-dark"> <i className="fa fa-github"></i> Github </a>
      </div>    
    </div>  
      <Footer/>
   </div>)
    }
}
