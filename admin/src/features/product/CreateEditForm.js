import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { object, string, number } from "yup";
import { fetchCategories } from "../category/categorySlice";
import { getProductById } from "../product/productSlice";
import { createProduct, updateProduct } from "./productSlice";
import ImageUpload from "../../components/common/ImageUpload";
import TextEditor from "../../components/common/TextEditor";
import useSubmitForm from "./useSubmitForm";
import { setInitialValuesToForm } from "../../utility/helpers";

const CreateEditForm = (props) => {
  /* Component State Initialize Start */
  // For Formik Form InitialValues, use initialValues state,
  // These initialValues will be updated on product edit feature.
  const [initialValues, setInitialValues] = useState({
    name: "",
    sku: "",
    category: "",
    images: [],
    description: "",
    model: "",
    brand: "",
    basePrice: "",
    totalStockCount: "",
  });
  const [productImages, setProductImages] = useState([]); // For new image upload, use productImages state
  const [existingImages, setexistingImages] = useState([]); // For created product's image, use existingImages state
  // For server response message, use statusMessage state
  const [statusMessage, setStatusMessage] = useState({
    status: "",
    message: "",
  });
  const [description, setDescription] = useState({
    status: true,
    count: 0,
  });

  const [requiredImageMessage, setRequiredImageMessage] = useState(false);
  /* Component State Initialize End */

  /* use React Hooks and custom Hook start */
  const dispatch = useDispatch();
  const { submitForm, updateForm, showMessage } = useSubmitForm();
  const productState = useSelector((state) => state.product);

  // Category Items for Category Select Field
  const category = useSelector((state) => state.category);
  const categoryItems = category.categoryItems;
  /* use React Hooks and custom Hook end */

  useEffect(() => {
    dispatch(fetchCategories());

    // if user request is for edit form
    if (props.id && props.id !== 0) {
      const product = getProductById(productState, props.id); // Get User Request Product by ID
      const { info, detail, pricing } = product;

      const productObj = {
        ...info,
        ...detail,
        ...pricing,
        totalStockCount: product.totalStockCount,
      };

      setInitialValuesToForm(initialValues, setInitialValues, productObj); // update Form fields with requested product

      const concatImages = productObj.images.map((file) => ({
        preview: file,
        key: existingImages.length + productObj.images.length,
      }));
      setexistingImages(...existingImages, concatImages); // add uploaded images to existingImages for rendering images
    }
  }, [productState]);

  /* Form Input Validation Schema */
  const validationSchema = object().shape({
    name: string().required("Product Name is required"),
    sku: string().required("Product SKU is required"),
    category: string().required("Product Category is required"),
    basePrice: number()
      .required("Product Price is required")
      .positive()
      .integer(),
    totalStockCount: number()
      .required("Total Stock Count is required")
      .positive()
      .integer(),
  });

  /* Call on Form Submit */
  const onSubmit = async (productFields, { resetForm, setSubmitting }) => {
    console.log("description ", description.count);
    if (productImages.length === 0 && existingImages.length === 0) {
      setRequiredImageMessage(true);
    } else if (description.count < 10) {
      setDescription((prevState) => ({
        ...prevState,
        status: false,
      }));
    } else {
      const id = props.id ? props.id : 0;
      const formDataObj = { id, productFields, productImages, existingImages };
      const formActionObj = { create: createProduct, update: updateProduct };
      const { status, message } = await submitForm(formDataObj, formActionObj);
      if (status === "success") {
        updateForm(id, { resetForm, initialValues, setInitialValues });
        setProductImages([]);
        setexistingImages([]);
        showMessage({
          setStatusMessage,
          status,
          message: "Product " + message,
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
            setFieldValue("images", productImages);
          }
        }, [productImages]);
        return (
          <Form encType="multipart/form-data">
            <div className="row product-adding">
              <div className="col-xl-6">
                <div className="card">
                  <div className="card-header">
                    <h5>Product Info</h5>
                  </div>
                  <div className="card-body">
                    <div className="digital-add needs-validation">
                      <div className="form-group">
                        <label
                          htmlFor="validationCustom01"
                          className="col-form-label pt-0"
                        >
                          <span>*</span>
                          Name
                        </label>
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
                      <div className="form-group">
                        <label
                          htmlFor="validationCustomtitle"
                          className="col-form-label pt-0"
                        >
                          <span>*</span> SKU
                        </label>
                        <Field
                          name="sku"
                          type="text"
                          className={
                            "form-control" +
                            (errors.name && touched.name ? " is-invalid" : "")
                          }
                        />
                        <ErrorMessage
                          name="sku"
                          component="div"
                          className="invalid-feedback"
                        />
                      </div>
                      <div className="form-group">
                        <label className="col-form-label categories-basic">
                          <span>*</span>
                          Category
                        </label>
                        <Field
                          name="category"
                          as="select"
                          className={
                            "form-control" +
                            (errors.category && touched.category
                              ? " is-invalid"
                              : "")
                          }
                        >
                          <option value="/">--Select--</option>
                          {categoryItems.map((category) => (
                            <option value={category.path} key={category._id}>
                              {category.name}
                            </option>
                          ))}
                        </Field>
                        <ErrorMessage
                          name="category"
                          component="div"
                          className="invalid-feedback"
                        />
                      </div>
                      <ImageUpload
                        productImagesObj={{ productImages, setProductImages }}
                        existingImages={existingImages}
                        requiredImageObj={{
                          requiredImageMessage,
                          setRequiredImageMessage,
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-6">
                <div className="card">
                  <div className="card-header">
                    <h5>Product Detail</h5>
                  </div>
                  <div className="card-body">
                    <div className="digital-add needs-validation">
                      <TextEditor
                        labelName="Description"
                        initialValues={initialValues}
                        setFieldValue={setFieldValue}
                        descriptionObj={{
                          description,
                          setDescription,
                        }}
                      />
                      <div className="form-group">
                        <label
                          htmlFor="validationCustomtitle"
                          className="col-form-label pt-0"
                        >
                          {" "}
                          Model
                        </label>
                        <Field
                          name="model"
                          type="text"
                          className="form-control"
                        />
                      </div>
                      <div className="form-group">
                        <label className="col-form-label categories-basic">
                          Brand
                        </label>
                        <Field
                          name="brand"
                          as="select"
                          className="form-control"
                        >
                          <option value="/">--Select--</option>
                          {categoryItems.map((category) => (
                            <option value={category.path} key={category._id}>
                              {category.name}
                            </option>
                          ))}
                        </Field>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header">
                    <h5>Product Statistics</h5>
                  </div>
                  <div className="card-body">
                    <div className="digital-add needs-validation">
                      <div className="form-group">
                        <label
                          htmlFor="validationCustom02"
                          className="col-form-label"
                        >
                          <span>*</span>
                          Product Price
                        </label>
                        <Field
                          name="basePrice"
                          type="text"
                          className={
                            "form-control" +
                            (errors.name && touched.name ? " is-invalid" : "")
                          }
                        />
                        <ErrorMessage
                          name="basePrice"
                          component="div"
                          className="invalid-feedback"
                        />
                      </div>
                      <div className="form-group">
                        <label
                          htmlFor="validationCustom05"
                          className="col-form-label pt-0"
                        >
                          {" "}
                          Total Stock Count
                        </label>
                        <Field
                          name="totalStockCount"
                          type="text"
                          className={
                            "form-control" +
                            (errors.name && touched.name ? " is-invalid" : "")
                          }
                        />
                        <ErrorMessage
                          name="totalStockCount"
                          component="div"
                          className="invalid-feedback"
                        />
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
