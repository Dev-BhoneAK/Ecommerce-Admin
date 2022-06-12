import React from 'react';

const ProductCard = (props) => {

    const createStars = (starCount) => {
        let stars = [];
        const totalStars = 5;
        for (let i = 1; i <= totalStars; i++) {
            i <= starCount ? stars.push(<i className="fa fa-star star-color" />) : stars.push(<i className="fa fa-star unstar-color" />);
        }
        return stars;
    }
    return (
        <div className="product-box product-wrap product-style-3">
            <div className="img-wrapper">
                <div className="front">
                    <a href="/#"><img alt="" src={props.image} className="img-fluid  lazyload bg-img" /></a>
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
                <div className="rating">
                    {createStars(props.starCount)}
                </div>
                <a href="/#">
                    <h6>{props.productName}</h6>
                </a>
                <h4>{props.priceTag}</h4>
                <div className="add-btn">
                    <a href="/#" className="">
                        <i className="ti-shopping-cart" /> add to cart
                    </a>
                </div>
            </div>
        </div>
    )
}
export default ProductCard;