import { useState } from "react";
import Slider from "react-slick";

const Gallery = () => {
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
      {
        breakpoint: 600,
        settings: {
          vertical: false,
          verticalSwiping: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          vertical: false,
          verticalSwiping: false,
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };

  const rightSlick = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    asNavFor: sliderNav,
  };
  return (
    <>
      <div className="col-lg-1 col-sm-2 col-xs-12">
        <div className="row">
          <div className="col-12 p-0">
            <div className="slider-right-nav">
              <Slider {...leftSlick} ref={(slider2) => setSliderNav(slider2)}>
                <div>
                  <img
                    src="/assets/images/products/detail/1.png"
                    alt=""
                    className="img-fluid lazyload"
                  />
                </div>
                <div>
                  <img
                    src="/assets/images/products/detail/2.png"
                    alt=""
                    className="img-fluid lazyload"
                  />
                </div>
                <div>
                  <img
                    src="/assets/images/products/detail/3.png"
                    alt=""
                    className="img-fluid lazyload"
                  />
                </div>
                <div>
                  <img
                    src="/assets/images/products/detail/4.png"
                    alt=""
                    className="img-fluid lazyload"
                  />
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-sm-10 col-xs-12 order-up">
        <div className="product-right-slick">
          <Slider {...rightSlick} ref={(slider1) => setProductNav(slider1)}>
            <div>
              <img
                src="/assets/images/products/detail/1.png"
                alt=""
                className="img-fluid lazyload image_zoom_cls-0"
              />
            </div>
            <div>
              <img
                src="/assets/images/products/detail/2.png"
                alt=""
                className="img-fluid lazyload image_zoom_cls-1"
              />
            </div>
            <div>
              <img
                src="/assets/images/products/detail/3.png"
                alt=""
                className="img-fluid lazyload image_zoom_cls-2"
              />
            </div>
            <div>
              <img
                src="/assets/images/products/detail/4.png"
                alt=""
                className="img-fluid lazyload image_zoom_cls-3"
              />
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Gallery;
