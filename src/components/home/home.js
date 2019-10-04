import React, { Component } from 'react'
import Nav from '../nav/nav.js'
import Footer from '../footer/footer.js'

export default class home extends Component {
    render() {
        return (
            <div>
              <Nav/>
<div id="main">
  <main id="home">
    <h1 className="lg-heading">
      Dabbara
      <span >Nagarjuna</span>
    </h1>
    <h2 className="line-1 anim-typewriter"> Full-stack Developer & designer.</h2>
    <p><strong>HTML/CSS,HTML5,CSS3,SAAS | Bootstrap | JavaScript | React | Angular 8 |React& Angular Material Design| NodeJS | Express | MongoDB</strong></p>
    <div className="icons">
      <a href="#!">
        <i className="fa fa-twitter fa-2x"></i>
      </a>
      <a href="https://www.facebook.com/dnagarjuna.naidu.3">
        <i className="fa fa-facebook fa-2x"></i>
      </a>
      <a href="#!">
        <i className="fa fa-linkedin fa-2x"></i>
      </a>
      <a href="https://github.com/arjunchowdaryd">
        <i className="fa fa-github fa-2x"></i>
      </a>
    </div>
  </main>
  </div>
<Footer/>
            </div>
        )
    }
}
