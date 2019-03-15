import React, {Component, Fragment} from 'react'
import Header2 from './Partials/Header-2'
import Footer from './Partials/Footer'
import PostRequests from './Admin/PostRequests'

import {connect} from 'react-redux'
import * as actions from '../actions'


class AdminDashBoard extends Component{
	  constructor(){
	  	 super();
	  }
	  componentDidMount(){

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
								<h1>Employer Dashboard</h1>
								<nav aria-label="breadcrumb">
									<ol className="breadcrumb">
										<li className="breadcrumb-item">
											<a href="employer-dashboard-post-job.html#">Home</a>
										</li>
										<li className="breadcrumb-item active" aria-current="page">Employer Dashboard</li>
									</ol>
								</nav>
							</div>
						  </div>
						  <div className="col-md-6">
								<div className="breadcrumb-form">
									<form action="employer-dashboard-post-job.html#">
										<input type="text" placeholder="Enter Keywords" />
										<button>
										 <svg
											xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-search">
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
			    <div className="container no-gliters">
				 <div className="row no-gliters">
				  <div className="col">
					<div className="dashboard-container">


                                    <PostRequests />

									<div className="dashboard-sidebar">
										<div className="company-info">
											<div className="thumb">
												<img src="https://s3.amazonaws.com/uifaces/faces/twitter/d_kobelyatsky/128.jpg" className="img-fluid" alt="" />
												</div>
												<div className="company-body">
													<h5>Degoin</h5>
													<span>@username</span>
												</div>
											</div>
											<div className="dashboard-menu">
												<ul>
													<li className="active">
														<i className="fas fa-plus-square"></i>
														<a href="employer-dashboard-post-job.html">Post New Job</a>
													</li>
													<li>
														<i className="fas fa-briefcase"></i>
														<a href="employer-dashboard-manage-job.html">Manage Jobs</a>
													</li>
													<li>
														<i className="fas fa-users"></i>
														<a href="employer-dashboard-manage-candidate.html">Manage Candidates</a>
													</li>
													<li>
														<i className="fas fa-heart"></i>
														<a href="employer-dashboard-post-job.html#">Shortlisted Resumes</a>
													</li>
												</ul>
												<ul className="delete">
													<li>
														<i className="fas fa-power-off"></i>
														<a href="employer-dashboard-post-job.html#">Logout</a>
													</li>
													<li>
														<i className="fas fa-trash-alt"></i>
														<a href="employer-dashboard-post-job.html#" data-toggle="modal" data-target="#modal-delete">Delete Profile</a>
													</li>
												</ul>
												<div className="modal fade modal-delete" id="modal-delete" tabindex="-1" role="dialog" aria-hidden="true">
													<div className="modal-dialog" role="document">
														<div className="modal-content">
															<div className="modal-body">
																<h4>
																	<svg
																		xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-trash-2">
																		<polyline points="3 6 5 6 21 6"></polyline>
																		<path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
																		<line x1="10" y1="11" x2="10" y2="17"></line>
																		<line x1="14" y1="11" x2="14" y2="17"></line>
																	</svg>Delete Account
																</h4>
																<p>Are you sure! You want to delete your profile. This can't be undone!</p>
																<form action="employer-dashboard-post-job.html#">
																	<div className="form-group">
																		<input type="password" className="form-control" placeholder="Enter password" />
																	</div>
																	<div className="buttons">
																		<button className="delete-button">Save Update</button>
																		<button className="">Cancel</button>
																	</div>
																		<div className="form-group form-check">
																			<input type="checkbox" className="form-check-input" checked="" />
																			<label className="form-check-label">You accepts our 
																				<a href="employer-dashboard-post-job.html#">Terms and Conditions</a> and 
																				<a href="employer-dashboard-post-job.html#">Privacy Policy</a>
																			</label>
																		</div>
																		</form>
																	</div>
																</div>
															</div>
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

export default connect(state=>state, actions)(AdminDashBoard);



