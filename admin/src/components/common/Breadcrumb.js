import React from 'react';

const Breadcrumb = () => {

    return (
        <div className="container-fluid">
            <div className="page-header">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="page-header-left">
                            <h3>Vendor List
                                <small>Multikart Admin panel</small>
                            </h3>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <ol className="breadcrumb pull-right">
                            <li className="breadcrumb-item">
                                <a href="index.html">
                                    <i data-feather="home"></i>
                                </a>
                            </li>
                            <li className="breadcrumb-item">Vendors</li>
                            <li className="breadcrumb-item active">Vendor List</li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Breadcrumb;