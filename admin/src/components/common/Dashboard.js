import React, {useState} from 'react';
import {Outlet} from "react-router-dom";
import Header from "./Header";
import SidebarNav from "./SidebarNav";
import Footer from "./Footer";

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
            </div>
            <Footer />
        </div>
    )
}
export default Dashboard;