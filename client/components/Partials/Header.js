import React, {Component, Fragment} from 'react'
import './Externals.js'
import { Link , Redirect} from 'react-router-dom'

import {connect}  from 'react-redux'
import * as actions from '../../actions'

class Header extends Component{
	constructor(){
		super();
		this.state = {
			 toList: false, searchKeys: ''
		}
	}
    searchCandidates = (e)=>{   
       e.preventDefault();
       window.location.href = "/list-candidates?"+this.state.searchKeys;
    }
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
						                  <input type="text" placeholder="Enter Keywords" onChange={(e)=>this.setState({searchKeys: e.target.value})}/>
						                  <button className="button primary-bg mrgn-ryt-30" onClick={this.searchCandidates}>Search</button>
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


export default connect(state=>state, actions)(Header);






   