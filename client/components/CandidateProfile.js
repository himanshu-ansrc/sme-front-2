import React, {Component, Fragment} from 'react'
import Header2 from './Partials/Header-2'
import Footer from './Partials/Footer'
import './Partials/Externals.js'


class CandidatesProfile extends Component{
      render(){
      	 return(
            <Fragment>
                   <Header2/>
				    <div className="alice-bg padding-top-60 section-padding-bottom">
				      <div className="container">
				        <div className="row">
				          <div className="col">
				            <div className="candidate-details">
				              <div className="title-and-info">
				                <div className="title">
				                  <div className="thumb">
				                    <img src="images/candidate/thumb-1.jpg" className="img-fluid" alt="" />
				                  </div>
				                  <div className="title-body">
				                    <h4>Micheal N. Taylor</h4>
				                    <div className="info">
				                      <span className="candidate-designation"><i data-feather="check-square"></i>ios Developer</span>
				                      <span className="candidate-location"><i data-feather="map-pin"></i>Los Angeles</span>
				                    </div>
				                  </div>
				                </div>
				                <div className="download-resume">
				                  <a href="candidate-details.html#">Download CV <i data-feather="download"></i></a>
				                </div>
				              </div>
				              <div className="skill-and-profile">
				                <div className="skill">
				                  <label>Skills:</label>
				                  <a href="candidate-details.html#">Design</a>
				                  <a href="candidate-details.html#">Illustration</a>
				                  <a href="candidate-details.html#">iOS</a>
				                </div>
				                <div className="social-profile">
				                  <label>Social:</label>
				                  <a href="candidate-details.html#"><i className="fab fa-facebook-f"></i></a>
				                  <a href="candidate-details.html#"><i className="fab fa-twitter"></i></a>
				                  <a href="candidate-details.html#"><i className="fab fa-google-plus"></i></a>
				                  <a href="candidate-details.html#"><i className="fab fa-linkedin-in"></i></a>
				                  <a href="candidate-details.html#"><i className="fab fa-pinterest-p"></i></a>
				                  <a href="candidate-details.html#"><i className="fab fa-behance"></i></a>
				                  <a href="candidate-details.html#"><i className="fab fa-dribbble"></i></a>
				                  <a href="candidate-details.html#"><i className="fab fa-github"></i></a>
				                </div>
				              </div>
				              <div className="details-information section-padding-60">
				                <div className="row">
				                  <div className="col-xl-7 col-lg-8">
				                    <div className="about-details details-section">
				                      <h4><i data-feather="align-left"></i>About Me</h4>
				                      <p>Combined with a handful of model sentence structures, to generate lorem Ipsum which  It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including.</p>
				                      <p>Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classNameical literature, discovered the undoubtable </p>
				                    </div>
				                    <div className="edication-background details-section">
				                      <h4><i data-feather="book"></i>Education Background</h4>
				                      <div className="education-label">
				                        <span className="study-year">2018 - Present</span>
				                        <h5>Masters in Software Engineering<span>@ Engineering University</span></h5>
				                        <p>Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage</p>
				                      </div>
				                      <div className="education-label">
				                        <span className="study-year">2014 - 2018</span>
				                        <h5>Diploma in Graphics Design<span>@ Graphic Arts Institute</span></h5>
				                        <p>Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage</p>
				                      </div>
				                      <div className="education-label">
				                        <span className="study-year">2008 - 2014</span>
				                        <h5>Secondary School Certificate<span>@  Engineering High School</span></h5>
				                        <p>Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage</p>
				                      </div>
				                    </div>
				                    <div className="experience details-section">
				                      <h4><i data-feather="briefcase"></i>Work Experiance</h4>
				                      <div className="experience-section">
				                        <span className="service-year">2016 - Present</span>
				                        <h5>Lead UI/UX Designer<span>@ Codepassengers LTD</span></h5>
				                        <p>Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage</p>
				                      </div>
				                      <div className="experience-section">
				                        <span className="service-year">2012 - 2016</span>
				                        <h5>Former Graphic Designer<span>@ Graphicreeeo CO</span></h5>
				                        <p>Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage</p>
				                      </div>
				                    </div>
				                    <div className="professonal-skill details-section">
				                      <h4><i data-feather="feather"></i>Professional Skill</h4>
				                      <p>Combined with a handful of model sentence structures, to generate lorem Ipsum which  It has survived not only five centuries, but also the leap into electronic typesetting</p>
				                      <div className="progress-group">
				                        <div className="progress-item">
				                          <div className="progress-head">
				                            <p className="progress-on">Photoshop</p>
				                          </div>
				                          <div className="progress-body">
				                            <div className="progress">
				                              <div className="progress-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style={{'width': '0'}}></div>
				                            </div>
				                            <p className="progress-to">70%</p>
				                          </div>
				                        </div>
				                        <div className="progress-item">
				                          <div className="progress-head">
				                            <p className="progress-on">HTML/CSS</p>
				                          </div>
				                          <div className="progress-body">
				                            <div className="progress">
				                              <div className="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" style={{'width': '0'}}></div>
				                            </div>
				                            <p className="progress-to">90%</p>
				                          </div>
				                        </div>
				                        <div className="progress-item">
				                          <div className="progress-head">
				                            <p className="progress-on">JavaScript</p>
				                          </div>
				                          <div className="progress-body">
				                            <div className="progress">
				                              <div className="progress-bar" role="progressbar" aria-valuenow="74" aria-valuemin="0" aria-valuemax="100" style={{'width': '0'}}></div>
				                            </div>
				                            <p className="progress-to">74%</p>
				                          </div>
				                        </div>
				                        <div className="progress-item">
				                          <div className="progress-head">
				                            <p className="progress-on">PHP</p>
				                          </div>
				                          <div className="progress-body">
				                            <div className="progress">
				                              <div className="progress-bar" role="progressbar" aria-valuenow="86" aria-valuemin="0" aria-valuemax="100" style={{'width': '0'}}></div>
				                            </div>
				                            <p className="progress-to">86%</p>
				                          </div>
				                        </div>
				                      </div>
				                    </div>
				                    <div className="special-qualification details-section">
				                      <h4><i data-feather="gift"></i>Special Qualification</h4>
				                      <ul>
				                        <li>5 years+ experience designing and building products.</li>
				                        <li>Skilled at any Kind Design Tools.</li>
				                        <li>Passion for people-centered design, solid intuition.</li>
				                        <li>Hard Worker & Quick Lerner.</li>
				                      </ul>
				                    </div>
				                    <div className="portfolio details-section">
				                      <h4><i data-feather="gift"></i>Portfolio</h4>
				                      <div className="portfolio-slider owl-carousel">
				                        <div className="portfolio-item">
				                          <img src="images/portfolio/thumb-3.jpg" className="img-fluid" alt="" />
				                          <div className="overlay">
				                            <a href="candidate-details.html#"><i data-feather="eye"></i></a>
				                            <a href="candidate-details.html#"><i data-feather="link"></i></a>
				                          </div>
				                        </div>
				                        <div className="portfolio-item">
				                          <img src="images/portfolio/thumb-1.jpg" className="img-fluid" alt="" />
				                          <div className="overlay">
				                            <a href="candidate-details.html#"><i data-feather="eye"></i></a>
				                            <a href="candidate-details.html#"><i data-feather="link"></i></a>
				                          </div>
				                        </div>
				                        <div className="portfolio-item">
				                          <img src="images/portfolio/thumb-2.jpg" className="img-fluid" alt="" />
				                          <div className="overlay">
				                            <a href="candidate-details.html#"><i data-feather="eye"></i></a>
				                            <a href="candidate-details.html#"><i data-feather="link"></i></a>
				                          </div>
				                        </div>
				                        <div className="portfolio-item">
				                          <img src="images/portfolio/thumb-3.jpg" className="img-fluid" alt="" />
				                          <div className="overlay">
				                            <a href="candidate-details.html#"><i data-feather="eye"></i></a>
				                            <a href="candidate-details.html#"><i data-feather="link"></i></a>
				                          </div>
				                        </div>
				                        <div className="portfolio-item">
				                          <img src="images/portfolio/thumb-2.jpg" className="img-fluid" alt="" />
				                          <div className="overlay">
				                            <a href="candidate-details.html#"><i data-feather="eye"></i></a>
				                            <a href="candidate-details.html#"><i data-feather="link"></i></a>
				                          </div>
				                        </div>
				                      </div>
				                    </div>
				                  </div>
				                  <div className="col-xl-4 offset-xl-1 col-lg-4">
				                    <div className="information-and-contact">
				                      <div className="information">
				                        <h4>Information</h4>
				                        <ul>
				                          <li><span>Category:</span> Design & Creative</li>
				                          <li><span>Location:</span> Los Angeles</li>
				                          <li><span>Status:</span> Full-time</li>
				                          <li><span>Experience:</span> 3 year(s)</li>
				                          <li><span>Salary:</span> $32k - $36k</li>
				                          <li><span>Gender:</span> Male</li>
				                          <li><span>Age:</span> 24 Year(s)</li>
				                          <li><span>Qualification:</span> Gradute</li>
				                        </ul>
				                      </div>
				                      <div className="buttons">
				                        <a href="candidate-details.html#" className="button contact-button" data-toggle="modal" data-target="#exampleModal">Contact Me</a>
				                        <a href="candidate-details.html#" className="button cover-download"><i data-feather="download"></i>Cover Letter</a>
				                        <a href="candidate-details.html#" className="button contact-download"><i data-feather="download"></i>Contact</a>
				                      </div>
				                      <div className="modal fade contact-form-modal" id="exampleModal" tabIndex="-1" role="dialog" aria-hidden="true">
				                        <div className="modal-dialog" role="document">
				                          <div className="modal-content">
				                            <div className="modal-body">
				                              <h4><i data-feather="edit"></i>Contact Me</h4>
				                              <form action="candidate-details.html#">
				                                <div className="form-group">
				                                  <input type="text" className="form-control" placeholder="Your Name" />
				                                </div>
				                                <div className="form-group">
				                                  <input type="email" className="form-control" placeholder="Your Email" />
				                                </div>
				                                <div className="form-group">
				                                  <textarea className="form-control" placeholder="Your Message"></textarea>
				                                </div>
				                                <button className="button">Submit</button>
				                              </form>
				                            </div>
				                          </div>
				                        </div>
				                      </div>
				                    </div>
				                  </div>
				                </div>
				              </div>
				              <div className="row">
				                <div className="col-xl-7 col-lg-8">
				                  <div className="personal-information details-section">
				                    <h4><i data-feather="user-plus"></i>Personal Deatils</h4>
				                    <ul>
				                      <li><span>Full Name:</span> Micheal N. Taylor</li>
				                      <li><span>Father's Name:</span> Howard Armour</li>
				                      <li><span>Mother's Name:</span> Megan Higbee</li>
				                      <li><span>Date of Birth:</span> 22/08/1992</li>
				                      <li><span>Nationality:</span> American </li>
				                      <li><span>Sex:</span> Male</li>
				                      <li><span>Address:</span> 2018 Nelm Street, Beltsville, VA 20705</li>
				                    </ul>
				                  </div>
				                </div>
				              </div>
				            </div>
				          </div>
				        </div>
				      </div>
				    </div>
				    <Footer/>
            </Fragment> 
      	 )
      }
}


export default CandidatesProfile;



