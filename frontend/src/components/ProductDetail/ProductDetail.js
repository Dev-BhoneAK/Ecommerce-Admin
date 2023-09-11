import React from "react";
import Summary from "./Summary";
import AdditionalInformation from "./AdditionalInformation";
import ProductListings from "../common/ProductListings";
const ProductDetail = () => {
  return (
    <>
      <Summary />
      <AdditionalInformation />
      <ProductListings title={"Related Products"} />
    </>
  );
};
export default ProductDetail;
