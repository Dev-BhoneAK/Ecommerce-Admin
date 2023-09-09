import React from "react";
import { Link } from "react-router-dom";

const ProductCard = (props) => {
  const createStars = (starCount) => {
    let stars = [];
    const totalStars = 5;
    for (let i = 1; i <= totalStars; i++) {
      i <= starCount
        ? stars.push(<i className="fa fa-star star-color" key={i} />)
        : stars.push(<i className="fa fa-star unstar-color" key={i} />);
    }
    return stars;
  };
  return (
    <div className="product-box product-wrap product-style-3">
      <div className="img-wrapper">
        <div className="front">
          <Link to={`/product/1`}>
            <img
              alt=""
              src={props.image}
              className="img-fluid lazyload bg-img"
            />
          </Link>
        </div>
        <div className="cart-detail">
          <a href="/#" title="Add to Wishlist">
            <i class="fa-regular fa-heart" aria-hidden="true"></i>
          </a>
          <a
            href="#"
            data-bs-toggle="modal"
            data-bs-target="#quick-view"
            title="Quick View"
          >
            <i class="fa-solid fa-magnifying-glass" aria-hidden="true" />
          </a>
        </div>
      </div>
      <div className="product-info">
        <div className="rating">{createStars(props.starCount)}</div>
        <a href="/#">
          <h6>{props.productName}</h6>
        </a>
        <h4>{props.priceTag}</h4>
        <div className="add-btn">
          <a href="/#" className="">
            <i class="fa-solid fa-cart-shopping" />
            add to cart
          </a>
        </div>
      </div>
    </div>
  );
};
export default ProductCard;
