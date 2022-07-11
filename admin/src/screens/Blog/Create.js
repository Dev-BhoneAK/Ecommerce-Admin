import React, { useState, useEffect } from "react";
import Breadcrumb from "../../components/common/Breadcrumb";
import CreateEditForm from "../../features/blog/CreateEditForm";

const BlogCreate = () => {
  const breadCrumbArr = ["Blog", "Add Blog"];

  return (
    <div className="page-body">
      <Breadcrumb breadCrumbArr={breadCrumbArr} />
      <div className="container-fluid">
        <CreateEditForm />
      </div>
    </div>
  );
};
export default BlogCreate;
