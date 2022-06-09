import React, {useState} from 'react';
import Search from "./Search";
import UserActionMenu from "./UserActionMenu";

const Main = () => {

    const [state, setState] = useState('');

    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-12">
                    <div className="main-menu">
                        <div className="menu-left">
                            <div className="navbar d-block d-xl-none">
                                <a href="#">
                                    <div className="bar-style" id="toggle-sidebar-res"><i
                                        className="fa fa-bars sidebar-bar" aria-hidden="true" />
                                    </div>
                                </a>
                            </div>
                            <div className="brand-logo">
                                <a href="#"><img src="/assets/icons/logo.png"
                                                 className="img-fluid lazyload" alt="" /></a>
                            </div>
                        </div>
                        <Search />
                        <UserActionMenu />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Main;