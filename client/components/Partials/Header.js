import React, {Component, Fragment} from 'react'
import './Externals.js'
import { Link , Redirect} from 'react-router-dom'

import {connect}  from 'react-redux'
import * as actions from '../../actions'

class Header extends Component{
	constructor(){
		super();
		this.state = {
			 toList: false, searchKeys: '', loginRedirect : false
		}
	}
    searchCandidates = (e)=>{   
       e.preventDefault();
       window.location.href = "/list-candidates?"+this.state.searchKeys;
    }
    handleChange = name => event => {
      this.setState({[name]: event.target.value})
    }
    adminLogin = (e)=>{
        const email = (this.state.loginemail).trim(), password = (this.state.loginpassword).trim();
        this.props.login_user({email, password}, ()=>{
        	 document.getElementById('close-login-model').click();
        	 this.setState({loginRedirect: true})
        })
    }
    render(){
    	 if(this.state.loginRedirect){
    	 	return <Redirect to="/admin" />
    	 }
    	 return(
            <Fragment>
            	 <header>
				      <nav className="main-header-nav navbar navbar-expand-xl absolute-nav transparent-nav cp-nav navbar-light bg-light fluid-nav">
				        <a className="navbar-brand" href="index.html">
				          <img src="images/logo.png" className="img-fluid" alt=""/>
				        </a>
				        {this.props.admin
                         ? (
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
					          <ul className="navbar-nav ml-auto main-nav">
					            <li className="menu-item post-job"><a title="Title" href="post-job.html"><i className="fas fa-plus"></i>New SME request</a></li>
					          </ul>
					          <ul className="navbar-nav ml-auto account-nav">
					            <li className="menu-item login-popup"><button title="Title" type="button" data-toggle="modal" data-target="#exampleModalLong">Go to Dashboard</button></li>
					          </ul> 
					        </div>)
                         : (
					        <div className="collapse navbar-collapse" id="navbarSupportedContent">
					          <ul className="navbar-nav ml-auto main-nav">
					          </ul>
					          <ul className="navbar-nav ml-auto account-nav">
					            <li className="menu-item login-popup"><button title="Title" type="button" data-toggle="modal" data-target="#exampleModalLong">Login</button></li>
					            <li className="menu-item login-popup"><button title="Title" type="button" data-toggle="modal" data-target="#exampleModalLong2">Register</button></li>
					          </ul> 
					        </div>
                         	)
				        }	
				      </nav>
				      <div className="account-entry">
				        <div className="modal fade" id="exampleModalLong" tabIndex="-1" role="dialog" aria-hidden="true">
				          <div className="modal-dialog" role="document">
				            <div className="modal-content">
				              <div className="modal-header">
				                <h5 className="modal-title"><i data-feather="user"></i>Login</h5>
				                <button type="button" className="close" id="close-login-model" data-dismiss="modal" aria-label="Close">
				                  <span aria-hidden="true">&times;</span>
				                </button>
				              </div>
				              <div className="modal-body">
				                <form>
				                  <div className="form-group">
				                    <input type="email" placeholder="Email Address" name="login-email" onChange={this.handleChange('loginemail')} className="form-control" />
				                  </div>
				                  <div className="form-group">
				                    <input type="password" placeholder="Password" name="login-password" onChange={this.handleChange('loginpassword')}  className="form-control" />
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
				                  <button type="button" className="button primary-bg btn-block" onClick={this.adminLogin}>Login</button>
				                </form>
				                <div className="shortcut-login">
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
						              <h1>Find the right subject matter experts for your project</h1>
						              <div className="banner-search">
						                <form action="home-4.html#" className="search-form">
						                  <input type="text" placeholder="Enter Keywords" onChange={(e)=>this.setState({searchKeys: e.target.value})}/>
						                  <button className="button primary-bg mrgn-ryt-30" onClick={this.searchCandidates}>Search</button>
						                  <button className="button white-bg black-txt">Advanced Search</button>
						                </form>
						                <div className="trending-key">
						                  <span>Example :</span>
						                  <a href="home-4.html#">Designer</a>
						                  <a href="home-4.html#">Java Developer</a>
						                  <a href="home-4.html#">Content Marketer</a>
						                  <a href="home-4.html#">Astronomy</a>
						                  <a href="home-4.html#">Math</a>
						                  <a href="home-4.html#">Psychology</a>
						                  <a href="home-4.html#">Law</a>
						                  <a href="home-4.html#">Accounting</a>
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






   