import React from 'react';

const UserActionMenu = () => {

    return (
        <div className="menu-right pull-right">
            <nav className="text-start">
                <div className="toggle-nav"><i className="fa fa-bars sidebar-bar" /></div>
            </nav>
            <div className="top-header d-block">
                <ul className="header-dropdown">
                    <li className="mobile-wishlist"><a href="#"><img
                        src="/assets/icons/white-icon/heart.png" alt="" /> </a></li>
                    <li className="onhover-dropdown mobile-account">
                        <a href="#">
                            <img src="/assets/icons/white-icon/user.png" alt="" />
                        </a>
                    </li>
                </ul>
            </div>
            <div>
                <div className="icon-nav d-none d-sm-block">
                    <ul>
                        <li className="onhover-div d-xl-none d-inline-block mobile-search">
                            <div><img src="/assets/icons/search.png"
                                      className="img-fluid blur-up lazyload" alt="" /> <i
                                className="ti-search" /></div>
                        </li>
                        <li className="onhover-div mobile-setting">
                            <div><img src="/assets/icons/setting.png"
                                      className="img-fluid blur-up lazyload" alt="" /> <i
                                className="ti-settings" /></div>
                        </li>
                        <li className="onhover-div mobile-cart">
                            <div><img src="/assets/icons/cart.png"
                                      className="img-fluid blur-up lazyload" alt="" /> <i
                                className="ti-shopping-cart" /></div>
                            <span className="cart_qty_cls">2</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default UserActionMenu;