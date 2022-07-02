import React,{useContext, useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup";
import {createCategory, updateCategory} from './categorySlice';
import {fetchCategories} from "../category/categorySlice";
import Dropzone from "react-dropzone";
import {CKEditor} from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const CreateEditForm = () => {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchCategories());
    }, []);

    const [statusMessage, setStatusMessage] = useState({
        status: '',
        message: ''
    });
    const [initialValues, setInitialValues] = useState({
        name: '',
        parent: ''
    });

    // For Datatable Component Rendering
    const category = useSelector((state) => state.category);
    const categoryItems = category.categoryItems;

    const validationSchema = Yup.object().shape({
        title: Yup.string()
            .required('Title is required'),
        firstName: Yup.string()
            .required('First Name is required'),
        lastName: Yup.string()
            .required('Last Name is required'),
        email: Yup.string()
            .email('Email is invalid')
            .required('Email is required'),
        role: Yup.string()
            .required('Role is required'),
        password: Yup.string()
            .concat(isAddMode ? Yup.string().required('Password is required') : null)
            .min(6, 'Password must be at least 6 characters'),
        confirmPassword: Yup.string()
            .when('password', (password, schema) => {
                if (password || isAddMode) return schema.required('Confirm Password is required');
            })
            .oneOf([Yup.ref('password')], 'Passwords must match')
    });

    const onSubmit = async (categoryFields, {resetForm, setSubmitting}) => {
        console.log('onSubmit ', categoryFields);
        categoryFields.path = (categoryFields.parent === '' ? '/' : categoryFields.parent)+ '/' + categoryFields.name;
        try {
            let message = '';
            if (id === 0) {
                await dispatch(createCategory(categoryFields)).unwrap();
                message = 'Category Created Successfully!';
            }else {
                await dispatch(updateCategory({id, categoryFields})).unwrap();
                message = 'Category Updated Successfully!';
            }
            setStatusMessage(prevState => ({
                ...prevState,
                status : 'success',
                message: message
            }));
            resetForm();
        } catch (err) {
            console.error('Failed to save the post: ', err);
            setStatusMessage(prevState => ({
                ...prevState,
                status : 'error',
                message: err.name +': ' + err.message
            }));
            setSubmitting(false);
        } finally {
            setTimeout(() => {
                setStatusMessage({
                    name: '',
                    parent: ''
                })
            }, 2000);
        }
    }

    return (
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit} enableReinitialize={true}>
            {/*{const render = ({ errors, touched, isSubmitting, setFieldValue }) => {*/}
            {function Render({ errors, touched, isSubmitting, setFieldValue }) {
                return (
                    <Form>
                        <div className="row product-adding">
                            <div className="col-xl-6">
                                <div className="card">
                                    <div className="card-header">
                                        <h5>Product Info</h5>
                                    </div>
                                    <div className="card-body">
                                        <div className="digital-add needs-validation">
                                            <div className="form-group">
                                                <label htmlFor="validationCustom01"
                                                       className="col-form-label pt-0"><span>*</span>
                                                    Name</label>
                                                <Field name="name" type="text" className={'form-control' + (errors.name && touched.name ? ' is-invalid' : '')} />
                                                <ErrorMessage name="name" component="div" className="invalid-feedback" />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="validationCustomtitle"
                                                       className="col-form-label pt-0"><span>*</span> SKU</label>
                                                <Field name="sku" type="text" className={'form-control' + (errors.name && touched.name ? ' is-invalid' : '')} />
                                                <ErrorMessage name="sku" component="div" className="invalid-feedback" />
                                            </div>
                                            <div className="form-group">
                                                <label className="col-form-label categories-basic"><span>*</span>
                                                    Categories</label>
                                                <Field name="parent" as="select" className={'form-control' + (errors.parent && touched.parent ? ' is-invalid' : '')}>
                                                    <option value="/">--Select--</option>
                                                    {
                                                        categoryItems.map(category => (
                                                            <option value={category.path} key={category._id}>{category.name}</option>
                                                        ))
                                                    }
                                                </Field>
                                                <ErrorMessage name="parent" component="div" className="invalid-feedback" />
                                                <Field name="title" as="select" className={'form-control' + (errors.title && touched.title ? ' is-invalid' : '')}>
                                                    <option value=""></option>
                                                    <option value="Mr">Mr</option>
                                                    <option value="Mrs">Mrs</option>
                                                    <option value="Miss">Miss</option>
                                                    <option value="Ms">Ms</option>
                                                </Field>
                                                <ErrorMessage name="title" component="div" className="invalid-feedback" />
                                                <select className="custom-select form-control" required="">
                                                    <option value="">--Select--</option>
                                                    <option value="1">eBooks</option>
                                                    <option value="2">Graphic Design</option>
                                                    <option value="3">3D Impact</option>
                                                    <option value="4">Application</option>
                                                    <option value="5">Websites</option>
                                                </select>
                                            </div>
                                            <label className="col-form-label pt-0"> Image Upload</label>

                                            {/*<form className="custom-dropzone" id="singleFileUpload" action="/upload.php">*/}
                                            {/*    <div className="dz-message needsclick"><i className="fa fa-cloud-upload"></i>*/}
                                            {/*        <h4 className="mb-0 f-w-600">Drop files here or click to upload.</h4>*/}
                                            {/*    </div>*/}
                                            {/*</form>*/}
                                            {/*<div className="custom-dropzone" id="singleFileUpload" >*/}
                                            {/*    */}
                                            {/*</div>*/}
                                            <Dropzone onDrop={(acceptedFiles) => {
                                                setHeroFiles(prevState => [...prevState, acceptedFiles.map(file => Object.assign(file, {
                                                    preview: URL.createObjectURL(file)
                                                }))]);
                                                // setHeroFiles(acceptedFiles.map(file => Object.assign(file, {
                                                //     preview: URL.createObjectURL(file)
                                                // })));
                                            }} name="heroImage" multiple={true}>
                                                {({getRootProps, getInputProps}) => (
                                                    <div {...getRootProps({className: 'custom-dropzone'})}>
                                                        <div className="dz-message needsclick">
                                                            <input {...getInputProps()} />
                                                            <i className="fa fa-cloud-upload"></i>
                                                            <h4 className="mb-0 f-w-600">Drop files here or click to upload.</h4>
                                                        </div>
                                                        {/*<span style={{ fontSize: ".8rem" }}>*/}
                                                        {/*Drop hero image here, or click to select file*/}
                                                        {/*</span>*/}
                                                    </div>
                                                )}
                                            </Dropzone>
                                            {/*<Dropzone  onDrop={(acceptedFiles) => {*/}
                                            {/*        setHeroFiles(prevState => [...prevState, fileGenerator(acceptedFiles)]);*/}
                                            {/*    }} name="heroImage" multiple={false}>*/}
                                            {/*    {({getRootProps, getInputProps}) => (*/}
                                            {/*        <div {...getRootProps({className: 'dropzone'})}>*/}
                                            {/*            <input {...getInputProps()} />*/}
                                            {/*            <span style={{ fontSize: ".8rem" }}>*/}
                                            {/*                Drop hero image here, or click to select file*/}
                                            {/*           </span>*/}
                                            {/*        </div>*/}
                                            {/*    )}*/}
                                            {/*</Dropzone>*/}
                                            {
                                                heroFiles.length > 0 && heroFiles.map(hero => (
                                                    <img style={{ width: "200px", height: "200px", margin: "0", display: "block" }} src={hero[0] && hero[0].preview} alt="Hero Image"/>
                                                ))
                                            }
                                            {/*<section className="container custom-dropzone">*/}
                                            {/*    <div {...getRootProps({className: 'dropzone'})}>*/}
                                            {/*        <input {...getInputProps()} />*/}
                                            {/*        <i className="fa fa-cloud-upload" />*/}
                                            {/*        <h4 className="mb-0 f-w-600">Drop files here or click to upload.</h4>*/}
                                            {/*    </div>*/}
                                            {/*    <aside>*/}
                                            {/*        /!*<h4>Files</h4>*!/*/}
                                            {/*        <ul>{files}</ul>*/}
                                            {/*    </aside>*/}
                                            {/*</section>*/}
                                            {/*<form className="dropzone digits" id="singleFileUpload" action="/upload.php">*/}
                                            {/*    <div className="dz-message needsclick">*/}
                                            {/*        <i className="fa fa-cloud-upload" />*/}
                                            {/*        <h4 className="mb-0 f-w-600">Drop files here or click to upload.</h4>*/}
                                            {/*    </div>*/}
                                            {/*</form>*/}
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
                                                <label className="col-form-label pt-0"> Description</label>
                                                <div className="description-sm">
                                                    <CKEditor
                                                        editor={ ClassicEditor }
                                                        data="<p>Hello from CKEditor 5!</p>"
                                                        onReady={ editor => {
                                                            // You can store the "editor" and use when it is needed.
                                                            console.log( 'Editor is ready to use!', editor );
                                                        } }
                                                        onChange={ ( event, editor ) => {
                                                            const data = editor.getData();
                                                            console.log( { event, editor, data } );
                                                        } }
                                                        onBlur={ ( event, editor ) => {
                                                            console.log( 'Blur.', editor );
                                                        } }
                                                        onFocus={ ( event, editor ) => {
                                                            console.log( 'Focus.', editor );
                                                        } }
                                                    />
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="validationCustomtitle"
                                                       className="col-form-label pt-0"> Model</label>
                                                <input className="form-control" id="validationCustomtitle" type="text"
                                                       required="" />
                                            </div>
                                            <div className="form-group">
                                                <label className="col-form-label categories-basic">Brand</label>
                                                <select className="custom-select form-control" required="">
                                                    <option value="">--Select--</option>
                                                    <option value="1">eBooks</option>
                                                    <option value="2">Graphic Design</option>
                                                    <option value="3">3D Impact</option>
                                                    <option value="4">Application</option>
                                                    <option value="5">Websites</option>
                                                </select>
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
                                                <label htmlFor="validationCustom02" className="col-form-label"><span>*</span>
                                                    Product Price</label>
                                                <input className="form-control" id="validationCustom02" type="text" required="" />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="validationCustom05" className="col-form-label pt-0"> Total Stock Count</label>
                                                <input className="form-control" id="validationCustom05" type="text" required="" />
                                            </div>
                                            <div className="form-group mb-0">
                                                <div className="product-buttons">
                                                    <button type="button" className="btn btn-primary">Add</button>
                                                    <button type="button" className="btn btn-light">Discard</button>
                                                </div>
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
    )
}
export default CreateEditForm;