import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Breadcrumb from "../../components/common/Breadcrumb";
import CreateEditForm from "../../features/blog/CreateEditForm";

const BlogEdit = () => {
  const params = useParams();
  const breadCrumbArr = ["Blog", "Edit Blog"];
  return (
    <div className="page-body">
      <Breadcrumb breadCrumbArr={breadCrumbArr} />
      <div className="container-fluid">
        <CreateEditForm id={params.id} />
      </div>
    </div>
  );
};
export default BlogEdit;
