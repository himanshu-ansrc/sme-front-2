import React, {Component, Fragment} from 'react'
import Header2 from './Partials/Header-2'
import Footer from './Partials/Footer'
import './Partials/Externals.js'
import {connect} from 'react-redux'
import * as actions from '../actions'

class CandidatesProfile extends Component{
	  constructor(){
	  	 super();
	  }
	  componentDidMount(){
	  	 const userId = (this.props.match.params.user_id).trim();
	  	 this.props.candidates_list(userId, ()=>{
         })     
	  }
      render(){
      	 console.log(this.props.candidates)
      	 return(
            <Fragment>
                   <Header2/>
				    <div className="alice-bg padding-top-35 section-padding-bottom">
				      <div className="container">
				        <div className="row">
				          <div className="col">                           
				            <div className="candidate-details">
				             {this.props.candidates
                              ?  
                             (<Fragment>
				                   	{this.props.candidates.map((result)=>{
                                       return (
                                            <Fragment>
                                            <div className="title-and-info">
								                <div className="title">
								                  <div className="thumb">
								                    <img src={result.profile_pic} className="img-fluid" alt="" />
								                  </div>
								                  <div className="title-body">
								                    <h4>{result.name}</h4>
													<div class="info text-capitalize">
													    <span class="candidate-designation">
													      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-check-square"><polyline points="9 11 12 14 22 4"></polyline><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
													    </svg>{result.skills.primary}</span>
													    <span class="candidate-location">
													      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-map-pin"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle>
													    </svg>{result.location.value}</span>
													</div>
								                  </div>

								                </div>
								                <div className="download-resume">
								                  <a href="#">Download CV 
													<svg
														xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-download">
														<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
														<polyline points="7 10 12 15 17 10"></polyline>
														<line x1="12" y1="15" x2="12" y2="3"></line>
													</svg>
												  </a>
								                </div>
								              </div>
								              <div className="skill-and-profile">
								                <div className="skill">
								                  <label>Skills:</label>
								                  {result.skills.secondry.slice(0, 5).map((response)=>{
								                  	 return ( 
								                  	 	<a href="candidate-details.html#">{response}</a>
								                  	 )
								                  })}
								                </div>
								              </div>
								              <div className="details-information section-padding-60">
								                <div className="row">
								                  <div className="col-xl-7 col-lg-8">
								                    <div className="about-details details-section">
								                      <h4>
															<svg
																xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-align-left">
																<line x1="17" y1="10" x2="3" y2="10"></line>
																<line x1="21" y1="6" x2="3" y2="6"></line>
																<line x1="21" y1="14" x2="3" y2="14"></line>
																<line x1="17" y1="18" x2="3" y2="18"></line>
															</svg>About Me
														</h4>
								                      <p>Combined with a handful of model sentence structures, to generate lorem Ipsum which  It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including.</p>
								                    </div>
								                    <div className="edication-background details-section">
								                      <h4>
														<svg
															xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-book">
															<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
															<path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
														</svg>Education Background
													  </h4>
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
								                      <h4>
														<svg
															xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-briefcase">
															<rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
															<path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
														</svg>Work Experiance
													  </h4>
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
								                      <h4>
															<svg
																xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-feather">
																<path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"></path>
																<line x1="16" y1="8" x2="2" y2="22"></line>
																<line x1="17" y1="15" x2="9" y2="15"></line>
															</svg>Professional Skill
													  </h4>
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
								                      <h4>
														<svg
															xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-gift">
															<polyline points="20 12 20 22 4 22 4 12"></polyline>
															<rect x="2" y="7" width="20" height="5"></rect>
															<line x1="12" y1="22" x2="12" y2="7"></line>
															<path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"></path>
															<path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"></path>
														</svg>Special Qualification
													</h4>
								                      <ul>
								                        <li>5 years+ experience designing and building products.</li>
								                        <li>Skilled at any Kind Design Tools.</li>
								                        <li>Passion for people-centered design, solid intuition.</li>
								                        <li>Hard Worker & Quick Lerner.</li>
								                      </ul>
								                    </div>
								                  </div>
								                  <div className="col-xl-4 offset-xl-1 col-lg-4">
								                    <div className="information-and-contact">
								                      <div className="information">
								                        <ul>
								                          {result.vetting.map(res=>{
								                          	   return(
                                                                  <Fragment>
                                                                    <li>Education</li>
											                        <li className="active">Experience</li>
											                        <li className="active">Certificates</li>
											                        <li>Badges</li>

                                                                  </Fragment>
								                          	   )
								                          })}
								                          
					
								                        </ul>
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
				                             </Fragment>
                                       	)
                                    })}
                             </Fragment>)
                             : (
                             	  <div className="filtered-candidate-wrapper">
                                    <div className="memeimage-loader-container">
                                       <div id="memeimage-loader" className="loader-circular">
                                       </div>
                                    </div>
				              	  </div>
				               )
                            }





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

export default connect(state=>state, actions)(CandidatesProfile);


