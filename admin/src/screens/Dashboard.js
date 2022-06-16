import React from 'react';
import Header from "../components/common/Header";
import SidebarNav from "../components/common/SidebarNav";
const Dashboard = () => {

    return (
        <div class="page-wrapper">
            <Header />
            <div className="page-body-wrapper">
                <SidebarNav />
            </div>
        </div>
    )
}
export default Dashboard;