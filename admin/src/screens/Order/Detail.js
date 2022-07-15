import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Breadcrumb from "../../components/common/Breadcrumb";

const OrderDetail = () => {
  const breadCrumbArr = ["Order", "Order Detail"];
  return (
    <div className="page-body">
      <Breadcrumb breadCrumbArr={breadCrumbArr} />
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12">
            <div className="card">
              <div className="card-body">
                <div className="bg-inner cart-section order-details-table">
                  <div className="row g-4">
                    <div className="col-xl-8">
                      <div className="card-details-title">
                        <h3>
                          Order Number <span>#31684321</span>
                        </h3>
                      </div>
                      <div className="table-responsive table-details">
                        <table className="table cart-table table-borderless">
                          <thead>
                            <tr>
                              <th colSpan="2">Items</th>
                              <th className="text-end" colSpan="2">
                                <a href="#" className="theme-color">
                                  Edit Items
                                </a>
                              </th>
                            </tr>
                          </thead>

                          <tbody>
                            <tr className="table-order">
                              <td>
                                <a href="#">
                                  <img
                                    src="/assets/images/fashion/1.jpeg"
                                    className="img-fluid lazyload"
                                    alt=""
                                  />
                                </a>
                              </td>
                              <td>
                                <p>Product Name</p>
                                <h5>Outwear & Coats</h5>
                              </td>
                              <td>
                                <p>Quantity</p>
                                <h5>1</h5>
                              </td>
                              <td>
                                <p>Price</p>
                                <h5>$63.54</h5>
                              </td>
                            </tr>

                            <tr className="table-order">
                              <td>
                                <a href="#">
                                  <img
                                    src="/assets/images/fashion/2.jpeg"
                                    className="img-fluid lazyload"
                                    alt=""
                                  />
                                </a>
                              </td>
                              <td>
                                <p>Product Name</p>
                                <h5>Slim Fit Plastic Coat</h5>
                              </td>
                              <td>
                                <p>Quantity</p>
                                <h5>5</h5>
                              </td>
                              <td>
                                <p>Price</p>
                                <h5>$63.54</h5>
                              </td>
                            </tr>

                            <tr className="table-order">
                              <td>
                                <a href="#">
                                  <img
                                    src="/assets/images/fashion/3.jpeg"
                                    className="img-fluid lazyload"
                                    alt=""
                                  />
                                </a>
                              </td>
                              <td>
                                <p>Product Name</p>
                                <h5>Men's Sweatshirt</h5>
                              </td>
                              <td>
                                <p>Quantity</p>
                                <h5>1</h5>
                              </td>
                              <td>
                                <p>Price</p>
                                <h5>$63.54</h5>
                              </td>
                            </tr>
                          </tbody>

                          <tfoot>
                            <tr className="table-order">
                              <td colSpan="3">
                                <h5>Subtotal :</h5>
                              </td>
                              <td>
                                <h4>$55.00</h4>
                              </td>
                            </tr>

                            <tr className="table-order">
                              <td colSpan="3">
                                <h5>Shipping :</h5>
                              </td>
                              <td>
                                <h4>$12.00</h4>
                              </td>
                            </tr>

                            <tr className="table-order">
                              <td colSpan="3">
                                <h5>Tax(GST) :</h5>
                              </td>
                              <td>
                                <h4>$10.00</h4>
                              </td>
                            </tr>

                            <tr className="table-order">
                              <td colSpan="3">
                                <h4 className="theme-color fw-bold">
                                  Total Price :
                                </h4>
                              </td>
                              <td>
                                <h4 className="theme-color fw-bold">
                                  $6935.00
                                </h4>
                              </td>
                            </tr>
                          </tfoot>
                        </table>
                      </div>
                    </div>

                    <div className="col-xl-4">
                      <div className="row g-4">
                        <div className="col-12">
                          <div className="order-success">
                            <h4>summery</h4>
                            <ul className="order-details">
                              <li>Order ID: 5563853658932</li>
                              <li>Order Date: October 22, 2021</li>
                              <li>Order Total: $907.28</li>
                            </ul>
                          </div>
                        </div>

                        <div className="col-12">
                          <div className="order-success">
                            <h4>shipping address</h4>
                            <ul className="order-details">
                              <li>Gerg Harvell</li>
                              <li>568, Suite Ave.</li>
                              <li>Austrlia, 235153 Contact No. 48465465465</li>
                            </ul>
                          </div>
                        </div>

                        <div className="col-12">
                          <div className="order-success">
                            <div className="payment-mode">
                              <h4>payment method</h4>
                              <p>
                                Pay on Delivery (Cash/Card). Cash on delivery
                                (COD) available. Card/Net banking acceptance
                                subject to device availability.
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="col-12">
                          <div className="order-success">
                            <div className="delivery-sec">
                              <h3>
                                expected date of delivery:{" "}
                                <span>october 22, 2021</span>
                              </h3>
                              <a href="order-tracking.html">track order</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetail;
