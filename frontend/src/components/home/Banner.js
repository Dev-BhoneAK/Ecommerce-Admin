import React from 'react';

const Banner = () => {

    return (
        <section className="banner-goggles banner-padding ratio2_1">
            <div className="container">
                <div className="row partition3">
                    <div className="col-md-4">
                        <a href="#">
                            <div className="collection-banner">
                                <div className="img-part">
                                    <img src="/assets/images/banner/1.jpg"
                                         className="img-fluid lazyload bg-img" alt="" />
                                </div>
                                <div className="contain-banner banner-3">
                                    <div>
                                        <h4>10% off</h4>
                                        <h2>speaker</h2>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="col-md-4">
                        <a href="#">
                            <div className="collection-banner">
                                <div className="img-part">
                                    <img src="/assets/images/banner/2.jpg"
                                         className="img-fluid lazyload bg-img" alt="" />
                                </div>
                                <div className="contain-banner banner-3">
                                    <div>
                                        <h4>10% off</h4>
                                        <h2>earplug</h2>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="col-md-4">
                        <a href="#">
                            <div className="collection-banner">
                                <div className="img-part">
                                    <img src="/assets/images/banner/3.jpg"
                                         className="img-fluid lazyload bg-img" alt="" />
                                </div>
                                <div className="contain-banner banner-3">
                                    <div>
                                        <h4>50% off</h4>
                                        <h2>best deal</h2>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Banner;