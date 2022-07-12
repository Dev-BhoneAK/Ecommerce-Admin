import React, { useState, useEffect } from "react";
import Breadcrumb from "../../components/common/Breadcrumb";
import CreateEditForm from "../../features/product/CreateEditForm";

const ProductCreate = () => {
  const breadCrumbArr = ["Product", "Add Product"];

  return (
    <div className="page-body">
      <Breadcrumb breadCrumbArr={breadCrumbArr} />
      <div className="container-fluid">
        <CreateEditForm />
      </div>
    </div>
  );
};
export default ProductCreate;
