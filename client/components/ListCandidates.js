import React, {Component, Fragment} from 'react'
import Header2 from './Partials/Header-2'
import Footer from './Partials/Footer'
import {connect} from 'react-redux'
import * as actions from '../actions'


class CandidatesList extends Component{
	  constructor(){
	  	 super();
	  }
	  componentDidMount(){
	  	 this.props.candidates_list(null, ()=>{
       	    console.log(this.props)
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
      	 return(
            <Fragment>
                    <Header2/>
				    <div className="alice-bg padding-top-bottom-20">
				      <div className="container">
				        <div className="row">
				          <div className="col-md-6">
				            <div className="breadcrumb-area">
				              <h1>Candidates List</h1>
				              <nav aria-label="breadcrumb">
				                <ol className="breadcrumb">
				                  <li className="breadcrumb-item"><a href="candidate.html#">Home</a></li>
				                  <li className="breadcrumb-item active" aria-current="page">Candidates List</li>
				                </ol>
				              </nav>
				            </div>
				          </div>
				          <div className="col-md-6">
				            <div className="breadcrumb-form">
				              <form action="candidate.html#">
				                <input type="text" placeholder="Enter Keywords"  />
				                <button>
									<svg
										xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-search">
										<circle cx="11" cy="11" r="8"></circle>
										<line x1="21" y1="21" x2="16.65" y2="16.65"></line>
									</svg>
								</button>
				              </form>
				            </div>
				          </div>
				        </div>
				      </div>
				    </div>

				    <div className="alice-bg section-padding-bottom">
				      <div className="container">
				        <div className="row no-gutters">
				          <div className="col">
				            <div className="candidate-container">
				             {this.props.candidates
				              ? (<div className="filtered-candidate-wrapper">
                                    <div className="candidate-view-controller-wrapper">
				                  <div className="candidate-view-controller">
				                    <div className="candidate-view-filter">
				                      <select className="selectpicker">
				                        <option defaultValue="">Most Recent</option>
				                        <option value="california">Top Rated</option>
				                        <option value="las-vegas">Most Popular</option>
				                      </select>
				                    </div>
				                  </div>
				                  <div className="showing-number">
				                    <span>Showing 1–10 of 280 Results</span>
				                  </div>
				                </div>
				                <div className="candidate-filter-result">
                                  {this.props.candidates.map((result)=>{
                                  	 return(
						                  <div className="candidate flex-end">
						                    <div className="thumb text-left">
						                      <a href="candidate.html#">
						                        <img src={result.profile_pic} className="img-fluid" alt="" />
						                      </a>
						                      <div className="candidates-rating">
						                        {this.listItems(result.avg_feedback, 
												 	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 53.867 53.867"  style={{'fill':'#EFCE4A', 'enable-background':'new 0 0 53.867 53.867'}}>
											         <polygon style={{"fill":"#EFCE4A;"}} points="26.934,1.318 35.256,18.182 53.867,20.887 40.4,34.013 43.579,52.549 26.934,43.798   10.288,52.549 13.467,34.013 0,20.887 18.611,18.182 "/>
											        </svg>
						                        )}
						                      </div>
						                    </div>
						                    <div className="body">
						                      <div className="content">
						                        <h4 className="font-1em candidates-name-box"><a href={'/detail-candidates/'+result._id} className="margin-ryt-10">{result.name}</a> 
													{this.listItems(result.cost.fixed, 
                                                      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" className="svg-icon-15" viewBox="0 0 84.517 84.518" 
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
                                                <div className="font-14">
                                                    Web Developer</div>
						                        <div className="info">
						                          <span className="work-post"><a href="candidate.html#">
						                             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-check-square"><polyline points="9 11 12 14 22 4"></polyline><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path></svg>
						                              {result.skills.primary}</a></span>
						                             <span className="location"><a href="" className="text-capitalize">
                                                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-map-pin"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
						                             {result.location.value}</a></span>
						                        </div>
						                      </div>

											      <ul className="vetting-box">
											         <li>Profile</li>
											         <li class="active">Skills</li>
											         <li>Tools</li>
											      </ul>
						                      <div className="button-area">
						                        <a href="candidate.html#">View Avalibility</a>
						                      </div>
						                    </div>
						                  </div>
                                  	 )
                                  })

                                  }



				                </div>
				                <div className="pagination-list text-center">
				                  <nav className="navigation pagination">
				                    <div className="nav-links">
				                      <a className="prev page-numbers" href="candidate.html#"><i className="fas fa-angle-left"></i></a>
				                      <a className="page-numbers" href="candidate.html#">1</a>
				                      <span aria-current="page" className="page-numbers current">2</span>
				                      <a className="page-numbers" href="candidate.html#">3</a>
				                      <a className="page-numbers" href="candidate.html#">4</a>
				                      <a className="next page-numbers" href="candidate.html#"><i className="fas fa-angle-right"></i></a>
				                    </div>
				                  </nav>                
				                </div>
				              	</div>)
				              :  (
				              	  <div className="filtered-candidate-wrapper">
                                    <div className="memeimage-loader-container">
                                       <div id="memeimage-loader" className="loader-circular">
                                       </div>
                                    </div>
				              	  </div>
				              	)
				             }

				              <div className="candidate-filter-wrapper">
				                <div className="selected-options same-pad">
				                  <div className="selection-title">
				                    <h4>You Selected</h4>
				                    <a href="candidate.html#">Clear All</a>
				                  </div>
				                  <ul className="filtered-options">
				                  </ul>
				                </div>
				                <div className="candidate-filter-dropdown same-pad category">
				                  <select className="selectpicker">
				                    <option defaultValue="">Category</option>
				                    <option value="california">Accounting / Finance</option>
				                    <option value="california">Education</option>
				                    <option value="california">Design &amp; Creative</option>
				                    <option value="california">Health Care</option>
				                    <option value="california">Engineer &amp; Architects</option>
				                    <option value="california">Marketing &amp; Sales</option>
				                    <option value="california">Garments / Textile</option>
				                    <option value="california">Customer Support</option>
				                    <option value="california">Digital Media</option>
				                    <option value="california">Telecommunication</option>
				                  </select>
				                </div>
				                <div className="candidate-filter-dropdown same-pad location">
				                  <select className="selectpicker">
				                    <option defaultValue="">Location</option>
				                    <option value="california">Chicago</option>
				                    <option value="california">New York City</option>
				                    <option value="california">San Francisco</option>
				                    <option value="california">Washington</option>
				                    <option value="california">Boston</option>
				                    <option value="california">Los Angeles</option>
				                    <option value="california">Seattle</option>
				                    <option value="california">Las Vegas</option>
				                    <option value="california">San Diego</option>
				                  </select>
				                </div>
				                <div data-id="candidate-type" className="candidate-filter same-pad candidate-type">
				                  <h4 className="option-title">Job Type</h4>
										<ul>
											<li class="full-time">
												<svg
													xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-clock">
													<circle cx="12" cy="12" r="10"></circle>
													<polyline points="12 6 12 12 16 14"></polyline>
												</svg>
												<a href="candidate.html#" data-attr="Full Time">Full Time</a>
											</li>
											<li class="part-time">
												<svg
													xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-clock">
													<circle cx="12" cy="12" r="10"></circle>
													<polyline points="12 6 12 12 16 14"></polyline>
												</svg>
												<a href="candidate.html#" data-attr="Part Time">Part Time</a>
											</li>
											<li class="freelance">
												<svg
													xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-clock">
													<circle cx="12" cy="12" r="10"></circle>
													<polyline points="12 6 12 12 16 14"></polyline>
												</svg>
												<a href="candidate.html#" data-attr="Freelance">Freelance</a>
											</li>
											<li class="temporary">
												<svg
													xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-clock">
													<circle cx="12" cy="12" r="10"></circle>
													<polyline points="12 6 12 12 16 14"></polyline>
												</svg>
												<a href="candidate.html#" data-attr="Temporary">Temporary</a>
											</li>
						                </ul>
				                </div>
				                <div data-id="experience" className="candidate-filter same-pad experience">
				                  <h4 className="option-title">Experience</h4>
				                  <ul>
				                    <li><a href="candidate.html#" data-attr="Fresh">Fresh</a></li>
				                    <li><a href="candidate.html#" data-attr="Less than 1 year">Less than 1 year</a></li>
				                    <li><a href="candidate.html#" data-attr="2 Year">2 Year</a></li>
				                    <li><a href="candidate.html#" data-attr="3 Year">3 Year</a></li>
				                    <li><a href="candidate.html#" data-attr="4 Year">4 Year</a></li>
				                    <li><a href="candidate.html#" data-attr="5 Year">5 Year</a></li>
				                    <li><a href="candidate.html#" data-attr="Avobe 5 Years">Avobe 5 Years</a></li>
				                  </ul>
				                </div>
				                <div className="candidate-filter same-pad">
				                  <h4 className="option-title">Salary Range</h4>
				                  <div className="price-range-slider">
				                    <div className="nstSlider" data-range_min="0" data-range_max="10000" 
				                     data-cur_min="0"    data-cur_max="6130">
				                      <div className="bar"></div>
				                      <div className="leftGrip"></div>
				                      <div className="rightGrip"></div>
				                      <div className="grip-label">
				                        <span className="leftLabel"></span>
				                        <span className="rightLabel"></span>
				                      </div>
				                    </div>
				                  </div>
				                </div>
				                <div data-id="post" className="candidate-filter same-pad post">
				                  <h4 className="option-title">Date Posted</h4>
				                  <ul>
				                    <li><a href="candidate.html#" data-attr="Last hour">Last hour</a></li>
				                    <li><a href="candidate.html#" data-attr="Last 24 hour">Last 24 hour</a></li>
				                    <li><a href="candidate.html#" data-attr="Last 7 days">Last 7 days</a></li>
				                    <li><a href="candidate.html#" data-attr="Last 14 days">Last 14 days</a></li>
				                    <li><a href="candidate.html#" data-attr="Last 30 days">Last 30 days</a></li>
				                  </ul>
				                </div>
				                <div data-id="gender" className="candidate-filter same-pad gender">
				                  <h4 className="option-title">Gender</h4>
				                  <ul>
				                    <li><a href="candidate.html#" data-attr="Male">Male</a></li>
				                    <li><a href="candidate.html#" data-attr="Female">Female</a></li>
				                  </ul>
				                </div>
				                <div data-id="qualification" className="candidate-filter same-pad qualification">
				                  <h4 className="option-title">Qualification</h4>
				                  <ul>
				                    <li><a href="candidate.html#" data-attr="Matriculation">Matriculation</a></li>
				                    <li><a href="candidate.html#" data-attr="Intermidiate">Intermidiate</a></li>
				                    <li><a href="candidate.html#" data-attr="Gradute">Gradute</a></li>
				                  </ul>
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

export default connect(state=>state, actions)(CandidatesList);



