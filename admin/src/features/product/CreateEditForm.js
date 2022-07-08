import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { fetchCategories } from "../category/categorySlice";
import { getProductById } from "../product/productSlice";
import { createProduct, updateProduct } from "./productSlice";
import ImageUpload from "../../components/common/ImageUpload";
import useSubmitForm from "./useSubmitForm";

const CreateEditForm = (props) => {
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

  const dispatch = useDispatch();
  const { submitForm, updateForm, showMessage } = useSubmitForm();
  const productState = useSelector((state) => state.product);
  useEffect(() => {
    dispatch(fetchCategories());
    if (props.id && props.id !== 0) {
      const product = getProductById(productState, props.id);

      const productInfo = product.info;
      const productDetail = product.detail;
      const productPrice = product.pricing;

      const productObj = {
        ...productInfo,
        ...productDetail,
        ...productPrice,
        totalStockCount: product.totalStockCount,
      };

      const objKeys = Object.keys(initialValues).reduce((obj, char, index) => {
        obj[char] = productObj[char];
        return obj;
      }, {});
      setInitialValues((prevState) => ({
        ...prevState,
        ...objKeys,
      }));
      const concatImages = productObj.images.map((file) => ({
        preview: file,
        key: existingImages.length + productObj.images.length,
      }));
      setexistingImages(...existingImages, concatImages);
    }
  }, [productState]);

  const [productImages, setProductImages] = useState([]);
  const [existingImages, setexistingImages] = useState([]);

  const [statusMessage, setStatusMessage] = useState({
    status: "",
    message: "",
  });

  // For Datatable Component Rendering
  const category = useSelector((state) => state.category);
  const categoryItems = category.categoryItems;

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Product Name is required"),
    // sku: Yup.string()
    //     .required('Product SKU is required'),
    // category: Yup.string()
    //     .required('Product Category is required'),
    // images: Yup.string()
    //     .required('Product image is required'),
    // description: Yup.string()
    //     .required('Product description is required'),
    // basePrice: Yup.string()
    //     .required('Product Price is required'),
    // totalStockCount: Yup.string()
    //     .required('Total Stock Count is required'),
  });

  const onSubmit = async (productFields, { resetForm, setSubmitting }) => {
    const id = props.id ? props.id : 0;
    console.log("id props ", id);
    const formDataObj = { id, productFields, productImages, existingImages };
    const formActionObj = { create: createProduct, update: updateProduct };
    const { status, message } = await submitForm(formDataObj, formActionObj);
    if (status === "success") {
      updateForm(id, { resetForm, initialValues, setInitialValues });
      setProductImages([]);
      setexistingImages([]);
      showMessage({ setStatusMessage, status, message: "Product " + message });
    } else {
      setSubmitting(false);
      showMessage({ setStatusMessage, status, message });
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      enableReinitialize={true}
    >
      {function Render({ errors, touched, isSubmitting, setFieldValue }) {
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
                            (errors.parent && touched.parent
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
                        errorMessage={ErrorMessage}
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
                      <div className="form-group">
                        <label className="col-form-label pt-0">
                          {" "}
                          Description
                        </label>
                        <div className="description-sm">
                          <CKEditor
                            editor={ClassicEditor}
                            data={initialValues?.description}
                            onReady={(editor) => {
                              console.log("Editor is ready to use!", editor);
                            }}
                            onChange={(event, editor) => {
                              setFieldValue("description", editor.getData());
                            }}
                            onBlur={(event, editor) => {
                              console.log("Blur.", editor);
                            }}
                            onFocus={(event, editor) => {
                              console.log("Focus.", editor);
                            }}
                          />
                        </div>
                      </div>
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
                          className={
                            "form-control" +
                            (errors.name && touched.name ? " is-invalid" : "")
                          }
                        />
                        <ErrorMessage
                          name="model"
                          component="div"
                          className="invalid-feedback"
                        />
                      </div>
                      <div className="form-group">
                        <label className="col-form-label categories-basic">
                          Brand
                        </label>
                        <Field
                          name="brand"
                          as="select"
                          className={
                            "form-control" +
                            (errors.parent && touched.parent
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
                          name="brand"
                          component="div"
                          className="invalid-feedback"
                        />
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
                          <div class="alert alert-success" role="alert">
                            {statusMessage.message}
                          </div>
                        )}
                        {statusMessage?.status === "failure" && (
                          <div class="alert alert-danger" role="alert">
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
