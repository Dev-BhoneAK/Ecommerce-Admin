import React, { useContext, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { CreateEditContext } from "../../components/common/CreateEditContext";
import { createBrand, updateBrand } from "./brandSlice";

const CreateEditForm = () => {
  const dispatch = useDispatch();
  const createEditContext = useContext(CreateEditContext);
  const { brandItems, toggleModal, id } = createEditContext;
  const [statusMessage, setStatusMessage] = useState({
    status: "",
    message: "",
  });
  const [initialValues, setInitialValues] = useState({
    name: "",
  });
  const [brandLogo, setBrandLogo] = useState("");
  const [requiredLogoMessage, setRequiredLogoMessage] = useState(false);

  useEffect(() => {
    if (id !== 0) {
      const brand = brandItems.filter((brand) => brand._id === id)[0];
      const objKeys = Object.keys(initialValues).reduce((obj, char, index) => {
        obj[char] = brand[char];
        return obj;
      }, {});
      console.log("objKeys ", objKeys);
      setInitialValues((prevState) => ({
        ...prevState,
        ...objKeys,
      }));
    }
  }, [id]);
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Brand Name is required"),
  });

  const onSubmit = async (brandFields, { resetForm, setSubmitting }) => {
    console.log("onSubmit ", brandFields);
    if (brandLogo === "") {
      setRequiredLogoMessage(true);
      return false;
    }
    try {
      let message = "";
      if (id === 0) {
        await dispatch(createBrand(brandFields)).unwrap();
        message = "Brand Created Successfully!";
      } else {
        await dispatch(updateBrand({ id, brandFields })).unwrap();
        message = "Brand Updated Successfully!";
      }
      setStatusMessage((prevState) => ({
        ...prevState,
        status: "success",
        message: message,
      }));
      setBrandLogo("");
      resetForm();
    } catch (err) {
      console.error("Failed to save the post: ", err);
      setStatusMessage((prevState) => ({
        ...prevState,
        status: "error",
        message: err.name + ": " + err.message,
      }));
      setSubmitting(false);
    } finally {
      setTimeout(() => {
        setStatusMessage({
          status: "",
          message: "",
        });
      }, 2000);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      enableReinitialize={true}
    >
      {({ errors, touched, isSubmitting, setFieldValue }) => {
        return (
          <Form>
            <div className="modal-body">
              <div className="form">
                <div className="form-group">
                  <label className="mb-1">Brand Name :</label>
                  <Field
                    name="name"
                    type="text"
                    className={
                      "form-control" +
                      (errors.name && touched.name ? " is-invalid" : "")
                    }
                  />
                  <ErrorMessage
                    name="name"
                    component="div"
                    className="invalid-feedback"
                  />
                </div>

                <div className="form-group mb-0">
                  <label className="mb-1">Brand Image :</label>
                  <input
                    id="image"
                    name="image"
                    type="file"
                    onChange={(event) => {
                      const file = event.currentTarget.files[0];
                      setBrandLogo(URL.createObjectURL(file));
                      setFieldValue("image", file);
                      setRequiredLogoMessage(false);
                    }}
                    className="form-control"
                  />
                </div>
                {requiredLogoMessage && (
                  <div className="required-image">
                    Brand Logo is required to upload.
                  </div>
                )}
                <div className="form-group show-images">
                  {brandLogo !== "" && (
                    <div className="image-area">
                      <img
                        className="show-image"
                        src={brandLogo}
                        alt="Brand Logo"
                      />
                      <button
                        className="remove-image"
                        onClick={() => setBrandLogo("")}
                      >
                        &#215;
                      </button>
                    </div>
                  )}
                </div>
                <div className="form-group status-message">
                  {statusMessage?.status === "success" ? (
                    <h5 className="text-success f-w-600">
                      {statusMessage?.message}
                    </h5>
                  ) : (
                    <h5 className="text-danger f-w-600">
                      {statusMessage?.message}
                    </h5>
                  )}
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn btn-primary"
              >
                {isSubmitting && (
                  <span className="spinner-border spinner-border-sm mr-1"></span>
                )}
                {statusMessage?.status === "success" && (
                  <i className="fa fa-check" aria-hidden="true" />
                )}
                Save
              </button>
              <button
                className="btn btn-secondary"
                type="button"
                onClick={toggleModal}
              >
                Close
              </button>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};
export default CreateEditForm;
