import React, {useState} from 'react';
import {Link} from "react-router-dom";
import CategoryMenu from "./CategoryMenu";

const Bottom = () => {

    const [state, setState] = useState('');

    return (
        <div className="bottom-part">
            <div className="container">
                <div className="row">
                    <CategoryMenu />
                    <div className="col-xxl-6 col-xl-9">
                        <div className="main-nav-center">
                            <nav className="text-start">
                                <ul className="sm pixelstrap sm-horizontal">
                                    <li>
                                        <div className="mobile-back text-end">Back<i
                                            className="fa fa-angle-right ps-2"
                                            aria-hidden="true" /></div>
                                    </li>
                                    <li><Link to="/" href="#">Home</Link></li>
                                    <li><a href="#">Brand<span className="sub-arrow"></span></a></li>
                                    <li><a href="#">Collection<span className="sub-arrow"></span></a></li>
                                    <li><a href="#">product</a></li>
                                    <li><a href="#">Blogs<span className="sub-arrow"></span></a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Bottom;