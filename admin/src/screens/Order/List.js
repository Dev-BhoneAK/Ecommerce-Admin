import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Breadcrumb from "../../components/common/Breadcrumb";
import { fetchOrders } from "../../features/order/orderSlice";
import DataTable from "../../components/common/DataTable";

const OrderList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchOrders());
  }, []);

  // For Confirm Delete Modal
  // TODO: Use Modal from react-bootstrap and change the code
  const [id, setId] = useState(0);

  // For BreadCrumb Component Rendering
  const breadCrumbArr = ["Order", "Order List"];

  // For Datatable Component Rendering
  const order = useSelector((state) => state.order);
  const orderItems = order.orderItems;

  const columns = [
    {
      dataField: "_id",
      text: "ID",
      hidden: true,
    },
    {
      dataField: "orderInfo.id",
      text: "Order ID",
      sort: true,
    },
    {
      dataField: "orderItems",
      text: "Order Items",
      formatter: (cellContent, row) => (
        <div className="d-flex align-items-center">
          {row.orderItems.map((orderItem) => (
            <img
              className="img-fluid img-30 me-2 blur-up lazyloaded"
              src={orderItem.product.info.images}
              alt="Item"
            />
          ))}
        </div>
      ),
    },
    {
      dataField: "payment.result.status",
      text: "Payment Status",
      sort: true,
    },
    {
      dataField: "payment.method",
      text: "Payment Method",
      sort: true,
    },
    {
      dataField: "orderInfo.status",
      text: "Order Status",
      sort: true,
    },
    {
      dataField: "createdAt",
      text: "Order Created Date",
      formatter: (cellContent, row) => {
        const localDate = new Date(row.createdAt);
        const localDateString = localDate.toLocaleDateString(undefined, {
          day: "numeric",
          month: "short",
          year: "numeric",
        });
        return <div>{localDateString}</div>;
      },
      sort: true,
    },
    {
      dataField: "action",
      isDummyField: true,
      text: "Action",
      formatter: (cellContent, row) => {
        return (
          <>
            <Link to="detail">View Detail</Link>
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
              Create Order
            </Link>
          </div>
          <DataTable data={orderItems} columns={columns} />
        </div>
      </div>
    </div>
  );
};
export default OrderList;
