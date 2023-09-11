import React, { useState } from "react";
import MainSlider from "./MainSlider";
import Banner from "./Banner";
import ProductListings from "../common/ProductListings";
import TopCollection from "./TopCollection";
import Blogs from "./Blogs";
import Brands from "./Brands";
const App = () => {
  const [state, setState] = useState("");

  return (
    <>
      <MainSlider />
      <Banner />
      <ProductListings title={"Big Savings"} />
      <ProductListings title={"New Arrivals"} />
      <TopCollection />
      <ProductListings title={"Trending Offers"} />
      <Blogs />
      <Brands />
    </>
  );
};
export default App;
