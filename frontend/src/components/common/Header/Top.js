import React, {useState} from 'react';

const Top = () => {

    return (
        <div className="top-header top-header-theme">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="header-contact">
                            <ul>
                                <li>Welcome to Our store Multikart</li>
                                <li><i className="fa fa-phone" aria-hidden="true" />Call Us: 123 - 456 - 7890</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="header-contact text-end">
                            <ul>
                                <li><i className="fa fa-truck" aria-hidden="true" />Track Order</li>
                                <li className="pe-0"><i className="fa fa-gift" aria-hidden="true" />Gift Cards
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Top;