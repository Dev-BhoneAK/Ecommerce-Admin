import React from 'react';
import Slider from "react-slick";

const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 6,
    slidesToScroll: 6,
    adaptiveHeight: true,
    responsive: [
        {
            breakpoint: 1399,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 5,
                infinite: true,
            },
        },
        {
            breakpoint: 1199,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 4,
                infinite: true,
            },
        },
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
            },
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            },
        },
    ],
};
const NewArrival = () => {

    return (
        <section className="bag-product ratio_square">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="title-basic">
                            <h2 className="title font-fraunces"><i className="ti-bolt" />New Arrival</h2>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="slide-6-product product-m no-arrow">
                            <Slider {...settings}>
                                <div className="product-box product-wrap product-style-3">
                                    <div className="img-wrapper">
                                        <div className="front">
                                            <a href="/#"><img alt="" src="/assets/images/products/1.jpg" className="img-fluid  lazyload bg-img" /></a>
                                        </div>
                                        <div className="cart-detail"><a href="/#" title="Add to Wishlist"><i
                                            className="ti-heart" aria-hidden="true" /></a>
                                            <a href="#"
                                               data-bs-toggle="modal"
                                               data-bs-target="#quick-view"
                                               title="Quick View">
                                                <i className="ti-search" aria-hidden="true" />
                                            </a>
                                            <a href="/#" title="Compare">
                                                <i className="ti-reload" aria-hidden="true" />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="product-info">
                                        <div className="rating"><i className="fa fa-star" /> <i
                                            className="fa fa-star" /> <i
                                            className="fa fa-star" /> <i className="fa fa-star"></i> <i
                                            className="fa fa-star" />
                                        </div>
                                        <a href="/#">
                                            <h6>Slim Fit Cotton Shirt</h6>
                                        </a>
                                        <h4>$500.00</h4>
                                        <div className="add-btn">
                                            <a href="/#" className="">
                                                <i className="ti-shopping-cart" /> add to cart
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="product-box product-wrap product-style-3">
                                    <div className="img-wrapper">
                                        <div className="front">
                                            <a href="/#"><img alt="" src="/assets/images/products/2.jpg" className="img-fluid  lazyload bg-img" /></a>
                                        </div>
                                        <div className="cart-detail"><a href="/#" title="Add to Wishlist"><i
                                            className="ti-heart" aria-hidden="true" /></a>
                                            <a href="#"
                                               data-bs-toggle="modal"
                                               data-bs-target="#quick-view"
                                               title="Quick View">
                                                <i className="ti-search" aria-hidden="true" />
                                            </a>
                                            <a href="/#" title="Compare">
                                                <i className="ti-reload" aria-hidden="true" />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="product-info">
                                        <div className="rating"><i className="fa fa-star" /> <i
                                            className="fa fa-star" /> <i
                                            className="fa fa-star" /> <i className="fa fa-star"></i> <i
                                            className="fa fa-star" />
                                        </div>
                                        <a href="/#">
                                            <h6>Slim Fit Cotton Shirt</h6>
                                        </a>
                                        <h4>$500.00</h4>
                                        <div className="add-btn">
                                            <a href="/#" className="">
                                                <i className="ti-shopping-cart" /> add to cart
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="product-box product-wrap product-style-3">
                                    <div className="img-wrapper">
                                        <div className="front">
                                            <a href="/#"><img alt="" src="/assets/images/products/3.jpg" className="img-fluid  lazyload bg-img" /></a>
                                        </div>
                                        <div className="cart-detail"><a href="/#" title="Add to Wishlist"><i
                                            className="ti-heart" aria-hidden="true" /></a>
                                            <a href="#"
                                               data-bs-toggle="modal"
                                               data-bs-target="#quick-view"
                                               title="Quick View">
                                                <i className="ti-search" aria-hidden="true" />
                                            </a>
                                            <a href="/#" title="Compare">
                                                <i className="ti-reload" aria-hidden="true" />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="product-info">
                                        <div className="rating"><i className="fa fa-star" /> <i
                                            className="fa fa-star" /> <i
                                            className="fa fa-star" /> <i className="fa fa-star"></i> <i
                                            className="fa fa-star" />
                                        </div>
                                        <a href="/#">
                                            <h6>Slim Fit Cotton Shirt</h6>
                                        </a>
                                        <h4>$500.00</h4>
                                        <div className="add-btn">
                                            <a href="/#" className="">
                                                <i className="ti-shopping-cart" /> add to cart
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="product-box product-wrap product-style-3">
                                    <div className="img-wrapper">
                                        <div className="front">
                                            <a href="/#"><img alt="" src="/assets/images/products/4.jpg" className="img-fluid  lazyload bg-img" /></a>
                                        </div>
                                        <div className="cart-detail"><a href="/#" title="Add to Wishlist"><i
                                            className="ti-heart" aria-hidden="true" /></a>
                                            <a href="#"
                                               data-bs-toggle="modal"
                                               data-bs-target="#quick-view"
                                               title="Quick View">
                                                <i className="ti-search" aria-hidden="true" />
                                            </a>
                                            <a href="/#" title="Compare">
                                                <i className="ti-reload" aria-hidden="true" />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="product-info">
                                        <div className="rating"><i className="fa fa-star" /> <i
                                            className="fa fa-star" /> <i
                                            className="fa fa-star" /> <i className="fa fa-star"></i> <i
                                            className="fa fa-star" />
                                        </div>
                                        <a href="/#">
                                            <h6>Slim Fit Cotton Shirt</h6>
                                        </a>
                                        <h4>$500.00</h4>
                                        <div className="add-btn">
                                            <a href="/#" className="">
                                                <i className="ti-shopping-cart" /> add to cart
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="product-box product-wrap product-style-3">
                                    <div className="img-wrapper">
                                        <div className="front">
                                            <a href="/#"><img alt="" src="/assets/images/products/5.jpg" className="img-fluid  lazyload bg-img" /></a>
                                        </div>
                                        <div className="cart-detail"><a href="/#" title="Add to Wishlist"><i
                                            className="ti-heart" aria-hidden="true" /></a>
                                            <a href="#"
                                               data-bs-toggle="modal"
                                               data-bs-target="#quick-view"
                                               title="Quick View">
                                                <i className="ti-search" aria-hidden="true" />
                                            </a>
                                            <a href="/#" title="Compare">
                                                <i className="ti-reload" aria-hidden="true" />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="product-info">
                                        <div className="rating"><i className="fa fa-star" /> <i
                                            className="fa fa-star" /> <i
                                            className="fa fa-star" /> <i className="fa fa-star"></i> <i
                                            className="fa fa-star" />
                                        </div>
                                        <a href="/#">
                                            <h6>Slim Fit Cotton Shirt</h6>
                                        </a>
                                        <h4>$500.00</h4>
                                        <div className="add-btn">
                                            <a href="/#" className="">
                                                <i className="ti-shopping-cart" /> add to cart
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="product-box product-wrap product-style-3">
                                    <div className="img-wrapper">
                                        <div className="front">
                                            <a href="/#"><img alt="" src="/assets/images/products/6.jpg" className="img-fluid  lazyload bg-img" /></a>
                                        </div>
                                        <div className="cart-detail"><a href="/#" title="Add to Wishlist"><i
                                            className="ti-heart" aria-hidden="true" /></a>
                                            <a href="#"
                                               data-bs-toggle="modal"
                                               data-bs-target="#quick-view"
                                               title="Quick View">
                                                <i className="ti-search" aria-hidden="true" />
                                            </a>
                                            <a href="/#" title="Compare">
                                                <i className="ti-reload" aria-hidden="true" />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="product-info">
                                        <div className="rating"><i className="fa fa-star" /> <i
                                            className="fa fa-star" /> <i
                                            className="fa fa-star" /> <i className="fa fa-star"></i> <i
                                            className="fa fa-star" />
                                        </div>
                                        <a href="/#">
                                            <h6>Slim Fit Cotton Shirt</h6>
                                        </a>
                                        <h4>$500.00</h4>
                                        <div className="add-btn">
                                            <a href="/#" className="">
                                                <i className="ti-shopping-cart" /> add to cart
                                            </a>
                                        </div>
                                    </div>
                                </div>

                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default NewArrival;