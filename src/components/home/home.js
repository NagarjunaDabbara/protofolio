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
      <span> Nagarjuna</span>
    </h1>
    <h2 className="line-1 anim-typewriter"> Full-stack Developer & Designer.</h2>
    <p><strong> ReactJS&Redux | Angular8 | HTML5 | CSS3 | SASS | Bootstrap | AngularMaterialDesign | ReactMaterialDesign | Javascript/ES7 | Nodejs | Express | MongoDB </strong></p>
    <div className="icons">
      <a href="https://www.linkedin.com/in/nagarjuna-chowdary-525451194">
        <i className="fa fa-linkedin fa-2x"></i>
      </a>
      <a href="https://github.com/arjunchowdaryd">
        <i className="fa fa-github fa-2x"></i>
      </a>
    </div>
  </main>
  </div> <Footer/> </div>
        )
    }
}
