import React, {useState} from 'react';
import Slider from "react-slick";
import CallToActionPanel from "./CallToActionPanel";
const Info = () => {

    const [sliderNav, setSliderNav] = useState();
    const [productNav, setProductNav] = useState();
    const leftSlick = {
        vertical: true,
        verticalSwiping: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: productNav,
        arrows: true,
        infinite: false, // when infinite vertical scroll not work sometimes
        dots: false,
        centerMode: false,
        focusOnSelect: true,
        responsive: [
            // {
            //     breakpoint: 1024,
            //     settings: {
            //         slidesToShow: 3,
            //         slidesToScroll: 3,
            //         infinite: true,
            //         dots: true
            //     }
            // },
            {
                breakpoint: 600,
                settings: {
                    vertical: false,
                    verticalSwiping: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: true,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    vertical: false,
                    verticalSwiping: false,
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    arrows: true,
                }
            }
        ]
    }

    const rightSlick = {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        asNavFor: sliderNav,
    }
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
                                            {...leftSlick}
                                            ref={(slider2) => setSliderNav(slider2)}
                                        >
                                        <div><img src="/assets/images/products/detail/1.jpeg" alt=""
                                                  className="img-fluid lazyload"/></div>
                                        <div><img src="/assets/images/products/detail/2.jpeg" alt=""
                                                  className="img-fluid lazyload"/></div>
                                        <div><img src="/assets/images/products/detail/3.jpeg" alt=""
                                                  className="img-fluid lazyload"/></div>
                                        <div><img src="/assets/images/products/detail/4.jpeg" alt=""
                                                  className="img-fluid lazyload"/></div>
                                        </Slider>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-10 col-xs-12 order-up">
                            <div className="product-right-slick">
                                <Slider {...rightSlick} ref={(slider1) => setProductNav(slider1)}>
                                    <div><img src="/assets/images/products/detail/1.jpeg" alt=""
                                              className="img-fluid lazyload image_zoom_cls-0"/></div>
                                    <div><img src="/assets/images/products/detail/2.jpeg" alt=""
                                              className="img-fluid lazyload image_zoom_cls-1"/></div>
                                    <div><img src="/assets/images/products/detail/3.jpeg" alt=""
                                              className="img-fluid lazyload image_zoom_cls-2"/></div>
                                    <div><img src="/assets/images/products/detail/4.jpeg" alt=""
                                              className="img-fluid lazyload image_zoom_cls-3"/></div>
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
                        <CallToActionPanel />
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Info;