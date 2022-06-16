import React from 'react';

const Footer = () => {

    return (
        <footer className="dark-footer footer-style-1 footer-theme-color">
            <section className="section-b-space darken-layout">
                <div className="container">
                    <div className="row footer-theme partition-f">
                        <div className="col-lg-4 col-md-6 sub-title">
                            <div className="footer-title footer-mobile-title">
                                <h4>about</h4>
                            </div>
                            <div className="footer-contant">
                                <div className="footer-logo"><img src="/assets/icons/logo.png" className="img-fluid lazyload" alt="" /></div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt
                                    ut labore</p>
                                <ul className="contact-list">
                                    <li><i className="fa fa-map-marker"></i>Multikart Demo Store, Demo store India
                                        345-659
                                    </li>
                                    <li><i className="fa fa-phone"></i>Call Us: 123-456-7898</li>
                                    <li><i className="fa fa-envelope"></i>Email Us: <a href="#">Support@Fiot.com</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6">
                            <div className="sub-title">
                                <div className="footer-title">
                                    <h4>my account</h4>
                                </div>
                                <div className="footer-contant">
                                    <ul>
                                        <li><a href="#">mens</a></li>
                                        <li><a href="#">womens</a></li>
                                        <li><a href="#">clothing</a></li>
                                        <li><a href="#">accessories</a></li>
                                        <li><a href="#">featured</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6">
                            <div className="sub-title">
                                <div className="footer-title">
                                    <h4>information</h4>
                                </div>
                                <div className="footer-contant">
                                    <ul>
                                        <li><a href="#">shipping & return</a></li>
                                        <li><a href="#">secure shopping</a></li>
                                        <li><a href="#">gallary</a></li>
                                        <li><a href="#">affiliates</a></li>
                                        <li><a href="#">contacts</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="sub-title">
                                <div className="footer-title">
                                    <h4>follow us</h4>
                                </div>
                                <div className="footer-contant">
                                    <p className="mb-cls-content">Lorem ipsum dolor sit amet, consectetur adipiscing
                                        elit, sed
                                        do eiusmod tempor incididunt
                                        ut labore</p>
                                    <form className="form-inline">
                                        <div className="form-group me-sm-3 mb-2">
                                            <label htmlFor="inputPassword2" className="sr-only">Password</label>
                                            <input type="password" className="form-control" id="inputPassword2"
                                                   placeholder="Enter Your Email" />
                                        </div>
                                        <button type="submit" className="btn btn-solid mb-2">subscribe</button>
                                    </form>
                                    <div className="footer-social">
                                        <ul>
                                            <li><a href="#"><i className="fa fa-facebook-f"></i></a></li>
                                            <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
                                            <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                            <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                                            <li><a href="#"><i className="fa fa-rss" aria-hidden="true"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="sub-footer dark-subfooter">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="footer-end">
                                <p className={"footer-text"}><i className="fa fa-copyright" aria-hidden="true"></i> 2022 BAK. All rights reserved.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default Footer;