import React, {Component, Fragment} from 'react'
import Header2 from './Partials/Header-2'
import Footer from './Partials/Footer'
import './Partials/Externals.js'


class CandidatesList extends Component{
      render(){
      	 return(
            <Fragment>
                    <Header2/>
				    <div className="alice-bg padding-top-35 padding-bottom-35">
				      <div className="container">
				        <div className="row">
				          <div className="col-md-6">
				            <div className="breadcrumb-area">
				              <h1>Candidates List</h1>
				              <nav aria-label="breadcrumb">
				                <ol className="breadcrumb">
				                  <li className="breadcrumb-item"><a href="candidate.html#">Home</a></li>
				                  <li className="breadcrumb-item active" aria-current="page">Candidates List</li>
				                </ol>
				              </nav>
				            </div>
				          </div>
				          <div className="col-md-6">
				            <div className="breadcrumb-form">
				              <form action="candidate.html#">
				                <input type="text" placeholder="Enter Keywords"  />
				                <button><i data-feather="search"></i></button>
				              </form>
				            </div>
				          </div>
				        </div>
				      </div>
				    </div>

				    <div className="alice-bg section-padding-bottom">
				      <div className="container">
				        <div className="row no-gutters">
				          <div className="col">
				            <div className="candidate-container">
				              <div className="filtered-candidate-wrapper">
				                <div className="candidate-view-controller-wrapper">
				                  <div className="candidate-view-controller">
				                    <div className="controller list active">
				                      <i data-feather="menu"></i>
				                    </div>
				                    <div className="controller grid">
				                      <i data-feather="grid"></i>
				                    </div>
				                    <div className="candidate-view-filter">
				                      <select className="selectpicker">
				                        <option defaultValue="">Most Recent</option>
				                        <option value="california">Top Rated</option>
				                        <option value="las-vegas">Most Popular</option>
				                      </select>
				                    </div>
				                  </div>
				                  <div className="showing-number">
				                    <span>Showing 1–12 of 28 Jobs</span>
				                  </div>
				                </div>
				                <div className="candidate-filter-result">
				                  <div className="candidate">
				                    <div className="thumb">
				                      <a href="candidate.html#">
				                        <img src="images/candidate/thumb-1.jpg" className="img-fluid" alt="" />
				                      </a>
				                    </div>
				                    <div className="body">
				                      <div className="content">
				                        <h4><a href="candidate-details.html">Lula Wallace</a></h4>
				                        <div className="info">
				                          <span className="work-post"><a href="candidate.html#"><i data-feather="check-square"></i>Senior UI / UX Designer</a></span>
				                          <span className="location"><a href="candidate.html#"><i data-feather="map-pin"></i>New York City</a></span>
				                        </div>
				                      </div>
				                      <div className="button-area">
				                        <a href="candidate.html#">View Resume</a>
				                      </div>
				                    </div>
				                  </div>
				                  <div className="candidate">
				                    <div className="thumb">
				                      <a href="candidate.html#">
				                        <img src="images/candidate/thumb-2.jpg" className="img-fluid" alt="" />
				                      </a>
				                    </div>
				                    <div className="body">
				                      <div className="content">
				                        <h4><a href="candidate-details.html">Hertha A. Sullivan</a></h4>
				                        <div className="info">
				                          <span className="work-post"><a href="candidate.html#"><i data-feather="check-square"></i>IT Junior</a></span>
				                          <span className="location"><a href="candidate.html#"><i data-feather="map-pin"></i>Washington, D.C.</a></span>
				                        </div>
				                      </div>
				                      <div className="button-area">
				                        <a href="candidate.html#">View Resume</a>
				                      </div>
				                    </div>
				                  </div>
				                  <div className="candidate">
				                    <div className="thumb">
				                      <a href="candidate.html#">
				                        <img src="images/candidate/thumb-3.jpg" className="img-fluid" alt="" />
				                      </a>
				                    </div>
				                    <div className="body">
				                      <div className="content">
				                        <h4><a href="candidate-details.html">David Johnston</a></h4>
				                        <div className="info">
				                          <span className="work-post"><a href="candidate.html#"><i data-feather="check-square"></i>Accounting Manager</a></span>
				                          <span className="location"><a href="candidate.html#"><i data-feather="map-pin"></i>San Francisco</a></span>
				                        </div>
				                      </div>
				                      <div className="button-area">
				                        <a href="candidate.html#">View Resume</a>
				                      </div>
				                    </div>
				                  </div>
				                  <div className="candidate">
				                    <div className="thumb">
				                      <a href="candidate.html#">
				                        <img src="images/candidate/thumb-4.jpg" className="img-fluid" alt="" />
				                      </a>
				                    </div>
				                    <div className="body">
				                      <div className="content">
				                        <h4><a href="candidate-details.html">Robert Hayes</a></h4>
				                        <div className="info">
				                          <span className="work-post"><a href="candidate.html#"><i data-feather="check-square"></i>UI Designer</a></span>
				                          <span className="location"><a href="candidate.html#"><i data-feather="map-pin"></i>New York City</a></span>
				                        </div>
				                      </div>
				                      <div className="button-area">
				                        <a href="candidate.html#">View Resume</a>
				                      </div>
				                    </div>
				                  </div>
				                  <div className="candidate">
				                    <div className="thumb">
				                      <a href="candidate.html#">
				                        <img src="images/candidate/thumb-5.jpg" className="img-fluid" alt="" />
				                      </a>
				                    </div>
				                    <div className="body">
				                      <div className="content">
				                        <h4><a href="candidate-details.html">Micheal N. Taylor</a></h4>
				                        <div className="info">
				                          <span className="work-post"><a href="candidate.html#"><i data-feather="check-square"></i>ios developer</a></span>
				                          <span className="location"><a href="candidate.html#"><i data-feather="map-pin"></i>Los Angeles</a></span>
				                        </div>
				                      </div>
				                      <div className="button-area">
				                        <a href="candidate.html#">View Resume</a>
				                      </div>
				                    </div>
				                  </div>
				                  <div className="candidate">
				                    <div className="thumb">
				                      <a href="candidate.html#">
				                        <img src="images/candidate/thumb-6.jpg" className="img-fluid" alt="" />
				                      </a>
				                    </div>
				                    <div className="body">
				                      <div className="content">
				                        <h4><a href="candidate-details.html">Marjorie Huber</a></h4>
				                        <div className="info">
				                          <span className="work-post"><a href="candidate.html#"><i data-feather="check-square"></i>Graphics Designer</a></span>
				                          <span className="location"><a href="candidate.html#"><i data-feather="map-pin"></i>Seattle</a></span>
				                        </div>
				                      </div>
				                      <div className="button-area">
				                        <a href="candidate.html#">View Resume</a>
				                      </div>
				                    </div>
				                  </div>
				                  <div className="candidate">
				                    <div className="thumb">
				                      <a href="candidate.html#">
				                        <img src="images/candidate/thumb-7.jpg" className="img-fluid" alt="" />
				                      </a>
				                    </div>
				                    <div className="body">
				                      <div className="content">
				                        <h4><a href="candidate-details.html">James C. Elliott</a></h4>
				                        <div className="info">
				                          <span className="work-post"><a href="candidate.html#"><i data-feather="check-square"></i>Content Writer</a></span>
				                          <span className="location"><a href="candidate.html#"><i data-feather="map-pin"></i>New York City</a></span>
				                        </div>
				                      </div>
				                      <div className="button-area">
				                        <a href="candidate.html#">View Resume</a>
				                      </div>
				                    </div>
				                  </div>
				                  <div className="candidate">
				                    <div className="thumb">
				                      <a href="candidate.html#">
				                        <img src="images/candidate/thumb-10.jpg" className="img-fluid" alt="" />
				                      </a>
				                    </div>
				                    <div className="body">
				                      <div className="content">
				                        <h4><a href="candidate-details.html">Guy Appel</a></h4>
				                        <div className="info">
				                          <span className="work-post"><a href="candidate.html#"><i data-feather="check-square"></i>Engineer</a></span>
				                          <span className="location"><a href="candidate.html#"><i data-feather="map-pin"></i>Baltimore</a></span>
				                        </div>
				                      </div>
				                      <div className="button-area">
				                        <a href="candidate.html#">View Resume</a>
				                      </div>
				                    </div>
				                  </div>
				                  <div className="candidate">
				                    <div className="thumb">
				                      <a href="candidate.html#">
				                        <img src="images/candidate/thumb-8.jpg" className="img-fluid" alt="" />
				                      </a>
				                    </div>
				                    <div className="body">
				                      <div className="content">
				                        <h4><a href="candidate-details.html">Mario Havens</a></h4>
				                        <div className="info">
				                          <span className="work-post"><a href="candidate.html#"><i data-feather="check-square"></i>Leader IT engineer</a></span>
				                          <span className="location"><a href="candidate.html#"><i data-feather="map-pin"></i>Washington, D.C.</a></span>
				                        </div>
				                      </div>
				                      <div className="button-area">
				                        <a href="candidate.html#">View Resume</a>
				                      </div>
				                    </div>
				                  </div>
				                  <div className="candidate">
				                    <div className="thumb">
				                      <a href="candidate.html#">
				                        <img src="images/candidate/thumb-9.jpg" className="img-fluid" alt="" />
				                      </a>
				                    </div>
				                    <div className="body">
				                      <div className="content">
				                        <h4><a href="candidate-details.html">Matthew Ruiz</a></h4>
				                        <div className="info">
				                          <span className="work-post"><a href="candidate.html#"><i data-feather="check-square"></i>Web Develper</a></span>
				                          <span className="location"><a href="candidate.html#"><i data-feather="map-pin"></i>Philadelphia</a></span>
				                        </div>
				                      </div>
				                      <div className="button-area">
				                        <a href="candidate.html#">View Resume</a>
				                      </div>
				                    </div>
				                  </div>
				                </div>
				                <div className="pagination-list text-center">
				                  <nav className="navigation pagination">
				                    <div className="nav-links">
				                      <a className="prev page-numbers" href="candidate.html#"><i className="fas fa-angle-left"></i></a>
				                      <a className="page-numbers" href="candidate.html#">1</a>
				                      <span aria-current="page" className="page-numbers current">2</span>
				                      <a className="page-numbers" href="candidate.html#">3</a>
				                      <a className="page-numbers" href="candidate.html#">4</a>
				                      <a className="next page-numbers" href="candidate.html#"><i className="fas fa-angle-right"></i></a>
				                    </div>
				                  </nav>                
				                </div>
				              </div>
				              <div className="candidate-filter-wrapper">
				                <div className="selected-options same-pad">
				                  <div className="selection-title">
				                    <h4>You Selected</h4>
				                    <a href="candidate.html#">Clear All</a>
				                  </div>
				                  <ul className="filtered-options">
				                  </ul>
				                </div>
				                <div className="candidate-filter-dropdown same-pad category">
				                  <select className="selectpicker">
				                    <option defaultValue="">Category</option>
				                    <option value="california">Accounting / Finance</option>
				                    <option value="california">Education</option>
				                    <option value="california">Design &amp; Creative</option>
				                    <option value="california">Health Care</option>
				                    <option value="california">Engineer &amp; Architects</option>
				                    <option value="california">Marketing &amp; Sales</option>
				                    <option value="california">Garments / Textile</option>
				                    <option value="california">Customer Support</option>
				                    <option value="california">Digital Media</option>
				                    <option value="california">Telecommunication</option>
				                  </select>
				                </div>
				                <div className="candidate-filter-dropdown same-pad location">
				                  <select className="selectpicker">
				                    <option defaultValue="">Location</option>
				                    <option value="california">Chicago</option>
				                    <option value="california">New York City</option>
				                    <option value="california">San Francisco</option>
				                    <option value="california">Washington</option>
				                    <option value="california">Boston</option>
				                    <option value="california">Los Angeles</option>
				                    <option value="california">Seattle</option>
				                    <option value="california">Las Vegas</option>
				                    <option value="california">San Diego</option>
				                  </select>
				                </div>
				                <div data-id="candidate-type" className="candidate-filter same-pad candidate-type">
				                  <h4 className="option-title">Job Type</h4>
				                  <ul>
				                    <li className="full-time"><i data-feather="clock"></i><a href="candidate.html#" data-attr="Full Time">Full Time</a></li>
				                    <li className="part-time"><i data-feather="clock"></i><a href="candidate.html#" data-attr="Part Time">Part Time</a></li>
				                    <li className="freelance"><i data-feather="clock"></i><a href="candidate.html#" data-attr="Freelance">Freelance</a></li>
				                    <li className="temporary"><i data-feather="clock"></i><a href="candidate.html#" data-attr="Temporary">Temporary</a></li>
				                  </ul>
				                </div>
				                <div data-id="experience" className="candidate-filter same-pad experience">
				                  <h4 className="option-title">Experience</h4>
				                  <ul>
				                    <li><a href="candidate.html#" data-attr="Fresh">Fresh</a></li>
				                    <li><a href="candidate.html#" data-attr="Less than 1 year">Less than 1 year</a></li>
				                    <li><a href="candidate.html#" data-attr="2 Year">2 Year</a></li>
				                    <li><a href="candidate.html#" data-attr="3 Year">3 Year</a></li>
				                    <li><a href="candidate.html#" data-attr="4 Year">4 Year</a></li>
				                    <li><a href="candidate.html#" data-attr="5 Year">5 Year</a></li>
				                    <li><a href="candidate.html#" data-attr="Avobe 5 Years">Avobe 5 Years</a></li>
				                  </ul>
				                </div>
				                <div className="candidate-filter same-pad">
				                  <h4 className="option-title">Salary Range</h4>
				                  <div className="price-range-slider">
				                    <div className="nstSlider" data-range_min="0" data-range_max="10000" 
				                     data-cur_min="0"    data-cur_max="6130">
				                      <div className="bar"></div>
				                      <div className="leftGrip"></div>
				                      <div className="rightGrip"></div>
				                      <div className="grip-label">
				                        <span className="leftLabel"></span>
				                        <span className="rightLabel"></span>
				                      </div>
				                    </div>
				                  </div>
				                </div>
				                <div data-id="post" className="candidate-filter same-pad post">
				                  <h4 className="option-title">Date Posted</h4>
				                  <ul>
				                    <li><a href="candidate.html#" data-attr="Last hour">Last hour</a></li>
				                    <li><a href="candidate.html#" data-attr="Last 24 hour">Last 24 hour</a></li>
				                    <li><a href="candidate.html#" data-attr="Last 7 days">Last 7 days</a></li>
				                    <li><a href="candidate.html#" data-attr="Last 14 days">Last 14 days</a></li>
				                    <li><a href="candidate.html#" data-attr="Last 30 days">Last 30 days</a></li>
				                  </ul>
				                </div>
				                <div data-id="gender" className="candidate-filter same-pad gender">
				                  <h4 className="option-title">Gender</h4>
				                  <ul>
				                    <li><a href="candidate.html#" data-attr="Male">Male</a></li>
				                    <li><a href="candidate.html#" data-attr="Female">Female</a></li>
				                  </ul>
				                </div>
				                <div data-id="qualification" className="candidate-filter same-pad qualification">
				                  <h4 className="option-title">Qualification</h4>
				                  <ul>
				                    <li><a href="candidate.html#" data-attr="Matriculation">Matriculation</a></li>
				                    <li><a href="candidate.html#" data-attr="Intermidiate">Intermidiate</a></li>
				                    <li><a href="candidate.html#" data-attr="Gradute">Gradute</a></li>
				                  </ul>
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


export default CandidatesList;



