import React from 'react';
import Info from "../components/product-detail/Info";
import Specification from "../components/product-detail/Specification";
import ProductListings from "../components/home/ProductListings";
const ProductDetail = () => {

    return (
        <>
            <Info />
            <Specification />
            <ProductListings title={"Related Products"}/>
        </>
    )
}
export default ProductDetail;