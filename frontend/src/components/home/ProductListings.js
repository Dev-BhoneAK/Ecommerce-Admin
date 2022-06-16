import React from 'react';
import Slider from "react-slick";
import ProductCard from "./ProductCard";

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
const ProductListings = ({title}) => {

    return (
        <section className="bag-product ratio_square">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="title-basic">
                            <h2 className="title font-fraunces"><i className="ti-bolt" />{title}</h2>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="slide-6-product product-m no-arrow">
                            <Slider {...settings}>
                                <ProductCard image={"/assets/images/products/1.jpg"} starCount={"3"} productName={"Slim Fit Cotton Shirt"} priceTag={"$500.00"}/>
                                <ProductCard image={"/assets/images/products/2.jpg"} starCount={"4"} productName={"Slim Fit Cotton Shirt"} priceTag={"$500.00"}/>
                                <ProductCard image={"/assets/images/products/3.jpg"} starCount={"5"} productName={"Slim Fit Cotton Shirt"} priceTag={"$500.00"}/>
                                <ProductCard image={"/assets/images/products/4.jpg"} starCount={"2"} productName={"Slim Fit Cotton Shirt"} priceTag={"$500.00"}/>
                                <ProductCard image={"/assets/images/products/5.jpg"} starCount={"1"} productName={"Slim Fit Cotton Shirt"} priceTag={"$500.00"}/>
                                <ProductCard image={"/assets/images/products/6.jpg"} starCount={"3"} productName={"Slim Fit Cotton Shirt"} priceTag={"$500.00"}/>
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default ProductListings;