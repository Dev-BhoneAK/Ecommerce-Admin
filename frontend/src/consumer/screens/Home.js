import React, {useState} from 'react';
import Header from "../components/common/Header/Header";
import MainSlider from "../components/home/MainSlider";
import Banner from "../components/home/Banner";
import NewArrival from "../components/home/NewArrival";
import Test from "../components/home/Test";
import Popular from "../components/home/Popular";
const App = () => {

    const [state, setState] = useState('');

    return (
        <>
            <Header />
            <MainSlider />
            <Banner />
            {/*<Test />*/}
            <NewArrival />
        </>
    )
}
export default App;