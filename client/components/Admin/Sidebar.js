import React, {Component, Fragment} from 'react'

class Sidebar extends Component{
	  constructor(){
	  	 super();
	  }
	  viewDashboardContent = (e)=>{
	  	 e.preventDefault();
         this.props.viewDashboard(e.target.id)
	  }
      render(){
      	  console.log(this.props)
      	  return(
             <Fragment>
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
							<li>
								<i className="fas fa-briefcase"></i>
								<a href="" id="2" onClick={this.viewDashboardContent}>Manage Applications</a>
							</li>
							<li>
								<i className="fas fa-users"></i>
								<a href="" id="3" onClick={this.viewDashboardContent}>Manage Candidates</a>
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
             </Fragment>
      	  )
      }

}


export default Sidebar;



