import React, {Component, Fragment} from 'react'

class Footer extends Component{
    render(){
    	 return(
            <Fragment>
				    <footer className="footer-bg">
				      <div className="footer-widget-wrapper padding-bottom-60 padding-top-80">
				        <div className="container">
				          <div className="row">
				            <div className="col-lg-2 col-sm-6">
				              <div className="footer-widget footer-shortcut-link">
				                <h4>Information</h4>
				                <div className="widget-inner">
				                  <ul>
				                    <li><a href="home-4.html#">About Us</a></li>
				                    <li><a href="home-4.html#">Contact Us</a></li>
				                    <li><a href="home-4.html#">Privacy Policy</a></li>
				                    <li><a href="home-4.html#">Terms &amp; Conditions</a></li>
				                  </ul>
				                </div>
				              </div>
				            </div>
				            <div className="col-lg-2 col-sm-6">
				              <div className="footer-widget footer-shortcut-link">
				                <h4>Job Seekers</h4>
				                <div className="widget-inner">
				                  <ul>
				                    <li><a href="home-4.html#">Create Account</a></li>
				                    <li><a href="home-4.html#">Career Counseling</a></li>
				                    <li><a href="home-4.html#">My Oficiona</a></li>
				                    <li><a href="home-4.html#">FAQ</a></li>
				                    <li><a href="home-4.html#">Video Guides</a></li>
				                  </ul>
				                </div>
				              </div>
				            </div>
				            <div className="col-lg-2 col-sm-6">
				              <div className="footer-widget footer-shortcut-link">
				                <h4>Employers</h4>
				                <div className="widget-inner">
				                  <ul>
				                    <li><a href="home-4.html#">Create Account</a></li>
				                    <li><a href="home-4.html#">Products/Service</a></li>
				                    <li><a href="home-4.html#">Post a Job</a></li>
				                    <li><a href="home-4.html#">FAQ</a></li>
				                  </ul>
				                </div>
				              </div>
				            </div>
				            <div className="col-lg-5 offset-lg-1 col-sm-6">
				              <div className="footer-widget footer-newsletter">
				                <h4>Newsletter</h4>
				                <p>Get e-mail updates about our latest news and Special offers.</p>
				                <form action="home-4.html#" className="newsletter-form form-inline">
				                  <div className="form-group">
				                    <input type="text" className="form-control" placeholder="Email address..." />
				                  </div>
				                  <button className="btn button primary-bg">Submit<i className="fas fa-caret-right"></i></button>
				                  <p className="newsletter-error">0 - Please enter a value</p>
				                  <p className="newsletter-success">Thank you for subscribing!</p>
				                </form>
				              </div>
				            </div>
				          </div>
				        </div>
				      </div>
				      <div className="footer-bottom-area">
				        <div className="container">
				          <div className="row">
				            <div className="col">
				              <div className="footer-bottom border-top">
				                <div className="row">
				                  <div className="col-lg-6">
				                    <p className="copyright-text">Copyright <a href="home-4.html#">Oficiona</a> 2018, All right reserved</p>
				                  </div>
				                  <div className="col-lg-6">
				                    <div className="back-to-top">
				                      <a href="#">Back to top<i className="fas fa-angle-up"></i></a>
				                    </div>
				                  </div>
				                </div>
				              </div>
				            </div>
				          </div>
				        </div>
				      </div>
				    </footer>
            </Fragment>
    	 )
    }
}


export default Footer;