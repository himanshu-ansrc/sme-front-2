import React, {Component, Fragment} from 'react'
import './Externals.js'
import {connect}  from 'react-redux'
import * as actions from '../../actions'
import { Link , Redirect} from 'react-router-dom'

class Header2 extends Component{
	  componentDidMount(){
	  	 console.log(this.props)
	  }
      render(){
      	 return (
            <Fragment>
            	    <header className="header-2">
						      <div className="container">
						        <div className="row">
						          <div className="col">
						            <div className="header-top">
						              <div className="logo-area">
						                <a href="/"><img src="" alt="" /></a>
						              </div>
						              <div className="header-top-toggler">
						                <div className="header-top-toggler-button"></div>
						              </div>
						              <div className="top-nav">
						                <div className="dropdown header-top-notification">
						                  <a href="candidate.html#" className="notification-button">Notification</a>
						                  <div className="notification-card">
						                    <div className="notification-head">
						                      <span>Notifications</span>
						                      <a href="candidate.html#">Mark all as read</a>
						                    </div>
						                    <div className="notification-body">
						                      <a href="home-2.html" className="notification-list">
						                        <i className="fas fa-bolt"></i>
						                        <p>Your Resume Updated!</p>
						                        <span className="time">5 hours ago</span>
						                      </a>
						                      <a href="candidate.html#" className="notification-list">
						                        <i className="fas fa-arrow-circle-down"></i>
						                        <p>Someone downloaded resume</p>
						                        <span className="time">11 hours ago</span>
						                      </a>
						                      <a href="candidate.html#" className="notification-list">
						                        <i className="fas fa-check-square"></i>
						                        <p>You applied for Project Manager <span>@homeland</span></p>
						                        <span className="time">11 hours ago</span>
						                      </a>
						                      <a href="candidate.html#" className="notification-list">
						                        <i className="fas fa-user"></i>
						                        <p>You changed password</p>
						                        <span className="time">5 hours ago</span>
						                      </a>
						                      <a href="candidate.html#" className="notification-list">
						                        <i className="fas fa-arrow-circle-down"></i>
						                        <p>Someone downloaded resume</p>
						                        <span className="time">11 hours ago</span>
						                      </a>
						                    </div>
						                    <div className="notification-footer">
						                      <a href="candidate.html#">See all notification</a>
						                    </div>
						                  </div>
						                </div>
						                <div className="dropdown header-top-account">
						                  <a href="http://localhost:3000/admin" onClick={()=>{window.location.href="/admin";}} className="account-button">My Account</a>
						                </div>
						              </div>
						            </div>
						          </div>
						        </div>
						      </div>
						    </header>
            </Fragment>
      	 )
      }
}


export default connect(state=>state, actions)(Header2);