import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'
import * as actions from '../../actions'



class PostRequests extends Component{
	  constructor(){
	  	 super();
	  }
	  componentDidMount(){  
	  	  this.props.skillsAndLocations(()=>{
               console.log(this.props);
	  	  });
	  }
	  handleSubmit = (e)=>{
          e.preventDefault();
          const obj = {
          	  client_id : 2345,
              project_name: (e.target.project_name.value).trim(),
          	  skills : [(e.target.project_skills.value).trim()],
          	  project_description: (e.target.project_description.value).trim(),
          	  location: (e.target.project_location.value).trim(),
          	  vacancies: (e.target.project_vacancies.value).trim(),
          	  budget: (e.target.project_budget.value).trim(),
          	  experience: (e.target.project_exp.value).trim(),
          	  job_type: (e.target.job_type.value).trim(),
          	  timeline: (e.target.project_timeline.value).trim(),
          	  qualification : (e.target.project_qualification.value).trim(),
          }
          this.props.create_sme_request(obj, ()=>{
          	  console.log(this.props)
          })
	  }
      render(){
      	  return(
             <Fragment>
					    <form className="dashboard-form job-post-form" onSubmit={this.handleSubmit}>
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
									<input type="text" className="form-control" name="project_name" placeholder="Your job title here" />
								</div>
							</div>
							<div className="row">
							  <label className="col-md-3 col-form-label">Job Summery</label>
							  <div className="col-md-9">
								<div className="row">
									<div className="col-md-6">
										<div className="form-group">
											<select className="form-control" name="project_skills">
											    <option value="">Select Skills</option>
											    {this.props.skills_and_locations && this.props.skills_and_locations.skills.map((response)=>{
											    	 return <option key={response.id} value={response.id}>{response.value}</option>
											    })}
											</select>
											<i className="fa fa-caret-down"></i>
										</div>
									</div>
									<div className="col-md-6">
									  <div className="form-group">
									  		<select className="form-control text-capitalize" name="project_location">
												<option value="">Location</option>
											    {this.props.skills_and_locations && this.props.skills_and_locations.locations.map((response)=>{
											    	 return <option key={response.id} value={response.id}>{response.city}</option>
											    })}
											</select>
											<i className="fa fa-caret-down"></i>
									  </div>
									</div>
									<div className="col-md-6">
										<div className="form-group upper-case">
											<select className="form-control" name="job_type">
												<option value="">Job Type</option>
												<option value="1">Part Time</option>
												<option value="2">Full Time</option>
												<option value="3">Temperory</option>
												<option value="4">Permanent</option>
												<option value="5">Freelance</option>
											</select>
											<i className="fa fa-caret-down"></i>
										</div>
									</div>
									<div className="col-md-6">
										<div className="form-group">
											<select className="form-control" name="project_exp">
												<option value="">Experience (Optional)</option>
												<option value="1">Less than 1 Year</option>
												<option value="2">2 Year</option>
												<option value="3">3 Year</option>
												<option value="4">4 Year</option>
												<option value="5">Over 5 Year</option>
											</select>
											<i className="fa fa-caret-down"></i>
										</div>
									</div>
									<div className="col-md-6">
										<div className="form-group">
											<input type="text" className="form-control" name="project_budget" placeholder="Salary Range" />
									    </div>
								    </div>
									<div className="col-md-6">
										<div className="form-group">
											<select className="form-control" name="project_qualification">
												<option value="">Qualification</option>
												<option value="1">Matriculation</option>
												<option value="2">Intermidiate</option>
												<option value="3">Gradute</option>
												<option value="4">Post Gradute</option>
											</select>
											<i className="fa fa-caret-down"></i>
										</div>
									</div>

									<div className="col-md-6">
										<div className="form-group">
											<select className="form-control" name="project_timeline">
												<option value="">Timeline</option>
												<option value="1">1 Month</option>
												<option value="2">3 Months</option>
												<option value="3">6 Months</option>
												<option value="4">1 Year</option>
												<option value="5">1 Year +</option>
											</select>
											<i className="fa fa-caret-down"></i>
										</div>
									</div>

									<div className="col-md-6">
										<div className="form-group">
											<input type="text" className="form-control" placeholder="Vacancy"  name="project_vacancies" />
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
														<textarea className="form-control" name="project_description" placeholder="Requirement Summary"></textarea>
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
             </Fragment>
      	  )
      }

}


export default connect(state=>state, actions)(PostRequests);



