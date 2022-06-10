import React, {useState} from 'react';
import Header from "../components/common/Header/Header";
import MainSlider from "../components/home/MainSlider";
const App = () => {

    const [state, setState] = useState('');

    return (
        <>
            <Header />
            <MainSlider />
        </>
    )
}
export default App;