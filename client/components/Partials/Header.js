import React, {Component, Fragment} from 'react'
import './Externals.js'

class Header extends Component{
    render(){
    	 return(
            <Fragment>
            	 <header>
				      <nav className="navbar navbar-expand-xl absolute-nav transparent-nav cp-nav navbar-light bg-light fluid-nav">
				        <a className="navbar-brand" href="index.html">
				          <img src="images/logo.png" className="img-fluid" alt=""/>
				        </a>
				        <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
				          <span className="navbar-toggler-icon"></span>
				        </button>

				        <div className="collapse navbar-collapse" id="navbarSupportedContent">
				          <ul className="navbar-nav mr-auto job-browse">
				            <li className="nav-item dropdown">
				              <a className="dropdown-toggle" href="home-4.html#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Browse Jobs</a>
				              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
				                <li className="search-by">
				                  <h5>BY Category</h5>
				                  <ul>
				                    <li><a href="home-4.html#">Accounting / Finance <span>(233)</span></a></li>
				                    <li><a href="home-4.html#">Education <span>(46)</span></a></li>
				                    <li><a href="home-4.html#">Design & Creative <span>(156)</span></a></li>
				                    <li><a href="home-4.html#">Health Care <span>(98)</span></a></li>
				                    <li><a href="home-4.html#">Engineer & Architects <span>(188)</span></a></li>
				                    <li><a href="home-4.html#">Marketing & Sales <span>(124)</span></a></li>
				                    <li><a href="home-4.html#">Garments / Textile <span>(584)</span></a></li>
				                    <li><a href="home-4.html#">Customer Support <span>(233)</span></a></li>
				                  </ul>
				                </li>
				                <li className="search-by">
				                  <h5>BY LOcation</h5>
				                  <ul>
				                    <li><a href="home-4.html#">New York City <span>(508)</span></a></li>
				                    <li><a href="home-4.html#">Washington, D.C <span>(96)</span></a></li>
				                    <li><a href="home-4.html#">Chicago <span>(155)</span></a></li>
				                    <li><a href="home-4.html#">San Francisco <span>(24)</span></a></li>
				                    <li><a href="home-4.html#">Los Angeles <span>(268)</span></a></li>
				                    <li><a href="home-4.html#">Boston <span>(46)</span></a></li>
				                  </ul>
				                </li>
				              </ul>
				            </li>
				          </ul>
				          <ul className="navbar-nav ml-auto main-nav">
				            <li className="menu-item active"><a title="Home" href="home-1.html">Home</a></li>
				            <li className="menu-item dropdown">
				              <a title="" href="home-4.html#" data-toggle="dropdown" className="dropdown-toggle" aria-haspopup="true" aria-expanded="false">Jobs</a>
				              <ul  className="dropdown-menu">
				                <li className="menu-item"><a  href="job-listing.html">Job Listing</a></li>
				                <li className="menu-item"><a  href="job-listing-with-map.html">Job Listing With Map</a></li>
				                <li className="menu-item"><a  href="job-details.html">Job Details</a></li>
				                <li className="menu-item"><a  href="post-job.html">Post Job</a></li>
				              </ul>
				            </li>
				            <li className="menu-item dropdown">
				              <a title="" href="home-4.html#" data-toggle="dropdown" className="dropdown-toggle" aria-haspopup="true" aria-expanded="false">Employer</a>
				              <ul  className="dropdown-menu">
				                <li className="menu-item"><a  href="employer-listing.html">Employer Listing</a></li>
				                <li className="menu-item"><a  href="employer-details.html">Employer Details</a></li>
				                <li className="menu-item"><a  href="employer-dashboard.html">Dashboard</a></li>
				                <li className="menu-item"><a  href="employer-dashboard-edit-profile.html">Edit Profile</a></li>
				                <li className="menu-item"><a  href="employer-dashboard-manage-candidate.html">Manage Candidate</a></li>
				                <li className="menu-item"><a  href="employer-dashboard-manage-job.html">Manage Job</a></li>
				                <li className="menu-item"><a href="employer-dashboard-message.html">Message</a></li>
				                <li className="menu-item"><a href="employer-dashboard-pricing.html">Pricing</a></li>
				                <li className="menu-item"><a  href="employer-dashboard-post-job.html">Post Job</a></li>
				              </ul>
				            </li>
				            <li className="menu-item dropdown">
				              <a title="" href="home-4.html#" data-toggle="dropdown" className="dropdown-toggle" aria-haspopup="true" aria-expanded="false">Candidate</a>
				              <ul  className="dropdown-menu">
				                <li className="menu-item"><a  href="candidate.html">Candidate List</a></li>
				                <li className="menu-item"><a  href="candidate-details.html">Candidate Details</a></li>
				                <li className="menu-item"><a  href="dashboard.html">Dashboard</a></li>
				                <li className="menu-item"><a  href="dashboard-edit-profile.html">Edit Profile</a></li>
				                <li className="menu-item"><a  href="add-resume.html">Add Resume</a></li>
				                <li className="menu-item"><a  href="resume.html">Resume</a></li>
				                <li className="menu-item"><a  href="edit-resume.html">Edit Resume</a></li>
				                <li className="menu-item"><a  href="dashboard-bookmark.html">Bookmarked</a></li>
				                <li className="menu-item"><a  href="dashboard-applied.html">Applied</a></li>
				                <li className="menu-item"><a  href="dashboard-pricing.html">Pricing</a></li>
				                <li className="menu-item"><a  href="dashboard-message.html">Message</a></li>
				                <li className="menu-item"><a  href="dashboard-alert.html">Alert</a></li>
				              </ul>
				            </li>
				            <li className="menu-item dropdown">
				              <a title="" href="home-4.html#" data-toggle="dropdown" className="dropdown-toggle" aria-haspopup="true" aria-expanded="false">Pages</a>
				              <ul  className="dropdown-menu">
				                <li className="menu-item"><a  href="about-us.html">About Us</a></li>
				                <li className="menu-item"><a  href="blog.html">Blog</a></li>
				                <li className="menu-item"><a  href="blog-grid.html">Blog Grid</a></li>
				                <li className="menu-item"><a  href="blog-details.html">Blog Details</a></li>
				                <li className="menu-item"><a  href="contact.html">Contact Us</a></li>
				                <li className="menu-item"><a  href="pricing.html">Pricing</a></li>
				                <li className="menu-item"><a  href="how-it-work.html">How It Works</a></li>
				                <li className="menu-item"><a  href="faq.html">FAQ</a></li>
				                <li className="menu-item"><a  href="checkout.html">Checkout</a></li>
				                <li className="menu-item"><a  href="payment-complete.html">Payment Complete</a></li>
				                <li className="menu-item"><a  href="invoice.html">Invoice</a></li>
				                <li className="menu-item"><a  href="terms-and-condition.html">Terms And Condition</a></li>
				              </ul>
				            </li>
				            <li className="menu-item post-job"><a title="Title" href="post-job.html"><i className="fas fa-plus"></i>Post a Job</a></li>
				          </ul>
				          <ul className="navbar-nav ml-auto account-nav">
				            <li className="dropdown menu-item header-top-notification">
				              <a href="home-4.html#" className="notification-button"></a>
				              
				              <div className="notification-card">
				                <div className="notification-head">
				                  <span>Notifications</span>
				                  <a href="home-4.html#">Mark all as read</a>
				                </div>
				                <div className="notification-body">
				                  <a href="home-2.html" className="notification-list">
				                    <i className="fas fa-bolt"></i>
				                    <p>Your Resume Updated!</p>
				                    <span className="time">5 hours ago</span>
				                  </a>
				                  <a href="home-4.html#" className="notification-list">
				                    <i className="fas fa-arrow-circle-down"></i>
				                    <p>Someone downloaded resume</p>
				                    <span className="time">11 hours ago</span>
				                  </a>
				                  <a href="home-4.html#" className="notification-list">
				                    <i className="fas fa-check-square"></i>
				                    <p>You applied for Project Manager <span>@homeland</span></p>
				                    <span className="time">11 hours ago</span>
				                  </a>
				                  <a href="home-4.html#" className="notification-list">
				                    <i className="fas fa-user"></i>
				                    <p>You changed password</p>
				                    <span className="time">5 hours ago</span>
				                  </a>
				                  <a href="home-4.html#" className="notification-list">
				                    <i className="fas fa-arrow-circle-down"></i>
				                    <p>Someone downloaded resume</p>
				                    <span className="time">11 hours ago</span>
				                  </a>
				                </div>
				                <div className="notification-footer">
				                  <a href="home-4.html#">See all notification</a>
				                </div>
				              </div>
				            </li>
				            <li className="menu-item login-popup"><button title="Title" type="button" data-toggle="modal" data-target="#exampleModalLong">Login</button></li>
				            <li className="menu-item login-popup"><button title="Title" type="button" data-toggle="modal" data-target="#exampleModalLong2">Registration</button></li>
				          </ul> 
				        </div>
				      </nav>
				      <div className="account-entry">
				        <div className="modal fade" id="exampleModalLong" tabIndex="-1" role="dialog" aria-hidden="true">
				          <div className="modal-dialog" role="document">
				            <div className="modal-content">
				              <div className="modal-header">
				                <h5 className="modal-title"><i data-feather="user"></i>Login</h5>
				                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
				                  <span aria-hidden="true">&times;</span>
				                </button>
				              </div>
				              <div className="modal-body">
				                <form action="home-4.html#">
				                  <div className="form-group">
				                    <input type="email" placeholder="Email Address" className="form-control" />
				                  </div>
				                  <div className="form-group">
				                    <input type="password" placeholder="Password" className="form-control" />
				                  </div>
				                  <div className="more-option">
				                    <div className="form-check">
				                      <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
				                      <label className="form-check-label" htmlFor="defaultCheck1">
				                        Remember Me
				                      </label>
				                    </div>
				                    <a href="home-4.html#">Forget Password?</a>
				                  </div>
				                  <button className="button primary-bg btn-block">Login</button>
				                </form>
				                <div className="shortcut-login">
				                  <span>Or connect with</span>
				                  <div className="buttons">
				                    <a href="home-4.html#" className="facebook"><i className="fab fa-facebook-f"></i>Facebook</a>
				                    <a href="home-4.html#" className="google"><i className="fab fa-google"></i>Google</a>
				                  </div>
				                  <p>Don't have an account? <a href="home-4.html#">Register</a></p>
				                </div>
				              </div>
				            </div>
				          </div>
				        </div>
				        <div className="modal fade" id="exampleModalLong2" tabIndex="-1" role="dialog" aria-hidden="true">
				          <div className="modal-dialog" role="document">
				            <div className="modal-content">
				              <div className="modal-header">
				                <h5 className="modal-title"><i data-feather="edit"></i>Registration</h5>
				                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
				                  <span aria-hidden="true">&times;</span>
				                </button>
				              </div>
				              <div className="modal-body">
				                <div className="account-type">
				                  <a href="home-4.html#" className="candidate-acc active"><i data-feather="user"></i>Candidate</a>
				                  <a href="home-4.html#" className="employer-acc"><i data-feather="briefcase"></i>Employer</a>
				                </div>
				                <form action="home-4.html#">
				                  <div className="form-group">
				                    <input type="text" placeholder="Username" className="form-control" />
				                  </div>
				                  <div className="form-group">
				                    <input type="email" placeholder="Email Address" className="form-control" />
				                  </div>
				                  <div className="form-group">
				                    <input type="password" placeholder="Password" className="form-control" />
				                  </div>
				                  <div className="more-option terms">
				                    <div className="form-check">
				                      <input className="form-check-input" type="checkbox" value="" id="defaultCheck2"/>
				                      <label className="form-check-label" htmlFor="defaultCheck2">
				                        I accept the <a href="home-4.html#">terms & conditions</a>
				                      </label>
				                    </div>
				                  </div>
				                  <button className="button primary-bg btn-block">Register</button>
				                </form>
				                <div className="shortcut-login">
				                  <span>Or connect with</span>
				                  <div className="buttons">
				                    <a href="home-4.html#" className="facebook"><i className="fab fa-facebook-f"></i>Facebook</a>
				                    <a href="home-4.html#" className="google"><i className="fab fa-google"></i>Google</a>
				                  </div>
				                  <p>Already have an account? <a href="home-4.html#">Login</a></p>
				                </div>
				              </div>
				            </div>
				          </div>
				        </div>
				      </div>
				    </header>
						    <div className="banner banner-4 banner-4-bg">
						      <div className="container">
						        <div className="row">
						          <div className="col-12">
						            <div className="banner-content">
						              <h1>The Easiest Way to Find Job</h1>
						              <p> Find Jobs, Employment & Career Opportunities</p>
						              <div className="banner-search">
						                <form action="home-4.html#" className="search-form">
						                  <input type="text" placeholder="Enter Keywords" />
						                  <button className="button primary-bg mrgn-ryt-30">Search</button>
						                  <button className="button white-bg black-txt">Advanced Search</button>
						                </form>
						                <div className="trending-key">
						                  <span>Trending Keywords:</span>
						                  <a href="home-4.html#">designer</a>
						                  <a href="home-4.html#">php</a>
						                  <a href="home-4.html#">ios</a>
						                  <a href="home-4.html#">Android</a>
						                  <a href="home-4.html#">Accounting</a>
						                  <a href="home-4.html#">Management</a>
						                </div>
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


export default Header;






   