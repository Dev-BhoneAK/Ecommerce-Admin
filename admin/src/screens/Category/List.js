import React from 'react';
import Dashboard from "../../components/common/Dashboard";
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import {mockedCategories} from '../../utility/mockedCategories';

const List = () => {

    const columns = [{
        dataField: 'id',
        text: 'Product ID',
        sort: true
    }, {
        dataField: 'name',
        text: 'Product Name',
        sort: true
    }, {
        dataField: 'price',
        text: 'Product Price'
    }];

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
                        <BootstrapTable
                            keyField="id"
                            data={ mockedCategories }
                            columns={ columns }
                            pagination={ paginationFactory(options) }
                            striped
                            hover
                            bordered={ false }
                        />
                    </div>
                </div>
            </div>
        </Dashboard>
    )
}
export default List;