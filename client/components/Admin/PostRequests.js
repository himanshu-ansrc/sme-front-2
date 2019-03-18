import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'
import * as actions from '../../actions'



class PostRequests extends Component{
	  constructor(){
	  	 super();
	  }
	  componentDidMount(){  
	  }
      render(){
      	  return(
             <Fragment>
              		<div className="dashboard-content-wrapper">
					    <form className="dashboard-form job-post-form">
						 <div className="dashboard-section basic-info-input">
							<h4>
								<svg
									xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-user-check">
									<path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
									 <circle cx="8.5" cy="7" r="4"></circle>
									<polyline points="17 11 19 13 23 9"></polyline>
								</svg>Post A Job
							</h4>
							<div className="form-group row">
								<label className="col-md-3 col-form-label">Job Title</label>
								<div className="col-md-9">
									<input type="text" className="form-control" placeholder="Your job title here" />
								</div>
							</div>
							<div className="row">
							  <label className="col-md-3 col-form-label">Job Summery</label>
							  <div className="col-md-9">
								<div className="row">
									<div className="col-md-6">
										<div className="form-group">
											<select className="form-control">
												<option>Select Skills</option>
												<option>Accounting / Finance</option>
												<option>Health Care</option>
												<option>Garments / Textile</option>
												<option>Telecommunication</option>
											</select>
											<i className="fa fa-caret-down"></i>
										</div>
									</div>
									<div className="col-md-6">
									  <div className="form-group">
									  		<select className="form-control">
												<option>Location</option>
												<option>Accounting / Finance</option>
												<option>Health Care</option>
												<option>Garments / Textile</option>
												<option>Telecommunication</option>
											</select>
											<i className="fa fa-caret-down"></i>
									  </div>
									</div>
									<div className="col-md-6">
										<div className="form-group">
											<select className="form-control">
												<option>Job Type</option>
												<option>Part Time</option>
												<option>Full Time</option>
												<option>Temperory</option>
												<option>Permanent</option>
												<option>Freelance</option>
											</select>
											<i className="fa fa-caret-down"></i>
										</div>
									</div>
									<div className="col-md-6">
										<div className="form-group">
											<select className="form-control">
												<option>Experience (Optional)</option>
												<option>Less than 1 Year</option>
												<option>2 Year</option>
												<option>3 Year</option>
												<option>4 Year</option>
												<option>Over 5 Year</option>
											</select>
											<i className="fa fa-caret-down"></i>
										</div>
									</div>
									<div className="col-md-6">
										<div className="form-group">
											<input type="text" className="form-control" placeholder="Salary Range" />
									    </div>
								    </div>
									<div className="col-md-6">
										<div className="form-group">
											<select className="form-control">
												<option>Qualification</option>
												<option>Matriculation</option>
												<option>Intermidiate</option>
												<option>Gradute</option>
											</select>
											<i className="fa fa-caret-down"></i>
										</div>
									</div>
									<div className="col-md-6">
										<div className="form-group">
											<input type="text" className="form-control" placeholder="Vacancy" />
										</div>
									</div>
									</div>
									</div>
									</div>

									<div className="row">
										<label className="col-md-3 col-form-label">Job Description</label>
										<div className="col-md-9">
											<div className="row">
												<div className="col-md-12">
													<div className="form-group">
														<textarea className="form-control" placeholder="Requirement Summary"></textarea>
													</div>
												</div>
											</div>
										 </div>
									 </div>
											<div className="form-group row">
													<label className="col-md-3 col-form-label"></label>
													<div className="col-md-9">
														<button className="button">Post Your Job</button>
													</div>
												</div>
											</div>
										</form>
									</div>
             </Fragment>
      	  )
      }

}


export default connect(state=>state, actions)(PostRequests);



