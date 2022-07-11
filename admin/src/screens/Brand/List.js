import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Breadcrumb from "../../components/common/Breadcrumb";
import ConfirmDeleteAlert from "../../components/common/ConfirmDeleteAlert";
import { fetchBrands, deleteBrand } from "../../features/brand/brandSlice";
import CreateEditModal from "../../features/brand/CreateEditModal";
import { CreateEditContext } from "../../components/common/CreateEditContext";
import DataTable from "../../components/common/DataTable";

const BrandList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBrands());
  }, []);

  // For CreateEdit Modal (use Modal for create, edit since there is only two form fields) and Confirm Delete Modal
  // TODO: Use Modal from react-bootstrap and change the code
  const [modal, setModal] = useState(false);
  const [confirmDeleteAlert, setConfirmDeleteAlert] = useState(false);
  const [id, setId] = useState(0);

  const toggleModal = () => {
    setModal((modal) => !modal);
    setId(0);
  };

  const toggleAlert = () => {
    setConfirmDeleteAlert((alert) => !alert);
    setId(0);
  };

  const handleEdit = (row) => {
    toggleModal();
    setId(row._id);
  };

  const handleDelete = (row) => {
    toggleAlert();
    setId(row._id);
  };

  // For BreadCrumb Component Rendering
  const breadCrumbArr = ["Brand", "Brand List"];

  // For Datatable Component Rendering
  const brand = useSelector((state) => state.brand);
  const brandItems = brand.brandItems;

  const columns = [
    {
      dataField: "name",
      text: "Brand Name",
      sort: true,
    },
    {
      dataField: "logo",
      text: "Brand Logo",
      formatter: (cellContent, row) => (
        <img width="75" height="75" src={row.logo} alt="brand logo" />
      ),
    },
    {
      dataField: "action",
      isDummyField: true,
      text: "Action",
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

            <button
              onClick={toggleModal}
              className="btn btn-primary mt-md-0 mt-2"
            >
              Create Brand
            </button>
          </div>
          <DataTable data={brandItems} columns={columns} />
        </div>
      </div>
      {modal && (
        <CreateEditContext.Provider
          value={{ modal, toggleModal, id, brandItems }}
        >
          <CreateEditModal />
        </CreateEditContext.Provider>
      )}
      {confirmDeleteAlert && (
        <ConfirmDeleteAlert
          value={{
            confirmDeleteAlert,
            toggleAlert,
            id,
            title: "Brand",
            deleteTo: deleteBrand,
          }}
        />
      )}
    </div>
  );
};
export default BrandList;
