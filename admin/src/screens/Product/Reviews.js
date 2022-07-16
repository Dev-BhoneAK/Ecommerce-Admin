import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Breadcrumb from "../../components/common/Breadcrumb";
import ConfirmDeleteAlert from "../../components/common/ConfirmDeleteAlert";
import { fetchReviews, deleteReview } from "../../features/product/reviewSlice";
import DataTable from "../../components/common/DataTable";

const ProductReviews = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchReviews());
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

  const handleReadMore = (row) => {
    toggleModal();
    setId(row._id);
  };

  const handleDelete = (row) => {
    toggleAlert();
    setId(row._id);
  };

  // For BreadCrumb Component Rendering
  const breadCrumbArr = ["Product", "Product Review List"];

  // For Datatable Component Rendering
  const review = useSelector((state) => state.review);
  const reviewItems = review.reviewItems;

  const columns = [
    {
      dataField: "_id",
      text: "Review ID",
      hidden: true,
    },
    {
      dataField: "product.info.name",
      text: "Product Name",
      sort: true,
    },
    {
      dataField: "user.name",
      text: "Customer Name",
      sort: true,
    },
    {
      dataField: "rating",
      text: "Rating",
      formatter: (cellContent, row) => (
        <ul className="rating">
          {[...Array(row.rating)].map((e, i) => {
            return (
              <li key={i}>
                <i className="fa fa-star theme-color"></i>
              </li>
            );
          })}
        </ul>
      ),
    },
    {
      dataField: "comment",
      text: "Comment",
      sort: true,
      formatter: (cellContent, row) => (
        <div>
          {row.comment.length < 25 ? (
            row.comment
          ) : (
            <>
              {row.comment.substring(0, 25)}
              <span>
                ...
                <a className="read-more" onClick={() => handleReadMore(row)}>
                  Read More
                </a>
              </span>
            </>
          )}
        </div>
      ),
    },
    {
      dataField: "action",
      isDummyField: true,
      text: "Action",
      formatter: (cellContent, row) => {
        return (
          <button onClick={() => handleDelete(row)}>
            <i className="fa fa-trash" title="Delete" />
          </button>
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
          </div>
          <DataTable data={reviewItems} columns={columns} />
        </div>
      </div>
      {modal && (
        <ReadMoreModal value={{ modal, toggleModal, id, reviewItems }} />
      )}
      {confirmDeleteAlert && (
        <ConfirmDeleteAlert
          value={{
            confirmDeleteAlert,
            toggleAlert,
            id,
            title: "Review",
            deleteTo: deleteReview,
          }}
        />
      )}
    </div>
  );
};

const ReadMoreModal = ({ value }) => {
  const { reviewItems, modal, toggleModal, id } = value;
  const { comment } = reviewItems.filter((review) => review._id === id)[0];

  return (
    <>
      <div
        className={`modal fade ${modal ? "show" : "hide"}`}
        id="exampleModal"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title f-w-600" id="exampleModalLabel">
                Comment
              </h5>
              <button
                className="btn-close"
                type="button"
                onClick={toggleModal}
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">{comment}</div>
            <div className="modal-footer">
              <button
                className="btn btn-secondary"
                type="button"
                onClick={toggleModal}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`modal-backdrop fade ${modal ? "show" : "hide"}`}
        id="backdrop"
      ></div>
    </>
  );
};
export default ProductReviews;
