import React from 'react';
import {BrowserRouter as Router,Route} from "react-router-dom"
import './App.css';
import Home from './components/home/home.js'
import About from './components/about/about.js'
import MyWork from './components/work/work.js'
import Contact from './components/contact/contact.js'
import Resume from './components/resume/resume.js'

function App() {
  return (
    <div>
      <Router>
      <Route exact path="/" component={Home}/>
      <Route exact path="/about" component={About}/>
      <Route exact path="/MyWork" component={MyWork}/>
      <Route exact path="/contact" component={Contact}/>
      <Route exact path="/resume" component={Resume}/>
      </Router>
    
    </div>
  );
}

export default App;
