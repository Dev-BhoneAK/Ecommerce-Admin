import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { object, string } from "yup";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { getBlogById } from "../blog/blogSlice";
import { createBlog, updateBlog } from "./blogSlice";
import ImageUpload from "../../components/common/ImageUpload";
import TextEditor from "../../components/common/TextEditor";
import useSubmitForm from "../../utility/customHook/useSubmitForm";
import { setInitialValuesToForm } from "../../utility/helpers";

const CreateEditForm = (props) => {
  /* Component State Initialize Start */
  // For Formik Form InitialValues, use initialValues state,
  // These initialValues will be updated on blog edit feature.
  const [initialValues, setInitialValues] = useState({
    title: "",
    images: [],
    description: "",
    date: new Date().getTime(),
  });
  const [images, setImages] = useState([]); // For new image upload, use blogImages state
  const [existingImages, setexistingImages] = useState([]); // For created blog's image, use existingImages state
  // For server response message, use statusMessage state
  const [statusMessage, setStatusMessage] = useState({
    status: "",
    message: "",
  });
  const [description, setDescription] = useState({
    status: true,
    count: 0,
    message: "",
  });
  const [editor, setEditor] = useState("");
  const [publishDate, setPublishDate] = useState(new Date()); // For Datepicker
  const [requiredImageMessage, setRequiredImageMessage] = useState(false);
  /* Component State Initialize End */

  /* use React Hooks and custom Hook start */
  const { submitForm, updateForm, showMessage } = useSubmitForm();
  const blogState = useSelector((state) => state.blog);
  /* use React Hooks and custom Hook end */

  useEffect(() => {
    // if user request is for edit form
    if (props.id && props.id !== 0) {
      const blogObj = getBlogById(blogState, props.id); // Get User Request Blog by ID

      setInitialValuesToForm(initialValues, setInitialValues, blogObj); // update Form fields with requested blog

      const concatImages = blogObj.images.map((file) => ({
        preview: file,
        key: existingImages.length + blogObj.images.length,
      }));
      setexistingImages(...existingImages, concatImages); // add uploaded images to existingImages for rendering images
    }
  }, [blogState]);

  /* Form Input Validation Schema */
  const validationSchema = object().shape({
    title: string().required("Blog Name is required"),
  });

  /* Call on Form Submit */
  const onSubmit = async (fields, { resetForm, setSubmitting }) => {
    if (images.length === 0 && existingImages.length === 0) {
      setRequiredImageMessage(true);
    } else if (description.count < 10) {
      setDescription((prevState) => ({
        ...prevState,
        status: false,
        message: "Blog Content should be at least 10 characters.",
      }));
    } else {
      const id = props.id ? props.id : 0;
      const formDataObj = { id, fields, images, existingImages };
      const formActionObj = { create: createBlog, update: updateBlog };
      const { status, message } = await submitForm(formDataObj, formActionObj);
      if (status === "success") {
        updateForm(id, { resetForm, initialValues, setInitialValues });
        setImages([]);
        setexistingImages([]);
        editor.setData("");
        setPublishDate(new Date());
        showMessage({
          setStatusMessage,
          status,
          message: "Blog " + message,
        });
      } else {
        setSubmitting(false);
        showMessage({ setStatusMessage, status, message });
      }
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      enableReinitialize={true}
    >
      {function Render({ errors, touched, setFieldValue, isSubmitting }) {
        useEffect(() => {
          {
            setFieldValue("images", images);
          }
        }, [images]);
        return (
          <Form encType="multipart/form-data">
            <div className="container-fluid">
              <div className="row">
                <div className="col-sm-12">
                  <div className="card">
                    <div className="card-body">
                      <div className="form-group row">
                        <label className="col-xl-3 col-md-4">
                          <span>*</span>Title
                        </label>
                        <div className="col-md-9">
                          <Field
                            name="title"
                            type="text"
                            className={
                              "form-control" +
                              (errors.title && touched.title
                                ? " is-invalid"
                                : "")
                            }
                          />
                          <ErrorMessage
                            name="title"
                            component="div"
                            className="invalid-feedback"
                          />
                        </div>
                      </div>
                      <div className="form-group row">
                        <label className="col-xl-3 col-md-4">Image</label>
                        <div className="col-xl-9 col-md-8">
                          <ImageUpload
                            imagesObj={{ images, setImages }}
                            existingImages={existingImages}
                            requiredImageObj={{
                              requiredImageMessage,
                              setRequiredImageMessage,
                            }}
                          />
                        </div>
                      </div>
                      <div className="form-group row">
                        <label className="col-xl-3 col-md-4">Content</label>
                        <div className="col-xl-9 col-md-8">
                          <TextEditor
                            labelName="Description"
                            initialValues={initialValues}
                            setEditor={setEditor}
                            setFieldValue={setFieldValue}
                            descriptionObj={{
                              description,
                              setDescription,
                            }}
                          />
                        </div>
                      </div>
                      <div className="form-group row">
                        <label className="col-xl-3 col-md-4">
                          Published Date
                        </label>
                        <div className="col-xl-2 col-md-2">
                          <DatePicker
                            className="form-control"
                            selected={publishDate}
                            onChange={(date) => {
                              setPublishDate(date);
                              setFieldValue("date", date.getTime());
                            }}
                          />
                        </div>
                      </div>
                      <div className="form-group mb-0">
                        <button type="submit" className="btn btn-primary">
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
                          style={{ marginLeft: "20px" }}
                        >
                          Discard
                        </button>
                      </div>
                      <div className="show-message">
                        {statusMessage?.status === "success" && (
                          <div className="alert alert-success" role="alert">
                            {statusMessage.message}
                          </div>
                        )}
                        {statusMessage?.status === "failure" && (
                          <div className="alert alert-danger" role="alert">
                            {statusMessage.message}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};
export default CreateEditForm;
