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
}

const Blogs = () => {
    return (
        <section className="blog ratio2_3 gym-blog section-b-space overflow-hidden">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="slide-3 no-arrow slick-default-margin">
                            <Slider {...settings}>
                                <div className="col-md-12">
                                    <a href="#">
                                        <div className="classic-effect">
                                            <div>
                                                <img alt="" src="/assets/images/blogs/1.jpg" className="img-fluid lazyload bg-img" />
                                            </div>
                                        </div>
                                    </a>
                                    <div className="blog-details">
                                        <h4>25 January 2018</h4>
                                        <a href="#">
                                            <p>Lorem ipsum dolor sit consectetur adipiscing elit,</p>
                                        </a>
                                        <h6>by: John Dio , 2 Comment</h6>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <a href="#">
                                        <div className="classic-effect">
                                            <div>
                                                <img alt="" src="../assets/images/blogs/2.jpg"
                                                     className="img-fluid lazyload bg-img" />
                                            </div>
                                        </div>
                                    </a>
                                    <div className="blog-details">
                                        <h4>25 January 2018</h4>
                                        <a href="#">
                                            <p>Lorem ipsum dolor sit consectetur adipiscing elit,</p>
                                        </a>
                                        <h6>by: John Dio , 2 Comment</h6>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <a href="#">
                                        <div className="classic-effect">
                                            <div>
                                                <img alt="" src="../assets/images/blogs/3.jpg"
                                                     className="img-fluid lazyload bg-img" />
                                            </div>
                                        </div>
                                    </a>
                                    <div className="blog-details">
                                        <h4>25 January 2018</h4>
                                        <a href="#">
                                            <p>Lorem ipsum dolor sit consectetur adipiscing elit,</p>
                                        </a>
                                        <h6>by: John Dio , 2 Comment</h6>
                                    </div>
                                </div>
                                {/*<div className="col-md-12">*/}
                                {/*    <a href="#">*/}
                                {/*        <div className="classic-effect">*/}
                                {/*            <div>*/}
                                {/*                <img alt="" src="../assets/images/blog/4.jpg"*/}
                                {/*                     className="img-fluid lazyload bg-img" />*/}
                                {/*            </div>*/}
                                {/*        </div>*/}
                                {/*    </a>*/}
                                {/*    <div className="blog-details">*/}
                                {/*        <h4>25 January 2018</h4>*/}
                                {/*        <a href="#">*/}
                                {/*            <p>Lorem ipsum dolor sit consectetur adipiscing elit,</p>*/}
                                {/*        </a>*/}
                                {/*        <h6>by: John Dio , 2 Comment</h6>*/}
                                {/*    </div>*/}
                                {/*</div>*/}
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Blogs;