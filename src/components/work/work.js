import React, { Component } from 'react'
import Footer from '../footer/footer';
import Nav from '../nav/nav.js'
import arjun from "../../assets/img/portrait1.jpg"

export default class Work extends Component {
    render() {
        return (<div> 
                <Nav/>
                
    <h1 className="lg-heading">
      My
      <span className="text-secondary">Work</span>
    </h1>
    <h2 className="sm-heading">
      Check out some of my projects...
    </h2>)
    }
}
