import React, {useState} from 'react';
import {Outlet} from "react-router-dom";
import Header from "./Header";
import SidebarNav from "./SidebarNav";
import Footer from "./Footer";
import Home from "../../screens/Home";
import List from "../../screens/Category/List";
import Add from "../../screens/Product/Add";

const Dashboard = (props) => {

    const [sidebar, toggleSidebar] = useState(true);

    const handleToggleSidebar = () => {
        toggleSidebar(sidebar => !sidebar);
    }

    return (
        <div className="page-wrapper">
            <Header sidebar={sidebar} handleToggleSidebar={handleToggleSidebar}/>
            <div className="page-body-wrapper">
                <SidebarNav sidebar={sidebar}/>
                <Outlet />
                {/*<div className="page-body">*/}
                {/*    <Breadcrumb breadCrumbArr={props.breadCrumbArr}/>*/}
                {/*    {props.children}*/}
                {/*</div>*/}
            </div>
            <Footer />
        </div>
    )
}
export default Dashboard;