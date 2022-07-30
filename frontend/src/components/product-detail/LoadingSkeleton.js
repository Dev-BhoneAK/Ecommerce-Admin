import React from 'react';
import Header from "../common/Header/Header";
const LoadingSkeleton = () => {
    return (
        <div className="loader_skeleton">
            <Header />
            <section className="section-b-space">
                <div className="collection-wrapper product-page">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="container-fluid">
                                    <div className="row">
                                        <div className="col-lg-1 col-sm-2 col-xs-12">
                                            <div className="row vertical-product">
                                                <div className="col-sm-12 col-4">
                                                    <div className="sm-product"></div>
                                                </div>
                                                <div className="col-sm-12 col-4">
                                                    <div className="sm-product"></div>
                                                </div>
                                                <div className="col-sm-12 col-4">
                                                    <div className="sm-product"></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-sm-10 col-xs-12 order-up">
                                            <div className="main-product sm-img"></div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="product-right">
                                                <h2></h2>
                                                <h4></h4>
                                                <h3></h3>
                                                <ul>
                                                    <li></li>
                                                    <li></li>
                                                    <li></li>
                                                </ul>
                                                <div className="btn-group">
                                                    <div className="btn-ldr"></div>
                                                    <div className="btn-ldr"></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="product-right product-form-box">
                                                <h2></h2>
                                                <h4></h4>
                                                <h3></h3>
                                                <ul>
                                                    <li></li>
                                                    <li></li>
                                                    <li></li>
                                                </ul>
                                                <div className="btn-group">
                                                    <div className="btn-ldr"></div>
                                                    <div className="btn-ldr"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <section className="tab-product m-0">
                                    <div className="row">
                                        <div className="col-sm-12 col-lg-12">
                                            <ul>
                                                <li></li>
                                                <li></li>
                                                <li></li>
                                                <li></li>
                                            </ul>
                                            <p></p>
                                            <p></p>
                                            <p></p>
                                            <p></p>
                                            <p></p>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default LoadingSkeleton;