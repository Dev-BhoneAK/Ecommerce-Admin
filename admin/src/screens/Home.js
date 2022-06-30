import React from 'react';
import Breadcrumb from "../components/common/Breadcrumb";

const Home = () => {
    const breadCrumbArr = ['Home'];
    return (
        <div className="page-body">
            <Breadcrumb breadCrumbArr={breadCrumbArr}/>
            <div className="container-fluid">
            </div>
        </div>
    )
}
export default Home;