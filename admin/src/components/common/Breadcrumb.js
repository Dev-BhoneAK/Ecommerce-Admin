    import React from 'react';

const Breadcrumb = ({breadCrumbArr}) => {

    const lastIndex = breadCrumbArr.length - 1;
    return (
        <div className="container-fluid">
            <div className="page-header">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="page-header-left">
                            <h3>{breadCrumbArr[lastIndex]}
                                <small>Multikart Admin panel</small>
                            </h3>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <ol className="breadcrumb pull-right">
                            <li className="breadcrumb-item">
                                <a href="index.html">
                                    <i className="fa fa-home"></i>
                                </a>
                            </li>
                            {
                                breadCrumbArr.map((breadCrumb, index) => (
                                    <li key={index} className={`breadcrumb-item ${index === lastIndex && 'active'}`}>{breadCrumb}</li>
                                ))
                            }
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Breadcrumb;