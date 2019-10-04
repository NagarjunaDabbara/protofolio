import React, { Component } from 'react'
import Nav from '../nav/nav.js'
import Footer from '../footer/footer.js'
import arjun from "../../assets/img/portrait1.jpg"
import video from "../../assets/img/video.svg"
import guitar from "../../assets/img/guitar.svg"
import monitor from "../../assets/img/monitor.svg"
import phone from "../../assets/img/phone.svg"

export default class Resume extends Component {
  render() {
    return (
      <div>
        <Nav />
        <div id="resume">
          <div className="container">
            <section>
              <div>
                <div><img src={arjun} alt="avatar" className="avatar" /></div>
              </div>
              <div>
                <div className="my-name">Dabbara Nagarjuna</div>
                <div className="my-title">Full Stack Web Developer</div>
                <div className="links">
                  <div className="link-item">
                    <svg className="icon" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M1520 1216q0-40-28-68l-208-208q-28-28-68-28-42 0-72 32 3 3 19 18.5t21.5 21.5 15 19 13 25.5 3.5 27.5q0 40-28 68t-68 28q-15 0-27.5-3.5t-25.5-13-19-15-21.5-21.5-18.5-19q-33 31-33 73 0 40 28 68l206 207q27 27 68 27 40 0 68-26l147-146q28-28 28-67zm-703-705q0-40-28-68l-206-207q-28-28-68-28-39 0-68 27l-147 146q-28 28-28 67 0 40 28 68l208 208q27 27 68 27 42 0 72-31-3-3-19-18.5t-21.5-21.5-15-19-13-25.5-3.5-27.5q0-40 28-68t68-28q15 0 27.5 3.5t25.5 13 19 15 21.5 21.5 18.5 19q33-31 33-73zm895 705q0 120-85 203l-147 146q-83 83-203 83-121 0-204-85l-206-207q-83-83-83-203 0-123 88-209l-88-88q-86 88-208 88-120 0-204-84l-208-208q-84-84-84-204t85-203l147-146q83-83 203-83 121 0 204 85l206 207q83 83 83 203 0 123-88 209l88 88q86-88 208-88 120 0 204 84l208 208q84 84 84 204z" /></svg>
                  </div>
                  <div className="link-item">
                    <svg className="icon" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M1664 1504v-768q-32 36-69 66-268 206-426 338-51 43-83 67t-86.5 48.5-102.5 24.5h-2q-48 0-102.5-24.5t-86.5-48.5-83-67q-158-132-426-338-37-30-69-66v768q0 13 9.5 22.5t22.5 9.5h1472q13 0 22.5-9.5t9.5-22.5zm0-1051v-24.5l-.5-13-3-12.5-5.5-9-9-7.5-14-2.5h-1472q-13 0-22.5 9.5t-9.5 22.5q0 168 147 284 193 152 401 317 6 5 35 29.5t46 37.5 44.5 31.5 50.5 27.5 43 9h2q20 0 43-9t50.5-27.5 44.5-31.5 46-37.5 35-29.5q208-165 401-317 54-43 100.5-115.5t46.5-131.5zm128-37v1088q0 66-47 113t-113 47h-1472q-66 0-113-47t-47-113v-1088q0-66 47-113t113-47h1472q66 0 113 47t47 113z" /></svg>
                    <a href="mailto:email@email.com">arjunchowdary335@gmail.com</a>
                  </div>
                  <div className="link-item">
                    <svg className="icon" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M1600 1240q0 27-10 70.5t-21 68.5q-21 50-122 106-94 51-186 51-27 0-53-3.5t-57.5-12.5-47-14.5-55.5-20.5-49-18q-98-35-175-83-127-79-264-216t-216-264q-48-77-83-175-3-9-18-49t-20.5-55.5-14.5-47-12.5-57.5-3.5-53q0-92 51-186 56-101 106-122 25-11 68.5-21t70.5-10q14 0 21 3 18 6 53 76 11 19 30 54t35 63.5 31 53.5q3 4 17.5 25t21.5 35.5 7 28.5q0 20-28.5 50t-62 55-62 53-28.5 46q0 9 5 22.5t8.5 20.5 14 24 11.5 19q76 137 174 235t235 174q2 1 19 11.5t24 14 20.5 8.5 22.5 5q18 0 46-28.5t53-62 55-62 50-28.5q14 0 28.5 7t35.5 21.5 25 17.5q25 15 53.5 31t63.5 35 54 30q70 35 76 53 3 7 3 21z" /></svg>
                    <a href="tel:123-456-7890">+91-9381563895</a>
                  </div>
                </div>
                <p>I am highly creative, forward thinking professional with a multi-faceted background in User Experience, front-end, backend development and responsive design, programming for both static and dynamically loaded content.</p>
                <ul>
                    <li>Strong Knowledge in webtechnologies including <strong>- |ReactJS & Redux|Angular8|HTML5|CSS3|SASS|Bootstrap|AngularMaterialDesign|ReactMaterialDesign|Javascript/ES7|Nodejs|Express|MongoDB.</strong></li>
                    <li>Strong Object oriented language concepts.</li>
                    <li>Buliding and Maintaining websites based on design and bussiness goals.</li>
                  </ul>
              </div>
            </section>
            <section>
              <div className="section-title">Experience</div>
              <div>
                <div>
                   Jan 2017 - Jan 2019
                </div>
                <div className="job">
                  <div className="job-title-container">
                    <div>
                      <p>Worked within teams of creative <u>"Freelancer"</u> to build the applications using React & Angular 8 (MERN-Stack,MEAN-Stack). Professionally designed the websites from the ground up, including designing UX and fixing sites bugs.</p>
                     <ul>
                      <li>Collaborating with 3 agencies, developed websites for clients in the e-commerce, portfolio and blogging industries.</li>
                      <li>Validated completed sites, including testing and debugging of code.</li>
                      <li>Responsible for quality assurance of finished websites, including validating web forms and links.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <div className="section-title">Education</div>
              <div>
                <div className="job">
                  <div className="job-title-container">
                    <div>
                      <div className="job-company">Himalayan University</div>
                      <div className="job-title">Bachelor of Computer Applications(BCA).</div>
                    </div>
                    <div>
                      Jan 2015 - Jan 2018
                   </div>
                   </div>
                      <p>percentage:-75%</p>            </div>
                   </div>
              <div>
                <div className="job">
                  <div className="job-title-container">
                    <div>
                      <div className="job-company">My College</div>
                      <div className="job-title">Nalanda Junior College, Anantapur, Andhra Pradesh.</div>
                    </div>
                    <div>
                      Jan 2013 - Jan 2015
                    </div>
                  </div>
                  <p>percentage:73%</p>            </div>
              </div>

              <div>
                <div className="job">
                  <div className="job-title-container">
                    <div>
                      <div className="job-company">My school</div>
                      <div className="job-title">Keshava Reddy Concept School, Tirupathi, Andhra Pradesh.</div>
                    </div>
                    <div>
                      2011 - 2013
                    </div>
                  </div>
                  <p>percentage:85%</p>            </div>
              </div>
            </section>

            <section>
              <div className="section-title">Skills</div>
              <div>
                <div className="skills-container">
                  <ul>
                    <li>React </li>
                    <li>NodeJs </li>
                    <li> ExpressJs</li>
                    <li>MongoDB</li>
                  </ul>

                  <ul>
                    <li>Angular 8</li>
                    <li>NodeJS</li>
                    <li>ExpressJS</li>
                    <li>MongoDB</li>
                  </ul>
                  
                  <div>
                  <div className="section-title">Additional Skills</div>
                   <ul>
                  <li>VCS:GitHub</li>
                    <li>Buliders: Webpack and Gulp</li>
                    <li>Cloud services: Heroku and AWS</li>
                    <li>Testing: Jest, Mocha, Chai and Cypress.io</li>
                    <li>OS: linux and Windows</li>
                    <li>C language</li>
                  </ul>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <div className="section-title">Interests</div>
              <div className="interests-container">
                <img src={monitor} alt="icon" />
                <img src={phone} alt="icon" />
                <img src={video} alt="icon" />
                <img src={guitar} alt="icon" />

              </div>
            </section>

          </div>

        </div>
        <Footer />
      </div>
    )
  }
}
