import React from 'react';

const Header = ({sidebar, handleToggleSidebar}) => {

    return (
        <div className={`page-main-header ${!sidebar && 'open'}`}>
            <div className="main-header-right row">
                <div className="main-header-left d-lg-none w-auto">
                    <div className="logo-wrapper">
                        <a href="index.html">
                            <img className="blur-up lazyloaded d-block d-lg-none"
                                 src="/assets/images/dashboard/multikart-logo-black.png" alt="" />
                        </a>
                    </div>
                </div>
                <div className="mobile-sidebar w-auto">
                    <div className="media-body text-end switch-sm">
                        <label className="switch">
                            <a href="#!" onClick={handleToggleSidebar}>
                                <i id="sidebar-toggle" className="fa fa-align-left" />
                            </a>
                        </label>
                    </div>
                </div>
                <div className="nav-right col">
                    <ul className="nav-menus">
                        <li>
                            <a className="text-dark" href="#!" >
                                <i className="fa fa-arrows-alt"></i>
                            </a>
                        </li>
                        <li className="onhover-dropdown">
                            <i className="fa fa-bell" />
                            {/*<span className="badge badge-pill badge-primary pull-right notification-badge">3</span>*/}
                            <span className="dot"></span>
                            <ul className="notification-dropdown onhover-show-div p-0">
                                <li>Notification <span className="badge badge-pill badge-primary pull-right">3</span>
                                </li>
                                <li>
                                    <div className="media">
                                        <div className="media-body">
                                            <h6 className="mt-0">
                                                <span>
                                                    <i className="fa fa-bag-shopping shopping-color" />
                                                </span>
                                                Your order ready for Ship..!
                                            </h6>
                                            <p className="mb-0">Lorem ipsum dolor sit amet, consectetuer.</p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="media">
                                        <div className="media-body">
                                            <h6 className="mt-0 txt-success">
                                                <span>
                                                    <i className="fa fa-download download-color font-success" />
                                                </span>Download Complete
                                            </h6>
                                            <p className="mb-0">Lorem ipsum dolor sit amet, consectetuer.</p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="media">
                                        <div className="media-body">
                                            <h6 className="mt-0 txt-danger">
                                                <span>
                                                    <i className="fa fa-circle-exclamation alert-color font-danger" />
                                                </span>250 MB trash files
                                            </h6>
                                            <p className="mb-0">Lorem ipsum dolor sit amet, consectetuer.</p>
                                        </div>
                                    </div>
                                </li>
                                <li className="txt-dark"><a href="#!">All</a> notification</li>
                            </ul>
                        </li>
                        <li>
                            <a href="#!">
                                <i className="fa fa-comment"></i>
                                <span className="dot"></span>
                            </a>
                        </li>
                        <li className="onhover-dropdown">
                            <div className="media align-items-center">
                                <img className="align-self-center pull-right img-50 blur-up lazyloaded"
                                     src="/assets/images/dashboard/man.jpeg" alt="header-user" />
                                    <div className="dotted-animation">
                                        <span className="animate-circle"></span>
                                        <span className="main-circle"></span>
                                    </div>
                            </div>
                            <ul className="profile-dropdown onhover-show-div p-20 profile-dropdown-hover">
                                <li>
                                    <a href="#!">
                                        <i className="fa fa-user" />Edit Profile
                                    </a>
                                </li>
                                <li>
                                    <a href="#!">
                                        <i className="fa fa-envelope" />Inbox
                                    </a>
                                </li>
                                <li>
                                    <a href="#!">
                                        <i className="fa fa-lock-keyhole" />Lock Screen
                                    </a>
                                </li>
                                <li>
                                    <a href="#!">
                                        <i className="fa fa-sliders-up" />Settings
                                    </a>
                                </li>
                                <li>
                                    <a href="#!">
                                        <i className="fa fa-right-from-bracket"></i>Logout
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <div className="d-lg-none mobile-toggle pull-right">
                        <i data-feather="more-horizontal" />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Header;