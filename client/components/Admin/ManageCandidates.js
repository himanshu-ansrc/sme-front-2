import React, {Component, Fragment} from 'react'


class ManageCandidates extends Component{
    render(){
    	return(
			<div className="manage-candidate-container">
			    <table className="table">
			        <thead>
			            <tr>
			                <th>Job Title</th>
			                <th>Status</th>
			                <th className="action">Action</th>
			            </tr>
			        </thead>
			        <tbody>
			            <tr className="candidates-list">
			                <td className="title">
			                    <div className="thumb">
			                        <img src="dashboard/images/user-1.jpg" className="img-fluid" alt="" />
			                    </div>
			                    <div className="body">
			                        <h5><a href="#">Lula Wallace</a></h5>
			                        <div className="info">
			                            <span className="designation"><a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-check-square"><polyline points="9 11 12 14 22 4"></polyline><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path></svg>Senior UI / UX Designer</a></span>
			                            <span className="location"><a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-map-pin"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>New Orleans</a></span>
			                        </div>
			                    </div>
			                </td>
			                <td className="status">
			                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-check-circle">
			                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
			                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
			                    </svg>Shortlisted</td>
			                <td className="action">
			                    <a href="#" className="download">
			                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-download">
			                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
			                            <polyline points="7 10 12 15 17 10"></polyline>
			                            <line x1="12" y1="15" x2="12" y2="3"></line>
			                        </svg>
			                    </a>
			                    <a href="#" className="inbox">
			                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-mail">
			                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
			                            <polyline points="22,6 12,13 2,6"></polyline>
			                        </svg>
			                    </a>
			                    <a href="#" className="remove">
			                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-trash-2">
			                            <polyline points="3 6 5 6 21 6"></polyline>
			                            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
			                            <line x1="10" y1="11" x2="10" y2="17"></line>
			                            <line x1="14" y1="11" x2="14" y2="17"></line>
			                        </svg>
			                    </a>
			                </td>
			            </tr>
			            <tr className="candidates-list">
			                <td className="title">
			                    <div className="thumb">
			                        <img src="dashboard/images/user-2.jpg" className="img-fluid" alt="" />
			                    </div>
			                    <div className="body">
			                        <h5><a href="#">Hertha A. Sullivan</a></h5>
			                        <div className="info">
			                            <span className="designation"><a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-check-square"><polyline points="9 11 12 14 22 4"></polyline><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path></svg>Senior UI / UX Designer</a></span>
			                            <span className="location"><a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-map-pin"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>New Orleans</a></span>
			                        </div>
			                    </div>
			                </td>
			                <td className="status">
			                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-check-circle">
			                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
			                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
			                    </svg>Shortlisted</td>
			                <td className="action">
			                    <a href="#" className="download">
			                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-download">
			                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
			                            <polyline points="7 10 12 15 17 10"></polyline>
			                            <line x1="12" y1="15" x2="12" y2="3"></line>
			                        </svg>
			                    </a>
			                    <a href="#" className="inbox">
			                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-mail">
			                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
			                            <polyline points="22,6 12,13 2,6"></polyline>
			                        </svg>
			                    </a>
			                    <a href="#" className="remove">
			                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-trash-2">
			                            <polyline points="3 6 5 6 21 6"></polyline>
			                            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
			                            <line x1="10" y1="11" x2="10" y2="17"></line>
			                            <line x1="14" y1="11" x2="14" y2="17"></line>
			                        </svg>
			                    </a>
			                </td>
			            </tr>
			            <tr className="candidates-list">
			                <td className="title">
			                    <div className="thumb">
			                        <img src="dashboard/images/user-3.jpg" className="img-fluid" alt="" />
			                    </div>
			                    <div className="body">
			                        <h5><a href="#">David Johnston</a></h5>
			                        <div className="info">
			                            <span className="designation"><a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-check-square"><polyline points="9 11 12 14 22 4"></polyline><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path></svg>Senior UI / UX Designer</a></span>
			                            <span className="location"><a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-map-pin"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>New Orleans</a></span>
			                        </div>
			                    </div>
			                </td>
			                <td className="status">
			                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-check-circle">
			                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
			                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
			                    </svg>Shortlisted</td>
			                <td className="action">
			                    <a href="#" className="download">
			                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-download">
			                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
			                            <polyline points="7 10 12 15 17 10"></polyline>
			                            <line x1="12" y1="15" x2="12" y2="3"></line>
			                        </svg>
			                    </a>
			                    <a href="#" className="inbox">
			                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-mail">
			                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
			                            <polyline points="22,6 12,13 2,6"></polyline>
			                        </svg>
			                    </a>
			                    <a href="#" className="remove">
			                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-trash-2">
			                            <polyline points="3 6 5 6 21 6"></polyline>
			                            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
			                            <line x1="10" y1="11" x2="10" y2="17"></line>
			                            <line x1="14" y1="11" x2="14" y2="17"></line>
			                        </svg>
			                    </a>
			                </td>
			            </tr>
			            <tr className="candidates-list">
			                <td className="title">
			                    <div className="thumb">
			                        <img src="dashboard/images/user-4.jpg" className="img-fluid" alt="" />
			                    </div>
			                    <div className="body">
			                        <h5><a href="#">Robert Hayes</a></h5>
			                        <div className="info">
			                            <span className="designation"><a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-check-square"><polyline points="9 11 12 14 22 4"></polyline><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path></svg>Senior UI / UX Designer</a></span>
			                            <span className="location"><a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-map-pin"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>New Orleans</a></span>
			                        </div>
			                    </div>
			                </td>
			                <td className="status">
			                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-check-circle">
			                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
			                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
			                    </svg>Shortlisted</td>
			                <td className="action">
			                    <a href="#" className="download">
			                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-download">
			                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
			                            <polyline points="7 10 12 15 17 10"></polyline>
			                            <line x1="12" y1="15" x2="12" y2="3"></line>
			                        </svg>
			                    </a>
			                    <a href="#" className="inbox">
			                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-mail">
			                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
			                            <polyline points="22,6 12,13 2,6"></polyline>
			                        </svg>
			                    </a>
			                    <a href="#" className="remove">
			                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-trash-2">
			                            <polyline points="3 6 5 6 21 6"></polyline>
			                            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
			                            <line x1="10" y1="11" x2="10" y2="17"></line>
			                            <line x1="14" y1="11" x2="14" y2="17"></line>
			                        </svg>
			                    </a>
			                </td>
			            </tr>
			        </tbody>
			    </table>
			    <div className="pagination-list text-center">
			        <nav className="navigation pagination">
			            <div className="nav-links">
			                <a className="prev page-numbers" href="#"><i className="fas fa-angle-left"></i></a>
			                <a className="page-numbers" href="#">1</a>
			                <span aria-current="page" className="page-numbers current">2</span>
			                <a className="page-numbers" href="#">3</a>
			                <a className="page-numbers" href="#">4</a>
			                <a className="next page-numbers" href="#"><i className="fas fa-angle-right"></i></a>
			            </div>
			        </nav>
			    </div>
			</div>
        )
    }
}


export default ManageCandidates