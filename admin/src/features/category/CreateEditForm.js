import React,{useContext, useEffect, useState} from 'react';
import {useDispatch} from "react-redux";
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup";
import {CreateEditContext} from './CreateEditContext';
import {createCategory, updateCategory} from './categorySlice';

const CreateEditForm = () => {

    const dispatch = useDispatch();
    const createEditContext = useContext(CreateEditContext);
    const {categoryItems, toggleModal, id} = createEditContext;
    const [statusMessage, setStatusMessage] = useState({
        status: '',
        message: ''
    });
    const [initialValues, setInitialValues] = useState({
        name: '',
        parent: ''
    });

    useEffect(() => {

        if (id !== 0) {
            const category = categoryItems.filter(category => category._id === id)[0];
            // Object.keys(initialValues).map((key) => {
            //     console.log(key);
            //     setInitialValues(prevState => ({
            //         ...prevState,
            //         [key]: category[key]
            //     }))
            // })
            // const objKeys = Object.keys(initialValues).forEach((key) => ({
            //     [key]: category[key]
            // }));
            const objKeys = Object.keys(initialValues).reduce((obj, char, index) => {
                obj[char] = category[char];
                return obj;
            }, {});
            console.log('objKeys ', objKeys);
            // setInitialValues(prevState => (Object.keys(initialValues).map((key) => ({ ...prevState, [key]: category[key] }))));
            // setInitialValues(Object.keys(initialValues).map((key, prevState) =>
            //     ({ ...prevState, [key]: category[key] })));
                setInitialValues(prevState => ({
                    ...prevState,
                    ...objKeys
                }))
        }
    }, [id]);
    const validationSchema = Yup.object().shape({
        name: Yup.string()
            .required('Name is required')
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
            {({ errors, touched, isSubmitting, setFieldValue }) => {
                // useEffect(() => {
                //     if (id !== 0) {
                //         console.log('here ');
                //         const category = categoryItems.filter(category => category._id === id);
                //         console.log('category ', category);
                //         const fields = ['name'];
                //         setFieldValue('name', category['name'], false);
                //         // fields.forEach(field => setFieldValue(field, category[field], false));
                //     }
                // }, [id, setFieldValue]);

                return (
                    <Form>
                        <div className="modal-body">
                            <div className="form">
                                <div className="form-group">
                                    <label className="mb-1">Category Name :</label>
                                    <Field name="name" type="text" className={'form-control' + (errors.name && touched.name ? ' is-invalid' : '')} />
                                    <ErrorMessage name="name" component="div" className="invalid-feedback" />
                                </div>
                                <div className="form-group mb-0">
                                    <label className="mb-1">Parent Category :</label>
                                    <Field name="parent" as="select" className={'form-control' + (errors.parent && touched.parent ? ' is-invalid' : '')}>
                                        <option value="/">--Select--</option>
                                        {
                                            categoryItems.map(category => (
                                                <option value={category.path} key={category._id}>{category.name}</option>
                                            ))
                                        }
                                    </Field>
                                    <ErrorMessage name="parent" component="div" className="invalid-feedback" />
                                </div>
                                <div className="form-group status-message">
                                    {statusMessage?.status === 'success' ? (
                                        <h5 className="text-success f-w-600">{statusMessage?.message}</h5>
                                    ) : (
                                        <h5 className="text-danger f-w-600">{statusMessage?.message}</h5>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="submit" disabled={isSubmitting} className="btn btn-primary">
                                {isSubmitting && <span className="spinner-border spinner-border-sm mr-1"></span> }
                                {statusMessage?.status === 'success' && <i className="fa fa-check" aria-hidden="true" /> }
                                Save
                            </button>
                            <button className="btn btn-secondary" type="button" onClick={toggleModal}>Close</button>
                        </div>
                    </Form>
                );
            }}
        </Formik>
    )
}
export default CreateEditForm;