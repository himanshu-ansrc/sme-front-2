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

                                               <div>
                                               	
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

									            <div className="flex-end skill-and-profile">
									                <div><label>Skills:</label></div>
									                <div className="skill">
									                  {result.skills.secondry.slice(0, 5).map((response)=>{
									                  	 return ( 
									                  	 	<a className="margin-botm-5" href="candidate-details.html#">{response}</a>
									                  	 )
									                  })}
									                </div>
									            </div>

                                               </div>

								                <div className="download-resume">
								                   <img src="/calenders/main_profile.png" />
								                </div>
								              </div>
								              <div className="details-information section-padding-30">
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
									                        <span className="study-year">2009 – 2012</span>	
									                        <h5>Doctorate in Environmental Sustainability<span>@ Lloyd University</span></h5>
									                      </div>
									                      <div className="education-label">
									                        <span className="study-year">2006 – 2008</span>
									                        <h5>Master's Degree in Environmental Science<span>@ Frank Taylor College of Environment and Forestry</span></h5>
									                      </div>
									                      <div className="education-label">
									                        <span className="study-year">2002 – 2005</span>
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
														</svg>Other Skills
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
																		</svg>Profile</h4>
											                        <ul>
											                          <li className="flex-center">
											                              <svg  className="svg-icon-15 margin-ryt-5" viewBox="0 0 18.7 18.7">
                                                                             <use href="/images/sprites.svg#vettedfull_icon" />
											                              </svg>
											                              Work Arrangement – Full-time
											                          </li>
											                          <li className="flex-center">
										                               <svg  className="svg-icon-15 margin-ryt-5" viewBox="0 0 18.7 18.7">
                                                                         <use href="/images/sprites.svg#vettedhalf_icon" />
										                               </svg>
											                           Experience – 6 Years</li>
											                          <li className="flex-center">
											                              <svg  className="svg-icon-15 margin-ryt-5" viewBox="0 0 18.7 18.7">
                                                                             <use href="/images/sprites.svg#vettedfull_icon" />
											                              </svg>
											                           Compensation Per Hour – $44</li>
											                        </ul>
										                          </div>

										                          <div>
											                        <h4 className="flex-center">
																		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -1 401.52289 401"  className="svg-icon-15 margin-ryt-5" style={{"fill": "#212529"}}>
																		<path d="m370.589844 250.972656c-5.523438 0-10 4.476563-10 10v88.789063c-.019532 16.5625-13.4375 29.984375-30 30h-280.589844c-16.5625-.015625-29.980469-13.4375-30-30v-260.589844c.019531-16.558594 13.4375-29.980469 30-30h88.789062c5.523438 0 10-4.476563 10-10 0-5.519531-4.476562-10-10-10h-88.789062c-27.601562.03125-49.96875 22.398437-50 50v260.59375c.03125 27.601563 22.398438 49.96875 50 50h280.589844c27.601562-.03125 49.96875-22.398437 50-50v-88.792969c0-5.523437-4.476563-10-10-10zm0 0"/><path d="m376.628906 13.441406c-17.574218-17.574218-46.066406-17.574218-63.640625 0l-178.40625 178.40625c-1.222656 1.222656-2.105469 2.738282-2.566406 4.402344l-23.460937 84.699219c-.964844 3.472656.015624 7.191406 2.5625 9.742187 2.550781 2.546875 6.269531 3.527344 9.742187 2.566406l84.699219-23.464843c1.664062-.460938 3.179687-1.34375 4.402344-2.566407l178.402343-178.410156c17.546875-17.585937 17.546875-46.054687 0-63.640625zm-220.257812 184.90625 146.011718-146.015625 47.089844 47.089844-146.015625 146.015625zm-9.40625 18.875 37.621094 37.625-52.039063 14.417969zm227.257812-142.546875-10.605468 10.605469-47.09375-47.09375 10.609374-10.605469c9.761719-9.761719 25.589844-9.761719 35.351563 0l11.738281 11.734375c9.746094 9.773438 9.746094 25.589844 0 35.359375zm0 0"/>
																		</svg>
											                        Skills</h4>
											                        <ul>
											                          <li className="flex-center">
											                          	  <svg  className="svg-icon-15 margin-ryt-5" viewBox="0 0 18.7 18.7">
                                                                             <use href="/images/sprites.svg#vettedfull_icon" />
											                              </svg>
											                          Research and Academic Writing</li>
											                          <li className="flex-center">
											                              <svg  className="svg-icon-15 margin-ryt-5" viewBox="0 0 18.7 18.7">
                                                                             <use href="/images/sprites.svg#vettedfull_icon" />
											                              </svg>
											                           Sustainability Analysis</li>
											                          <li className="flex-center">
											                              <svg  className="svg-icon-15 margin-ryt-5" viewBox="0 0 18.7 18.7">
                                                                             <use href="/images/sprites.svg#vettedfull_icon" />
											                              </svg>
											                          Environmental Impact Assessment</li>
											                        </ul>
										                          </div>

										                          <div>
											                        <h4 className="flex-center">
																		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 478.703 478.703" className="svg-icon-15 margin-ryt-5" style={{"enable-background":"new 0 0 478.703 478.703", "fill": "#212529"}}>
																			<g>
																				<path d="M454.2,189.101l-33.6-5.7c-3.5-11.3-8-22.2-13.5-32.6l19.8-27.7c8.4-11.8,7.1-27.9-3.2-38.1l-29.8-29.8    c-5.6-5.6-13-8.7-20.9-8.7c-6.2,0-12.1,1.9-17.1,5.5l-27.8,19.8c-10.8-5.7-22.1-10.4-33.8-13.9l-5.6-33.2    c-2.4-14.3-14.7-24.7-29.2-24.7h-42.1c-14.5,0-26.8,10.4-29.2,24.7l-5.8,34c-11.2,3.5-22.1,8.1-32.5,13.7l-27.5-19.8    c-5-3.6-11-5.5-17.2-5.5c-7.9,0-15.4,3.1-20.9,8.7l-29.9,29.8c-10.2,10.2-11.6,26.3-3.2,38.1l20,28.1    c-5.5,10.5-9.9,21.4-13.3,32.7l-33.2,5.6c-14.3,2.4-24.7,14.7-24.7,29.2v42.1c0,14.5,10.4,26.8,24.7,29.2l34,5.8    c3.5,11.2,8.1,22.1,13.7,32.5l-19.7,27.4c-8.4,11.8-7.1,27.9,3.2,38.1l29.8,29.8c5.6,5.6,13,8.7,20.9,8.7c6.2,0,12.1-1.9,17.1-5.5    l28.1-20c10.1,5.3,20.7,9.6,31.6,13l5.6,33.6c2.4,14.3,14.7,24.7,29.2,24.7h42.2c14.5,0,26.8-10.4,29.2-24.7l5.7-33.6    c11.3-3.5,22.2-8,32.6-13.5l27.7,19.8c5,3.6,11,5.5,17.2,5.5l0,0c7.9,0,15.3-3.1,20.9-8.7l29.8-29.8c10.2-10.2,11.6-26.3,3.2-38.1    l-19.8-27.8c5.5-10.5,10.1-21.4,13.5-32.6l33.6-5.6c14.3-2.4,24.7-14.7,24.7-29.2v-42.1    C478.9,203.801,468.5,191.501,454.2,189.101z M451.9,260.401c0,1.3-0.9,2.4-2.2,2.6l-42,7c-5.3,0.9-9.5,4.8-10.8,9.9    c-3.8,14.7-9.6,28.8-17.4,41.9c-2.7,4.6-2.5,10.3,0.6,14.7l24.7,34.8c0.7,1,0.6,2.5-0.3,3.4l-29.8,29.8c-0.7,0.7-1.4,0.8-1.9,0.8    c-0.6,0-1.1-0.2-1.5-0.5l-34.7-24.7c-4.3-3.1-10.1-3.3-14.7-0.6c-13.1,7.8-27.2,13.6-41.9,17.4c-5.2,1.3-9.1,5.6-9.9,10.8l-7.1,42    c-0.2,1.3-1.3,2.2-2.6,2.2h-42.1c-1.3,0-2.4-0.9-2.6-2.2l-7-42c-0.9-5.3-4.8-9.5-9.9-10.8c-14.3-3.7-28.1-9.4-41-16.8    c-2.1-1.2-4.5-1.8-6.8-1.8c-2.7,0-5.5,0.8-7.8,2.5l-35,24.9c-0.5,0.3-1,0.5-1.5,0.5c-0.4,0-1.2-0.1-1.9-0.8l-29.8-29.8    c-0.9-0.9-1-2.3-0.3-3.4l24.6-34.5c3.1-4.4,3.3-10.2,0.6-14.8c-7.8-13-13.8-27.1-17.6-41.8c-1.4-5.1-5.6-9-10.8-9.9l-42.3-7.2    c-1.3-0.2-2.2-1.3-2.2-2.6v-42.1c0-1.3,0.9-2.4,2.2-2.6l41.7-7c5.3-0.9,9.6-4.8,10.9-10c3.7-14.7,9.4-28.9,17.1-42    c2.7-4.6,2.4-10.3-0.7-14.6l-24.9-35c-0.7-1-0.6-2.5,0.3-3.4l29.8-29.8c0.7-0.7,1.4-0.8,1.9-0.8c0.6,0,1.1,0.2,1.5,0.5l34.5,24.6    c4.4,3.1,10.2,3.3,14.8,0.6c13-7.8,27.1-13.8,41.8-17.6c5.1-1.4,9-5.6,9.9-10.8l7.2-42.3c0.2-1.3,1.3-2.2,2.6-2.2h42.1    c1.3,0,2.4,0.9,2.6,2.2l7,41.7c0.9,5.3,4.8,9.6,10,10.9c15.1,3.8,29.5,9.7,42.9,17.6c4.6,2.7,10.3,2.5,14.7-0.6l34.5-24.8    c0.5-0.3,1-0.5,1.5-0.5c0.4,0,1.2,0.1,1.9,0.8l29.8,29.8c0.9,0.9,1,2.3,0.3,3.4l-24.7,34.7c-3.1,4.3-3.3,10.1-0.6,14.7    c7.8,13.1,13.6,27.2,17.4,41.9c1.3,5.2,5.6,9.1,10.8,9.9l42,7.1c1.3,0.2,2.2,1.3,2.2,2.6v42.1H451.9z"/>
																				<path d="M239.4,136.001c-57,0-103.3,46.3-103.3,103.3s46.3,103.3,103.3,103.3s103.3-46.3,103.3-103.3S296.4,136.001,239.4,136.001    z M239.4,315.601c-42.1,0-76.3-34.2-76.3-76.3s34.2-76.3,76.3-76.3s76.3,34.2,76.3,76.3S281.5,315.601,239.4,315.601z"/>
																			</g>
																		</svg>
											                        Tools</h4>
											                        <ul>
											                          <li className="flex-center">
																		<svg className="svg-icon-15 margin-ryt-5" viewBox="0 0 18.7 18.7">
																		 <use href="/images/sprites.svg#vettednone_icon" />
																		</svg>
																	  AutoCAD</li>
																	  <li className="flex-center">
																		<svg className="svg-icon-15 margin-ryt-5" viewBox="0 0 18.7 18.7">
																		 <use href="/images/sprites.svg#vettednone_icon" />
																		</svg>
											                          iThenticate</li>
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


