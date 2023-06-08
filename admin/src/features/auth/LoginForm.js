import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

const LoginForm = () => {
  const [initialValues, setInitialValues] = useState({
    username: "",
    password: "",
  });
  const [statusMessage, setStatusMessage] = useState({
    status: "",
    message: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const validationSchema = Yup.object().shape({
    username: Yup.string().required("username is required"),
    password: Yup.string().required("password is required"),
  });

  const onSubmit = async (userCredentials, { resetForm, setSubmitting }) => {
    console.log("onSubmit ", userCredentials);
    try {
      let message = "";
      //   await dispatch(updateCategory({ id, categoryFields })).unwrap();
      navigate("/admin/home");
    } catch (err) {
      console.error("Failed to login: ", err);
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
            <div className="form-group">
              <Field
                name="username"
                type="text"
                className={
                  "form-control" +
                  (errors.username && touched.username ? " is-invalid" : "")
                }
              />
              <ErrorMessage
                name="username"
                component="div"
                className="invalid-feedback"
              />
            </div>
            <div className="form-group">
              <Field
                name="password"
                type="password"
                className={
                  "form-control" +
                  (errors.password && touched.password ? " is-invalid" : "")
                }
              />
              <ErrorMessage
                name="password"
                component="div"
                className="invalid-feedback"
              />
            </div>
            <div className="form-button">
              {/* <button className="btn btn-primary" type="submit">
                Login
              </button> */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn btn-primary"
              >
                {isSubmitting && (
                  <span className="spinner-border spinner-border-sm mr-1"></span>
                )}
                {/* {statusMessage?.status === "success" && (
                  <i className="fa fa-check" aria-hidden="true" />
                )} */}
                Login
              </button>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};

export default LoginForm;
