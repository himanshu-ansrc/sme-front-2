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
						                      	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 53.867 53.867"  style={{'fill':'#EFCE4A', 'enable-background':'new 0 0 53.867 53.867'}}>
                                                  <polygon style={{"fill":"#EFCE4A;"}} points="26.934,1.318 35.256,18.182 53.867,20.887 40.4,34.013 43.579,52.549 26.934,43.798   10.288,52.549 13.467,34.013 0,20.887 18.611,18.182 "/>
                                                </svg>

						                      	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 53.867 53.867"  style={{'fill':'#EFCE4A', 'enable-background':'new 0 0 53.867 53.867'}}>
                                                  <polygon style={{"fill":"#EFCE4A;"}} points="26.934,1.318 35.256,18.182 53.867,20.887 40.4,34.013 43.579,52.549 26.934,43.798   10.288,52.549 13.467,34.013 0,20.887 18.611,18.182 "/>
                                                </svg>

                           					    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 53.867 53.867"  style={{'fill':'#EFCE4A', 'enable-background':'new 0 0 53.867 53.867'}}>
                                                  <polygon style={{"fill":"#EFCE4A;"}} points="26.934,1.318 35.256,18.182 53.867,20.887 40.4,34.013 43.579,52.549 26.934,43.798   10.288,52.549 13.467,34.013 0,20.887 18.611,18.182 "/>
                                                </svg>

                           					    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 53.867 53.867"  style={{'fill':'#EFCE4A', 'enable-background':'new 0 0 53.867 53.867'}}>
                                                  <polygon style={{"fill":"#EFCE4A;"}} points="26.934,1.318 35.256,18.182 53.867,20.887 40.4,34.013 43.579,52.549 26.934,43.798   10.288,52.549 13.467,34.013 0,20.887 18.611,18.182 "/>
                                                </svg>
                           					    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 53.867 53.867"  style={{'fill':'#EFCE4A', 'enable-background':'new 0 0 53.867 53.867'}}>
                                                  <polygon style={{"fill":"#EFCE4A;"}} points="26.934,1.318 35.256,18.182 53.867,20.887 40.4,34.013 43.579,52.549 26.934,43.798   10.288,52.549 13.467,34.013 0,20.887 18.611,18.182 "/>
                                                </svg>
						                      </div>
						                    </div>
						                    <div className="body">
						                      <div className="content">
						                        <h4 className="font-1em"><a href={'/detail-candidates/'+result._id}>{result.name}</a></h4>
                                                <div className="font-14">
                                                    Web Developer</div>
						                        <div className="info">
						                          <span className="work-post"><a href="candidate.html#">
						                             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-check-square"><polyline points="9 11 12 14 22 4"></polyline><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path></svg>
						                              {result.skills.primary}</a></span>
						                             <span className="location"><a href="" className="text-capitalize">
                                                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-map-pin"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
						                             {result.location.value}</a></span>

						                             <span className="location"><a href="" className="">			




<svg xmlns="http://www.w3.org/2000/svg" 
width="511.613px" height="511.613px" viewBox="0 0 511.613 511.613" style={{'margin-right': '0px', 'fill': '#aaa', 'enable-background':'new 0 0 511.613 511.613'}}
>
<g>
	<path d="M385.261,311.475c-2.471-8.367-5.469-15.649-8.99-21.833c-3.519-6.19-8.559-12.228-15.13-18.134   c-6.563-5.903-12.467-10.657-17.702-14.271c-5.232-3.617-12.419-7.661-21.557-12.137c-9.13-4.475-16.364-7.805-21.689-9.995   c-5.332-2.187-13.045-5.185-23.134-8.992c-8.945-3.424-15.605-6.042-19.987-7.849c-4.377-1.809-10.133-4.377-17.271-7.71   c-7.135-3.328-12.465-6.28-15.987-8.848c-3.521-2.568-7.279-5.708-11.277-9.419c-3.998-3.711-6.805-7.661-8.424-11.848   c-1.615-4.188-2.425-8.757-2.425-13.706c0-12.94,5.708-23.507,17.128-31.689c11.421-8.182,26.174-12.275,44.257-12.275   c7.99,0,16.136,1.093,24.41,3.284s15.365,4.659,21.266,7.421c5.906,2.762,11.471,5.808,16.707,9.137   c5.235,3.332,8.945,5.852,11.136,7.565c2.189,1.714,3.576,2.855,4.141,3.427c2.478,1.903,5.041,2.568,7.706,1.999   c2.854-0.19,5.045-1.715,6.571-4.567l23.13-41.684c2.283-3.805,1.811-7.422-1.427-10.85c-1.144-1.142-2.566-2.473-4.291-3.997   c-1.708-1.524-5.421-4.283-11.136-8.282c-5.709-3.996-11.752-7.565-18.124-10.706c-6.379-3.138-14.661-6.328-24.845-9.562   c-10.178-3.239-20.697-5.426-31.549-6.567V9.136c0-2.663-0.855-4.853-2.563-6.567C282.493,0.859,280.303,0,277.634,0h-38.546   c-2.474,0-4.615,0.903-6.423,2.712s-2.712,3.949-2.712,6.424v51.391c-29.884,5.708-54.152,18.461-72.805,38.256   c-18.651,19.796-27.98,42.823-27.98,69.092c0,7.803,0.812,15.226,2.43,22.265c1.616,7.045,3.616,13.374,5.996,18.988   c2.378,5.618,5.758,11.136,10.135,16.562c4.377,5.424,8.518,10.088,12.419,13.988c3.903,3.899,8.995,7.945,15.274,12.131   c6.283,4.19,11.66,7.571,16.134,10.139c4.475,2.56,10.422,5.52,17.843,8.843c7.423,3.333,13.278,5.852,17.561,7.569   c4.283,1.711,10.135,4.093,17.561,7.132c10.277,3.997,17.892,7.091,22.84,9.281c4.952,2.19,11.231,5.235,18.849,9.137   c7.611,3.898,13.176,7.468,16.7,10.705c3.521,3.237,6.708,7.234,9.565,11.991s4.288,9.801,4.288,15.133   c0,15.037-5.853,26.645-17.562,34.823c-11.704,8.187-25.27,12.279-40.685,12.279c-7.036,0-14.084-0.757-21.124-2.279   c-24.744-4.955-47.869-16.851-69.377-35.693l-0.571-0.571c-1.714-2.088-3.999-2.946-6.851-2.563   c-3.046,0.38-5.236,1.523-6.567,3.43l-29.408,38.54c-2.856,3.806-2.663,7.707,0.572,11.704c0.953,1.143,2.618,2.86,4.996,5.14   c2.384,2.289,6.81,5.852,13.278,10.715c6.47,4.856,13.513,9.418,21.128,13.706c7.614,4.281,17.272,8.514,28.98,12.703   c11.708,4.182,23.839,7.131,36.402,8.843v49.963c0,2.478,0.905,4.617,2.712,6.427c1.809,1.811,3.949,2.711,6.423,2.711h38.546   c2.669,0,4.859-0.855,6.57-2.566s2.563-3.901,2.563-6.571v-49.963c30.269-4.948,54.87-17.939,73.806-38.972   c18.938-21.033,28.41-46.11,28.41-75.229C388.994,328.801,387.759,319.855,385.261,311.475z"/>
</g>

</svg>



														 {result.cost.fixed}</a></span>
						                        </div>
						                      </div>

											      <ul className="vetting-box">
											         <li>Education</li>
											         <li class="active">Certificates</li>
											         <li>Badges</li>
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



