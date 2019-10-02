import React, { Component } from 'react'
import Nav from '../nav/nav.js'
import Footer from '../footer/footer.js'

export default class Contact extends Component {
    render() {
        return (
            <div>
                 <Nav/>
                 <div id="main">
                <main id="contact">
    <h1 className="lg-heading">
      Contact
      <span className="text-secondary">Me</span>
    </h1>
    <h2 className="sm-heading">
      This is how you can reach me...
    </h2>
    <div className="boxes">
      <div>
        <span className="text-secondary">Email: </span> arjunchowdary@gmail.com
      </div>
      <div>
        <span className="text-secondary">Phone: </span> (+91) 9381563895
      </div>
      <div>
          <span className="text-secondary">Address: </span>  Banglore
      </div>
     
    </div>
   
    <div className="container">
      <h1 className="text-center aboutHeading">Contact Me</h1>
      <form>
        <div className="form-group">
          <label for="formGroupExampleInput">Name</label>
          <input type="text" className="form-control" id="formGroupExampleInput"/>
        </div>
        <div className="form-group">
          <label for="exampleFormControlInput1">Email address</label>
          <input type="email" className="form-control" id="exampleFormControlInput1"/>
        </div>
        <div className="form-group">
          <label for="exampleFormControlTextarea1">Message</label>
          <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>
        <div>
          <button type="submit" className="btn btn-info mb-2" id="button">Submit</button>
        </div>
      </form>
    </div>
  
         
  </main>
  </div>

           <Footer/>
            </div>
        )
    }
}
