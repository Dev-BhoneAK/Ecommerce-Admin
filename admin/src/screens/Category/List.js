import React, {useEffect, useState} from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import {useDispatch, useSelector} from "react-redux";
import Breadcrumb from "../../components/common/Breadcrumb";
import {fetchCategories} from '../../features/category/categorySlice';
import CreateEditModal from '../../features/category/CreateEditModal';
import {CreateEditContext} from '../../features/category/CreateEditContext';

const List = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchCategories());
    }, []);

    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(modal => !modal);
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
        <div className="page-body">
            <Breadcrumb breadCrumbArr={breadCrumbArr} />
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

                        <button onClick={toggleModal} className="btn btn-primary mt-md-0 mt-2">Create Category</button>
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
            {
                modal && (
                    <CreateEditContext.Provider value={{ modal, toggleModal, categoryItems }}>
                        <CreateEditModal/>
                    </CreateEditContext.Provider>
                )
            }
        </div>
    )
}
export default List;