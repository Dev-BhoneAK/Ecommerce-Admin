import React from 'react';
import Dashboard from "../../components/common/Dashboard";

const List = () => {

    return (
        <Dashboard>
            <div className="container-fluid">
                <div className="card">
                    <div className="card-header">
                        <form className="form-inline search-form search-box">
                            <div className="form-group">
                                <input className="form-control-plaintext" type="search" placeholder="Search.." /><span
                                    className="d-sm-none mobile-search"><i data-feather="search"></i></span>
                            </div>
                        </form>

                        <a href="create-vendors.html" className="btn btn-primary mt-md-0 mt-2">Create Vendort</a>
                    </div>
                    <div className="card-body vendor-table">
                        <table className="display" id="basic-1">
                            <thead>
                            <tr>
                                <th>Image</th>
                                <th>Name</th>
                                <th>Status</th>
                                <th>Create Date</th>
                                <th>Action</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>
                                    <div className="d-flex vendor-list">
                                        <img src="/assets/images/category/1.png" alt=""
                                             className="img-fluid img-40 rounded-circle lazyloaded" />
                                            <span>Rowan torres</span>
                                    </div>
                                    {/*<img src="/assets/images/category/1.png"*/}
                                    {/*     data-field="image" alt="" />*/}
                                </td>
                                <td data-field="name">Graphic Design</td>
                                <td className="order-success" data-field="status">
                                    <span>Active</span>
                                </td>
                                <td>8/10/18</td>
                                <td>
                                    <a href="#!">
                                        <i className="fa fa-edit font-success" title="Edit"></i>
                                    </a>

                                    <a href="#!">
                                        <i className="fa fa-trash font-danger" title="Delete"></i>
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <img src="/assets/images/category/2.png"
                                         data-field="image" alt="" />
                                </td>
                                <td data-field="name">PHP</td>
                                <td className="order-success" data-field="status">
                                    <span>Active</span>
                                </td>
                                <td>8/10/18</td>
                                <td>
                                    <a href="#!">
                                        <i className="fa fa-edit font-success" title="Edit"></i>
                                    </a>

                                    <a href="#!">
                                        <i className="fa fa-trash font-danger" title="Delete"></i>
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <img src="/assets/images/category/3.png"
                                         data-field="image" alt="" />
                                </td>
                                <td data-field="name">HTML</td>
                                <td className="order-success" data-field="status">
                                    <span>Active</span>
                                </td>
                                <td>8/10/18</td>
                                <td>
                                    <a href="#!">
                                        <i className="fa fa-edit font-success" title="Edit"></i>
                                    </a>

                                    <a href="#!">
                                        <i className="fa fa-trash font-danger" title="Delete"></i>
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <img src="/assets/images/category/4.png"
                                         data-field="image" alt="" />
                                </td>
                                <td data-field="name">CSS</td>
                                <td className="order-success" data-field="status">
                                    <span>Active</span>
                                </td>
                                <td>8/10/18</td>
                                <td>
                                    <a href="#!">
                                        <i className="fa fa-edit font-success" title="Edit"></i>
                                    </a>

                                    <a href="#!">
                                        <i className="fa fa-trash font-danger" title="Delete"></i>
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <img src="/assets/images/category/5.png"
                                         data-field="image" alt="" />
                                </td>
                                <td data-field="name">Javascript</td>
                                <td className="order-success" data-field="status">
                                    <span>Active</span>
                                </td>
                                <td>8/10/18</td>
                                <td>
                                    <a href="#!">
                                        <i className="fa fa-edit font-success" title="Edit"></i>
                                    </a>

                                    <a href="#!">
                                        <i className="fa fa-trash font-danger" title="Delete"></i>
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <img src="/assets/images/category/6.png"
                                         data-field="image" alt="" />
                                </td>
                                <td data-field="name">React</td>
                                <td className="order-pending" data-field="status">
                                    <span>Pending</span>
                                </td>
                                <td>8/10/18</td>
                                <td>
                                    <a href="#!">
                                        <i className="fa fa-edit font-success" title="Edit"></i>
                                    </a>

                                    <a href="#!">
                                        <i className="fa fa-trash font-danger" title="Delete"></i>
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <img src="/assets/images/category/7.png"
                                         data-field="image" alt="" />
                                </td>
                                <td data-field="name">NodeJS</td>
                                <td className="order-warning" data-field="status">
                                    <span>Waiting</span>
                                </td>
                                <td>8/10/18</td>
                                <td>
                                    <a href="#!">
                                        <i className="fa fa-edit font-success" title="Edit"></i>
                                    </a>

                                    <a href="#!">
                                        <i className="fa fa-trash font-danger" title="Delete"></i>
                                    </a>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </Dashboard>
    )
}
export default List;