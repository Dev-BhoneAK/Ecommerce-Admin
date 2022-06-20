import React, {useState} from 'react';
import Header from "./Header";
import SidebarNav from "./SidebarNav";
import Breadcrumb from "./Breadcrumb";
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
                <div className="page-body">
                    <Breadcrumb breadCrumbArr={props.breadCrumbArr}/>
                    {props.children}
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default Dashboard;