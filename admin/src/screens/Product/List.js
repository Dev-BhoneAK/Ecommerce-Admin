import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Breadcrumb from "../../components/common/Breadcrumb";
import ConfirmDeleteAlert from "../../components/common/ConfirmDeleteAlert";
import {
  fetchProducts,
  deleteProduct,
} from "../../features/product/productSlice";
import DataTable from "../../components/common/DataTable";

const ProductList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  // For Confirm Delete Modal
  // TODO: Use Modal from react-bootstrap and change the code
  const [confirmDeleteAlert, setConfirmDeleteAlert] = useState(false);
  const [id, setId] = useState(0);

  const toggleAlert = () => {
    setConfirmDeleteAlert((alert) => !alert);
    setId(0);
  };

  const handleDelete = (row) => {
    toggleAlert();
    setId(row._id);
  };

  // For BreadCrumb Component Rendering
  const breadCrumbArr = ["Product", "Product List"];

  // For Datatable Component Rendering
  const product = useSelector((state) => state.product);
  const productItems = product.productItems;

  const columns = [
    {
      dataField: "info.images",
      text: "Product Image",
      formatter: (cellContent, row) => (
        <img
          width="75"
          height="75"
          src={row.info.images[0]}
          alt="product image"
        />
      ),
    },
    {
      dataField: "info.name",
      text: "Product Title",
      sort: true,
    },
    {
      dataField: "info.categories",
      text: "Category",
      sort: true,
    },
    {
      dataField: "totalStockCount",
      text: "Stock Left",
      sort: true,
    },
    {
      dataField: "action",
      isDummyField: true,
      text: "Action",
      formatter: (cellContent, row) => {
        return (
          <>
            <Link to={`${row._id}`}>
              <i className="fa fa-edit" title="Edit" />
            </Link>

            <button onClick={() => handleDelete(row)}>
              <i className="fa fa-trash" title="Delete" />
            </button>
          </>
        );
      },
    },
  ];

  return (
    <div className="page-body">
      <Breadcrumb breadCrumbArr={breadCrumbArr} />
      <div className="container-fluid">
        <div className="card">
          <div className="card-header">
            <form className="form-inline search-form search-box">
              <div className="form-group">
                <input
                  className="form-control-plaintext"
                  type="search"
                  placeholder="Search.."
                />
                <span className="d-sm-none mobile-search">
                  <i data-feather="search" />
                </span>
              </div>
            </form>

            <Link to="add" className="btn btn-primary mt-md-0 mt-2">
              Create Product
            </Link>
          </div>
          <DataTable data={productItems} columns={columns} />
        </div>
      </div>
      {confirmDeleteAlert && (
        <ConfirmDeleteAlert
          value={{
            confirmDeleteAlert,
            toggleAlert,
            id,
            title: "Product",
            deleteTo: deleteProduct,
          }}
        />
      )}
    </div>
  );
};
export default ProductList;
