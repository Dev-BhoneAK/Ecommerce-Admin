import React, {useState} from 'react';
import Header from "./Header";
import SidebarNav from "./SidebarNav";
import Footer from "./Footer";

const Dashboard = (props) => {

    const [sidebar, toggleSidebar] = useState(true);

    const handleToggleSidebar = () => {
        console.log('hi');
        toggleSidebar(sidebar => !sidebar);
    }

    return (
        <div className="page-wrapper">
            <Header sidebar={sidebar} handleToggleSidebar={handleToggleSidebar}/>
            <div className="page-body-wrapper">
                <SidebarNav />
                <div className="page-body">
                    {props.children}
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default Dashboard;