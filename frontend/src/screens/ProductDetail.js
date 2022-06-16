import React from 'react';
import Header from "../components/common/Header/Header";
import Info from "../components/product-detail/Info";
import Specification from "../components/product-detail/Specification";
import ProductListings from "../components/home/ProductListings";
import Footer from "../components/common/Footer/Footer";
const ProductDetail = () => {

    return (
        <>
            <Header />
            <Info />
            <Specification />
            <ProductListings title={"Related Products"}/>
            <Footer />
        </>
    )
}
export default ProductDetail;