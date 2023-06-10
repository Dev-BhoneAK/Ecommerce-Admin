import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

import { login } from "./authSlice";

const LoginForm = () => {
  const [initialValues, setInitialValues] = useState({
    email: "",
    password: "",
  });
  const [statusMessage, setStatusMessage] = useState({
    status: "",
    message: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const validationSchema = Yup.object().shape({
    email: Yup.string().required("username is required"),
    password: Yup.string().required("password is required"),
  });

  const onSubmit = async (userCredentials, { resetForm, setSubmitting }) => {
    console.log("onSubmit ", userCredentials);
    try {
      await dispatch(login(userCredentials)).unwrap();
      navigate("/admin/home");
    } catch (err) {
      setStatusMessage((prevState) => ({
        ...prevState,
        status: "error",
        message: err.message,
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
                name="email"
                type="text"
                placeholder="Username"
                className={
                  "form-control" +
                  (errors.email && touched.email ? " is-invalid" : "")
                }
              />
              <ErrorMessage
                name="email"
                component="div"
                className="invalid-feedback"
              />
            </div>
            <div className="form-group">
              <Field
                name="password"
                type="password"
                placeholder="Password"
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
            <div className="form-group status-message">
              {statusMessage?.status === "error" && (
                <h5 className="text-danger f-w-600">
                  {statusMessage?.message}
                </h5>
              )}
            </div>
            <div className="form-button">
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
