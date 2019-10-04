import React, { Component } from 'react'
import Nav from '../nav/nav.js'
import Footer from '../footer/footer.js'
import arjun from "../../assets/img/portrait1.jpg"
export default class About extends Component {
    render() {
        return (
            <div>
                <Nav/>
                <div id="main">
                <main id="about">
    <h1 className="lg-heading">
      About
      <span className="text-secondary">Me</span>
    </h1>
    <h2 className="sm-heading">
      Let me tell you a few things...
    </h2>
    <div className="about-info">
      <img src={arjun}  className="bio-image"/>

      <div className="bio">
      
        <p>I am interested in IT and everything in its orbit. I am fascinated by web programming, e.g.building ReactJS websites using Redux. I was invited to join my uncle's start-up company as a Full-Stack Developer, I gained experience of working in designing devoloping web applications. Now I am keen to gain more experience in this field. For this reason, I am looking for a company willing to offer me a placement among their developers' team. In return, I would offer my full commitment, and be a pleasant and friendly addition to your team.</p>
      </div>

      <div className="job job-1">
        <h3>Employee</h3>
        <h6>Full Stack Developer</h6>
        <p>I worked on many Websites. I worked in Modern tech like Loopback, Swagger and many More.</p>
      </div>

      <div className="job job-2">
        <h3>Online Working</h3>
        <h6>Front End Developer</h6>
        <p>I worked on interactive and responsive websites using many tools and new technology both on front end and bacn end development.</p>
      </div>

      <div className="job job-3">
        <h3>Online Working</h3>
        <h6>Front End Developer</h6>
      </div>
      </div>
  </main>
  </div>
  <Footer/>
            </div>
        )
    }
}
