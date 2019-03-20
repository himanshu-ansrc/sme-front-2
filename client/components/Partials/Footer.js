import React, {Component, Fragment} from 'react'

class Footer extends Component{
    render(){
    	 return(
            <Fragment>
				    <footer className="footer-bg">
				      <div className="footer-bottom-area">
				        <div className="container">
				          <div className="row">
				            <div className="col">
				              <div className="footer-bottom">
				                <div className="row">
				                  <div className="col-lg-6">
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