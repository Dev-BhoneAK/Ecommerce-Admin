import React from 'react';

const SidebarNav = () => {

    return (
            <div className="page-sidebar">
                <div className="main-header-left d-none d-lg-block">
                    <div className="logo-wrapper">
                        <a href="index.html">
                            <img className="d-none d-lg-block blur-up lazyloaded"
                                 src="/assets/images/dashboard/multikart-logo.png" alt="" />
                        </a>
                    </div>
                </div>
                <div className="sidebar custom-scrollbar">
                    <a href="#!" className="sidebar-back d-lg-none d-block">
                        <i className="fa fa-times" aria-hidden="true"></i>
                    </a>
                    <div className="sidebar-user">
                        <img className="img-60" src="/assets/images/dashboard/man.jpeg" alt="#" />
                            <div>
                                <h6 className="f-14">JOHN</h6>
                                <p>general manager.</p>
                            </div>
                    </div>
                    <ul className="sidebar-menu">
                        <li>

                            <a className="sidebar-header" href="index.html">
                                {/*<i data-feather="box"></i>*/}
                                <i className="fa fa-home"></i>
                                <span>Dashboard</span>
                            </a>
                        </li>

                        <li>
                            <a className="sidebar-header" href="#!">
                                <i className="fa fa-archive"></i>
                                <span>Products</span>
                                <i className="fa fa-angle-right pull-right"></i>
                            </a>

                            <ul className="sidebar-submenu">

                                <li>
                                    <a href="category-digital.html">
                                        <i className="fa fa-circle"></i>Category
                                    </a>
                                </li>

                                <li>
                                    <a href="category-digitalsub.html">
                                        <i className="fa fa-circle"></i>Sub Category
                                    </a>
                                </li>

                                <li>
                                    <a href="product-listdigital.html">
                                        <i className="fa fa-circle"></i>Product List
                                    </a>
                                </li>

                                <li>
                                    <a href="add-digital-product.html">
                                        <i className="fa fa-circle"></i>Add Product
                                    </a>
                                </li>

                                <li>
                                    <a href="product-review.html">
                                        <i className="fa fa-circle"></i>
                                        <span>product Review</span>
                                    </a>
                                </li>
                            </ul>
                        </li>

                        <li>
                            <a className="sidebar-header" href="#!">
                                <i className="fa fa-shopping-cart"></i>
                                <span>Orders</span>
                                <i className="fa fa-angle-right pull-right"></i>
                            </a>

                            <ul className="sidebar-submenu">
                                <li>
                                    <a href="order-list.html">
                                        <i className="fa fa-circle"></i>
                                        <span>Order List</span>
                                    </a>
                                </li>

                                <li>
                                    <a href="order-tracking.html">
                                        <i className="fa fa-circle"></i>
                                        <span>Order Tracking</span>
                                    </a>
                                </li>

                                <li>
                                    <a href="order-detail.html">
                                        <i className="fa fa-circle"></i>
                                        <span>Order Details</span>
                                    </a>
                                </li>
                            </ul>
                        </li>

                        <li>
                            <a className="sidebar-header" href="#!">
                                <i className="fa fa-money" />
                                <span>Sales</span>
                                <i className="fa fa-angle-right pull-right" />
                            </a>
                            <ul className="sidebar-submenu">
                                <li>
                                    <a href="order.html">
                                        <i className="fa fa-circle" />Orders
                                    </a>
                                </li>
                                <li>
                                    <a href="transactions.html">
                                        <i className="fa fa-circle" />Transactions
                                    </a>
                                </li>
                            </ul>
                        </li>

                        <li>
                            <a className="sidebar-header" href="#!">
                                <i className="fa fa-picture-o"></i>
                                <span>Banners</span>
                                <i className="fa fa-angle-right pull-right"></i>
                            </a>
                            <ul className="sidebar-submenu">
                                <li>
                                    <a href="coupon-list.html">
                                        <i className="fa fa-circle"></i>Banner List
                                    </a>
                                </li>
                                <li>
                                    <a href="coupon-create.html">
                                        <i className="fa fa-circle"></i>Create Banner
                                    </a>
                                </li>
                            </ul>
                        </li>

                        <li>
                            <a className="sidebar-header" href="#!">
                                <i className="fa fa-clipboard" />
                                <span>Pages</span>
                                <i className="fa fa-angle-right pull-right" />
                            </a>
                            <ul className="sidebar-submenu">
                                <li>
                                    <a href="pages-list.html">
                                        <i className="fa fa-circle" />List Page
                                    </a>
                                </li>
                                <li>
                                    <a href="page-create.html">
                                        <i className="fa fa-circle" />Create Page
                                    </a>
                                </li>
                            </ul>
                        </li>

                        <li>
                            <a className="sidebar-header" href="#!">
                                <i className="fa fa-bars" aria-hidden="true" />
                                <span>Menus</span>
                                <i className="fa fa-angle-right pull-right" />
                            </a>
                            <ul className="sidebar-submenu">
                                <li>
                                    <a href="menu-list.html">
                                        <i className="fa fa-circle" />Menu Lists
                                    </a>
                                </li>
                                <li>
                                    <a href="create-menu.html">
                                        <i className="fa fa-circle" />Create Menu
                                    </a>
                                </li>
                            </ul>
                        </li>

                        <li>
                            <a className="sidebar-header" href="#!">
                                <i className="fa fa-user" />
                                <span>Users</span>
                                <i className="fa fa-angle-right pull-right" />
                            </a>
                            <ul className="sidebar-submenu">
                                <li>
                                    <a href="user-list.html">
                                        <i className="fa fa-circle" />User List
                                    </a>
                                </li>
                                <li>
                                    <a href="create-user.html">
                                        <i className="fa fa-circle" />Create User
                                    </a>
                                </li>
                            </ul>
                        </li>

                        <li>
                            <a className="sidebar-header" href="support-ticket.html">
                                <i className="fa fa-life-ring" />
                                <span>Support Ticket</span>
                            </a>
                        </li>

                        <li>
                            <a className="sidebar-header" href="reports.html">
                                <i className="fa fa-line-chart" />
                                <span>Reports</span>
                            </a>
                        </li>

                        <li>
                            <a className="sidebar-header" href="invoice.html">
                                <i className="fa fa-file-text" />
                                <span>Invoice</span></a>
                        </li>
                    </ul>
                </div>
            </div>
    )
}
export default SidebarNav;