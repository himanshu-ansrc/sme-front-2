import React, {Component, Fragment} from 'react'
import './Externals.js'

class Header2 extends Component{
      render(){
      	 return (
            <Fragment>
            	    <header className="header-2">
						      <div className="container">
						        <div className="row">
						          <div className="col">
						            <div className="header-top">
						              <div className="logo-area">
						                <a href="candidate.html#"><img src="images/logo-2.png" alt="" /></a>
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
						                  <a href="candidate.html#" className="account-button">My Account</a>
						                  <div className="account-card">
						                    <div className="header-top-account-info">
						                      <a href="candidate.html#" className="account-thumb">
						                        <img src="images/account/thumb-1.jpg" className="img-fluid" alt="" />
						                      </a>
						                      <div className="account-body">
						                        <h5><a href="candidate.html#">Robert Chavez</a></h5>
						                        <span className="mail">chavez@domain.com</span>
						                      </div>
						                    </div>
						                    <ul className="account-item-list">
						                      <li><a href="candidate.html#"><span className="ti-user"></span>Account</a></li>
						                      <li><a href="candidate.html#"><span className="ti-settings"></span>Settings</a></li>
						                      <li><a href="candidate.html#"><span className="ti-power-off"></span>Log Out</a></li>
						                    </ul>
						                  </div>
						                </div>
						                <select className="selectpicker select-language" data-width="fit">
						                  <option data-content='<span className="flag-icon flag-icon-us"></span> English'>English</option>
						                  <option  data-content='<span className="flag-icon flag-icon-mx"></span> Español'>Español</option>
						                </select>
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


export default Header2;