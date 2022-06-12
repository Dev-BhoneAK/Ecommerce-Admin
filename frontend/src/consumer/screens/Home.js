import React, {useState} from 'react';
import Header from "../components/common/Header/Header";
import MainSlider from "../components/home/MainSlider";
import Banner from "../components/home/Banner";
import ProductListings from "../components/home/ProductListings";
import TopCollection from "../components/home/TopCollection";
import Blogs from "../components/home/Blogs";
import Brands from "../components/home/Brands";
import Footer from "../components/common/Footer/Footer";
const App = () => {

    const [state, setState] = useState('');

    return (
        <>
            <Header />
            <MainSlider />
            <Banner />
            <ProductListings title={"Big Savings"}/>
            <ProductListings title={"New Arrivals"}/>
            <TopCollection />
            <ProductListings title={"Trending Offers"}/>
            <Blogs />
            <Brands />
            <Footer />
        </>
    )
}
export default App;