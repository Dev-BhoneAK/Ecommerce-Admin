import React from 'react';
import Slider from "react-slick";

const settings = {
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            },
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
    ],
};

const TopCollection = () => {

    return (
        <section className="p-0 product-vertical overflow-hidden top-collection">
            <div className="full-banner parallax text-center p-left bg-theme">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 m-auto">
                            <div className="title6">
                                <h2 className="font-fraunces text-white">branded collection</h2>
                            </div>
                            <div className="product-para">
                                <p className="text-center text-white">Here is apple branded collection</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="slide-3 no-arrow slick-default-margin full-box">
                                <Slider {...settings}>
                                    <div className="theme-card center-align">
                                        <div className="offer-slider">
                                            <div className="sec-1">
                                                <div className="product-box2">
                                                    <div className="media">
                                                        <a href="/#">
                                                            <img className="img-fluid lazyload" src="/assets/images/products/iphone.jpg" alt="" />
                                                        </a>
                                                        <div className="media-body align-self-center">
                                                            <div className="rating">
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                            </div>
                                                            <a href="/#">
                                                                <h6>Iphone 12</h6>
                                                            </a>
                                                            <h4>$800.00</h4>
                                                            {/*<ul className="color-variant">*/}
                                                            {/*    <li className="bg-light0"></li>*/}
                                                            {/*    <li className="bg-light1"></li>*/}
                                                            {/*    <li className="bg-light2"></li>*/}
                                                            {/*</ul>*/}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="theme-card center-align">
                                        <div className="offer-slider">
                                            <div className="sec-1">
                                                <div className="product-box2">
                                                    <div className="media">
                                                        <a href="/#">
                                                            <img className="img-fluid lazyload" src="/assets/images/products/ipad.jpg" alt="" />
                                                        </a>
                                                        <div className="media-body align-self-center">
                                                            <div className="rating">
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                            </div>
                                                            <a href="/#">
                                                                <h6>Ipad 2022</h6>
                                                            </a>
                                                            <h4>$500.00</h4>
                                                            <ul className="color-variant">
                                                                <li className="bg-light0"></li>
                                                                <li className="bg-light1"></li>
                                                                <li className="bg-light2"></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="theme-card center-align">
                                    <div className="offer-slider">
                                        <div className="sec-1">
                                            <div className="product-box2">
                                                <div className="media">
                                                    <a href="/#">
                                                        <img className="img-fluid lazyload" src="/assets/images/products/watch.jpg" alt="" />
                                                    </a>
                                                    <div className="media-body align-self-center">
                                                        <div className="rating">
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                        </div>
                                                        <a href="/#">
                                                            <h6>Apple Watch</h6>
                                                        </a>
                                                        <h4>$600.00</h4>
                                                        <ul className="color-variant">
                                                            <li className="bg-light0"></li>
                                                            <li className="bg-light1"></li>
                                                            <li className="bg-light2"></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default TopCollection;