import React, {useState} from 'react';
import Slider from "react-slick";

const Info = () => {

    const [sliderNav, setSliderNav] = useState();
    const [productNav, setProductNav] = useState();

    return (
        <section>
            <div className="collection-wrapper">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-1 col-sm-2 col-xs-12">
                            <div className="row">
                                <div className="col-12 p-0">
                                    <div className="slider-right-nav">
                                        <Slider
                                            asNavFor={productNav}
                                            ref={(slider2) => setSliderNav(slider2)}
                                            slidesToShow={3}
                                            swipeToSlide={true}
                                            focusOnSelect={true}
                                        >
                                        <div><img src="/assets/images/products/detail/1.jpg" alt=""
                                                  className="img-fluid blur-up lazyload"/></div>
                                        <div><img src="/assets/images/products/detail/2.jpg" alt=""
                                                  className="img-fluid blur-up lazyload"/></div>
                                        <div><img src="/assets/images/products/detail/3.jpg" alt=""
                                                  className="img-fluid blur-up lazyload"/></div>
                                        <div><img src="/assets/images/products/detail/4.jpg" alt=""
                                                  className="img-fluid blur-up lazyload"/></div>
                                        </Slider>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-10 col-xs-12 order-up">
                            <div className="product-right-slick">
                                <Slider asNavFor={sliderNav} ref={(slider1) => setProductNav(slider1)}>
                                    <div><img src="/assets/images/products/detail/1.jpg" alt=""
                                              className="img-fluid blur-up lazyload image_zoom_cls-0"/></div>
                                    <div><img src="/assets/images/products/detail/2.jpg" alt=""
                                              className="img-fluid blur-up lazyload image_zoom_cls-1"/></div>
                                    <div><img src="/assets/images/products/detail/3.jpg" alt=""
                                              className="img-fluid blur-up lazyload image_zoom_cls-2"/></div>
                                    <div><img src="/assets/images/products/detail/4.jpg" alt=""
                                              className="img-fluid blur-up lazyload image_zoom_cls-3"/></div>
                                </Slider>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="product-right product-description-box">
                                <div className="product-count">
                                    <ul>
                                        <li>
                                            <img src="/assets/images/fire.gif" className="img-fluid" alt="image" />
                                                <span className="p-counter">37</span>
                                                <span className="lang">orders in last 24 hours</span>
                                        </li>
                                        <li>
                                            <img src="/assets/images/person.gif" className="img-fluid user_img"
                                                 alt="image" />
                                                <span className="p-counter">44</span>
                                                <span className="lang">active view this</span>
                                        </li>
                                    </ul>
                                </div>
                                <h2>Women Pink Shirt</h2>
                                <div className="border-product">
                                    <h6 className="product-title">product details</h6>
                                    <p>The Model is wearing a white blouse from our stylist's collection, see the image
                                        for
                                        a mock-up of what the actual blouse would look like.</p>
                                </div>
                                <div className="single-product-tables border-product detail-section">
                                    <table>
                                        <tbody>
                                        <tr>
                                            <td>Febric:</td>
                                            <td>Chiffon</td>
                                        </tr>
                                        <tr>
                                            <td>Color:</td>
                                            <td>Red</td>
                                        </tr>
                                        <tr>
                                            <td>Material:</td>
                                            <td>Crepe printed</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="border-product">
                                    <h6 className="product-title">share it</h6>
                                    <div className="product-icon">
                                        <ul className="product-social">
                                            <li><a href="#"><i className="fa fa-facebook-f"></i></a></li>
                                            <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
                                            <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                            <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                                            <li><a href="#"><i className="fa fa-rss"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="product-right product-form-box">
                                <h4>
                                    <del>$459.00</del>
                                    <span>55% off</span></h4>
                                <h3>$32.96</h3>
                                <ul className="color-variant">
                                    <li className="bg-light0 active"></li>
                                    <li className="bg-light1"></li>
                                    <li className="bg-light2"></li>
                                </ul>
                                <div id="selectSize" className="addeffect-section product-description border-product">
                                    <h6 className="product-title">select size</h6>
                                    <div className="size-box">
                                        <ul>
                                            <li><a href="javascript:void(0)">s</a></li>
                                            <li><a href="javascript:void(0)">m</a></li>
                                            <li><a href="javascript:void(0)">l</a></li>
                                            <li><a href="javascript:void(0)">xl</a></li>
                                        </ul>
                                    </div>
                                    <h6 className="product-title">quantity</h6>
                                    <div className="qty-box">
                                        <div className="input-group"><span className="input-group-prepend"><button
                                            type="button"
                                            className="btn quantity-left-minus" data-type="minus" data-field=""><i
                                            className="ti-angle-left"></i></button> </span>
                                            <input type="text" name="quantity" className="form-control input-number"
                                                   value="1" />
                                        <span className="input-group-prepend">
                                            <button type="button" className="btn quantity-right-plus" data-type="plus" data-field="">
                                                <i className="ti-angle-right" />
                                            </button>
                                        </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="product-buttons"><a href="javascript:void(0)" id="cartEffect"
                                                                    className="btn btn-solid hover-solid btn-animation">add
                                    to cart</a> <a href="#"
                                                   className="btn btn-solid">wishlist</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Info;