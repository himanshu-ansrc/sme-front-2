import React, {Component, Fragment} from 'react'
import Header2 from './Partials/Header-2'
import Footer from './Partials/Footer'
import PostRequests from './Admin/PostRequests'
import ManageRequests from './Admin/ManageRequests'
import ManageCandidates from './Admin/ManageCandidates'
import Sidebar from './Admin/Sidebar'
import {connect} from 'react-redux'
import * as actions from '../actions'


class AdminDashBoard extends Component{
	  constructor(){
	  	 super();
	  	 this.state = {
            sidebarNum: 1
	  	 }
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
                        <div className="dashboard-content-wrapper">
                           {this.state.sidebarNum==1 && <PostRequests/>}
                           {this.state.sidebarNum==2 && <ManageRequests/>}
                           {this.state.sidebarNum==3 && <ManageCandidates/>}
                        </div>
                        <Sidebar viewDashboard={(e)=>{this.setState({sidebarNum: e})}}/>
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



