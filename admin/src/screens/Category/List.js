import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import {useDispatch, useSelector} from "react-redux";
import Dashboard from "../../components/common/Dashboard";
import {fetchCategories} from '../../features/category/categorySlice';

const List = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchCategories());
    }, []);

    const [modal, setModal] = useState(false);

    const showModal = () => {
        setModal(true);
    }

    const handleEdit = (row) => {
        console.log(row.name);
    }
    const handleDelete = (row) => {
        console.log(row.name);
    }
    const columns = [
        {
            dataField: 'name',
            text: 'Category Name',
            sort: true
        },
        {
            dataField: 'parent',
            text: 'Parent Category',
            sort: true
        },
        {
            dataField: 'path',
            text: 'Path'
        },
        {
            dataField: 'action',
            isDummyField: true,
            text: 'Action',
            formatter: (cellContent, row) => {
                return (
                    <>
                        <button onClick={() => handleEdit(row)}>
                            <i className="fa fa-edit" title="Edit" />
                        </button>

                        <button onClick={() => handleDelete(row)}>
                            <i className="fa fa-trash" title="Delete" />
                        </button>
                    </>
                );
            }
        }
    ];

    const options = {
        alwaysShowAllBtns: true,
        firstPageText: 'First',
        prePageText: 'Back',
        nextPageText: 'Next',
        lastPageText: 'Last',
        nextPageTitle: 'First page',
        prePageTitle: 'Pre page',
        firstPageTitle: 'Next page',
        lastPageTitle: 'Last page',
        showTotal: true,
        disablePageTitle: true,
    };

    const breadCrumbArr = ['Category', 'Category List'];

    const category = useSelector((state) => state.category);
    const categoryItems = category.categoryItems;
    return (
        <Dashboard breadCrumbArr={breadCrumbArr}>
            <div className="container-fluid">
                <div className="card">
                    <div className="card-header">
                        <form className="form-inline search-form search-box">
                            <div className="form-group">
                                <input className="form-control-plaintext" type="search" placeholder="Search.." />
                                <span className="d-sm-none mobile-search">
                                    <i data-feather="search" />
                                </span>
                            </div>
                        </form>

                        <button onClick={showModal} className="btn btn-primary mt-md-0 mt-2">Create Category</button>
                    </div>
                    <div className="card-body vendor-table">
                        <BootstrapTable
                            keyField="name"
                            data={ categoryItems }
                            columns={ columns }
                            pagination={ paginationFactory(options) }
                            striped
                            hover
                            bordered={ false }
                        />
                    </div>
                </div>
            </div>
                <div className={`modal fade ${modal ? 'show' : 'hide'}`} id="exampleModal">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title f-w-600" id="exampleModalLabel">Add Category</h5>
                                <button className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <form className="needs-validation">
                                    <div className="form">
                                        <div className="form-group">
                                            <label htmlFor="validationCustom01" className="mb-1">Category Name :</label>
                                            <input className="form-control" id="validationCustom01" type="text" />
                                        </div>
                                        <div className="form-group mb-0">
                                            <label htmlFor="validationCustom02" className="mb-1">Category Image :</label>
                                            <input className="form-control" id="validationCustom02" type="file" />
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button className="btn btn-primary" type="button">Save</button>
                                <button className="btn btn-secondary" type="button" data-bs-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`modal-backdrop fade ${modal ? 'show' : 'hide'}`} id="backdrop"></div>
        </Dashboard>
    )
}
export default List;