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
  	  listItems = (count, data)=>{
  	    let listItems = [];
		count = count>5 ? count-5: count;
		while(count-- >0){
			 listItems.push(data);
		}
		return listItems;
	  }
      render(){
      	 console.log(this.props.candidates)
      	 return(
            <Fragment>
                   <Header2/>
				    <div className="alice-bg padding-top-bottom-20 section-padding-bottom">
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
								                    	<div className="candidates-profile-rating">
								                        {this.listItems(result.avg_feedback, 
														 	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 53.867 53.867"  style={{'fill':'#EFCE4A', 'enable-background':'new 0 0 53.867 53.867'}}>
													         <polygon style={{"fill":"#EFCE4A;"}} points="26.934,1.318 35.256,18.182 53.867,20.887 40.4,34.013 43.579,52.549 26.934,43.798   10.288,52.549 13.467,34.013 0,20.887 18.611,18.182 "/>
													        </svg>
								                        )}
						                                </div>
								                  </div>
								                  <div className="title-body">
								                    <h4 className="flex-center">
								                      <span className="margin-ryt-15">{result.name}</span>
	                                                  {this.listItems(result.cost.fixed, 
                                                      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" className="svg-icon-18" viewBox="0 0 84.517 84.518" 
														style={{"fill": "#85bb65"}}>
														<g>
														 <path d="M61.25,55.669c0-7.974-5.207-13.201-15.448-15.57v-20.77c7.415,0.763,8.724,4.249,8.724,11.349   
														       c0,0.365,0.168,0.709,0.457,0.934c0.288,0.224,0.66,0.301,1.017,0.212l3.887-0.992c0.542-0.139,0.914-0.639,0.888-1.198   
														       c-0.442-9.722-3.152-15.699-14.972-16.656V0.787C45.802,0.352,45.45,0,45.014,0h-5.512c-0.435,0-0.787,0.353-0.787,0.787V13.02   
														       c-10.034,1.006-15.131,6.522-15.131,16.468c0,7.891,5.097,13.095,15.131,15.497v20.891c-9.191-0.669-9.198-4.301-9.198-11.396  
														       c0-0.354-0.159-0.689-0.434-0.914c-0.275-0.226-0.637-0.315-0.983-0.242l-3.888,0.793c-0.568,0.115-0.968,0.625-0.944,1.205  
														       c0.38,9.512,1.74,15.983,15.447,16.887V83.73c0,0.436,0.352,0.787,0.787,0.787h5.512c0.436,0,0.788-0.353,0.788-0.787V72.136 
														       C56.046,71.129,61.25,65.613,61.25,55.669z M54.921,55.669c0,5.983-2.928,9.241-9.119,10.089V46.806 
														       C51.849,48.863,54.921,51.83,54.921,55.669z M38.715,38.242c-5.838-2.052-8.802-4.982-8.802-8.754   c0-5.973,2.825-9.229,8.802-10.084V38.242z">
														 </path>
														</g>
													  </svg>
												     )}
								                    </h4>
								                    <div className="font-14 margin-botm-5">
                                                    {result.title}</div>
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
														<p>Over six years of work experience in the environment and sustainability sector. During these years, I have worked on projects  focused primarily on water management and treatment. I have also written white papers on Wastewater Management, Thermal Stratification of Water Bodies, and Stormwater Management.</p>
								                    </div>
								                    <div className="edication-background details-section">
								                      <h4>
														<svg
															xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-book">
															<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
															<path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
														</svg>Educational Background
													  </h4>
									                      <div className="education-label">
									                        <span className="study-year">2012 – 2009</span>	
									                        <h5>Doctorate in Environmental Sustainability<span>@ Lloyd University</span></h5>
									                      </div>
									                      <div className="education-label">
									                        <span className="study-year">2006 – 2008</span>
									                        <h5>Master's Degree in Environmental Science<span>@ Frank Taylor College of Environment and Forestry</span></h5>
									                      </div>
									                      <div className="education-label">
									                        <span className="study-year">2002 - 2005</span>
									                        <h5>Bachelor's Degree in Environmental Science<span>@  Scottsdale University</span></h5>
									                      </div>
								                    </div>
								                    <div className="experience details-section">
								                      <h4>
														<svg
															xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-briefcase">
															<rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
															<path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
														</svg>Work Experience
													  </h4>
								                      <div className="experience-section">
								                        <span className="service-year">December 2015 – Present</span>
								                        <h5>Senior Environmental Scientist<span>@ Envo Engineering LLC</span></h5>
								                      </div>
								                      <div className="experience-section">
								                        <span className="service-year">July 2013 – October 2015</span>
								                        <h5>Environmental Consultant<span>@ Greenrook Inc.</span></h5>
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
														</svg>Special Skills
													   </h4>
									                      <ul>
									                       <li>Strong writing and researching skills</li>
														   <li>Excellent oral and written communication skills in German and English</li>
														   <li>Strong analytic skills and attention to detail</li>
														   <li>Dynamic and adaptive to global collaborative environments</li>
														   <li>Ability to work independently and as part of a team</li>
									                      </ul>
								                    </div>
								                  </div>
								                  <div className="col-xl-4 offset-xl-1 col-lg-4">
								                  <div class="information-and-contact">
										                      <div class="information">
										                         <div>
											                        <h4 className="flex-center">
																		<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" 
																		viewBox="0 0 482.9 482.9" className="svg-icon-15 margin-ryt-5" style={{"fill": "#332e2e","enable-background":"new 0 0 482.9 482.9"}}>
																			<g>
																				<path d="M239.7,260.2c0.5,0,1,0,1.6,0c0.2,0,0.4,0,0.6,0c0.3,0,0.7,0,1,0c29.3-0.5,53-10.8,70.5-30.5    c38.5-43.4,32.1-117.8,31.4-124.9c-2.5-53.3-27.7-78.8-48.5-90.7C280.8,5.2,262.7,0.4,242.5,0h-0.7c-0.1,0-0.3,0-0.4,0h-0.6    c-11.1,0-32.9,1.8-53.8,13.7c-21,11.9-46.6,37.4-49.1,91.1c-0.7,7.1-7.1,81.5,31.4,124.9C186.7,249.4,210.4,259.7,239.7,260.2z     M164.6,107.3c0-0.3,0.1-0.6,0.1-0.8c3.3-71.7,54.2-79.4,76-79.4h0.4c0.2,0,0.5,0,0.8,0c27,0.6,72.9,11.6,76,79.4    c0,0.3,0,0.6,0.1,0.8c0.1,0.7,7.1,68.7-24.7,104.5c-12.6,14.2-29.4,21.2-51.5,21.4c-0.2,0-0.3,0-0.5,0l0,0c-0.2,0-0.3,0-0.5,0    c-22-0.2-38.9-7.2-51.4-21.4C157.7,176.2,164.5,107.9,164.6,107.3z"/>
																				<path d="M446.8,383.6c0-0.1,0-0.2,0-0.3c0-0.8-0.1-1.6-0.1-2.5c-0.6-19.8-1.9-66.1-45.3-80.9c-0.3-0.1-0.7-0.2-1-0.3    c-45.1-11.5-82.6-37.5-83-37.8c-6.1-4.3-14.5-2.8-18.8,3.3c-4.3,6.1-2.8,14.5,3.3,18.8c1.7,1.2,41.5,28.9,91.3,41.7    c23.3,8.3,25.9,33.2,26.6,56c0,0.9,0,1.7,0.1,2.5c0.1,9-0.5,22.9-2.1,30.9c-16.2,9.2-79.7,41-176.3,41    c-96.2,0-160.1-31.9-176.4-41.1c-1.6-8-2.3-21.9-2.1-30.9c0-0.8,0.1-1.6,0.1-2.5c0.7-22.8,3.3-47.7,26.6-56    c49.8-12.8,89.6-40.6,91.3-41.7c6.1-4.3,7.6-12.7,3.3-18.8c-4.3-6.1-12.7-7.6-18.8-3.3c-0.4,0.3-37.7,26.3-83,37.8    c-0.4,0.1-0.7,0.2-1,0.3c-43.4,14.9-44.7,61.2-45.3,80.9c0,0.9,0,1.7-0.1,2.5c0,0.1,0,0.2,0,0.3c-0.1,5.2-0.2,31.9,5.1,45.3    c1,2.6,2.8,4.8,5.2,6.3c3,2,74.9,47.8,195.2,47.8s192.2-45.9,195.2-47.8c2.3-1.5,4.2-3.7,5.2-6.3    C447,415.5,446.9,388.8,446.8,383.6z"/>
																			</g>
																		</svg>Profile Summary</h4>
											                        <ul>
											                          <li><span>Work Arrangement:</span> Full-time</li>
											                          <li><span>Experience:</span>  6 Years</li>
											                          <li><span>Compensation Per Hour:</span> $44</li>
											                          <li><span>Age:</span> 30 Years</li>
											                          <li><span>Educational Qualification:</span> Doctorate</li>
											                        </ul>
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


