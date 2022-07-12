import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Breadcrumb from "../../components/common/Breadcrumb";
import ConfirmDeleteAlert from "../../components/common/ConfirmDeleteAlert";
import { fetchBlogs, deleteBlog } from "../../features/blog/blogSlice";
import DataTable from "../../components/common/DataTable";

const BlogList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBlogs());
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
  const breadCrumbArr = ["Blog", "Blog List"];

  // For Datatable Component Rendering
  const blog = useSelector((state) => state.blog);
  const blogItems = blog.blogItems;

  const columns = [
    {
      dataField: "_id",
      text: "Blog ID",
      hidden: true,
    },
    {
      dataField: "title",
      text: "Blog Title",
      sort: true,
    },
    {
      dataField: "image",
      text: "Blog Image",
      formatter: (cellContent, row) => (
        <img width="75" height="75" src={row.image} alt="blog image" />
      ),
    },
    {
      dataField: "date",
      text: "Posted Date",
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
              Create Blog
            </Link>
          </div>
          <DataTable data={blogItems} columns={columns} />
        </div>
      </div>
      {confirmDeleteAlert && (
        <ConfirmDeleteAlert
          value={{
            confirmDeleteAlert,
            toggleAlert,
            id,
            title: "Blog",
            deleteTo: deleteBlog,
          }}
        />
      )}
    </div>
  );
};
export default BlogList;
