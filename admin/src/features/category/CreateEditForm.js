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
    const [initialValues, setInitialValues] = useState({
        name: '',
        parent: ''
    });
    const [finishFormSubmit, setFinishFormSubmit] = useState(false);

    useEffect(() => {

        if (id !== 0) {
            console.log('here ', id);
            const category = categoryItems.filter(category => category._id === id)[0];
            // Object.keys(initialValues).map((key) => {
            //     console.log(key);
            //     setInitialValues(prevState => ({
            //         ...prevState,
            //         [key]: category[key]
            //     }))
            // })
                setInitialValues(prevState => ({
                    ...prevState,
                    name: category['name'],
                    parent: category['parent']
                }))
        }
        // return () => {
        //     console.log('hello');
        //     setInitialValues({
        //         name: '',
        //         parent: ''
        //     });
        // };
    }, [id]);
    const validationSchema = Yup.object().shape({
        name: Yup.string()
            .required('Name is required')
    });

    // function onSubmit(categoryFields) {
    //     const returnResult = '';
    //     console.log('Category Field: ', categoryFields);
    //
    //     if (id === 0) {
    //         const returnResult = dispatch(createCategory(categoryFields));
    //     } else {
    //         const returnResult = dispatch(updateCategory({id, categoryFields}));
    //     }
    //     console.log('Return Result ', returnResult);
    // }
    const onSubmit = async (categoryFields) => {
        try {
            if (id === 0) {
                await dispatch(createCategory(categoryFields)).unwrap();
            }else {
                await dispatch(updateCategory({id, categoryFields})).unwrap();
            }
        } catch (err) {
            console.error('Failed to save the post: ', err)
        } finally {
            // setAddRequestStatus('idle')
        }
    }

    return (
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit} enableReinitialize={true}>
            {/*{const render = ({ errors, touched, isSubmitting, setFieldValue }) => {*/}
            {function Render({ errors, touched, isSubmitting, setFieldValue }) {
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
                                {/*<div className="form-group">*/}
                                {/*    <button type="submit" disabled={isSubmitting} className="btn btn-primary">*/}
                                {/*        {isSubmitting && <span className="spinner-border spinner-border-sm mr-1"></span>}*/}
                                {/*        Save*/}
                                {/*    </button>*/}
                                {/*    /!*<Link to={isAddMode ? '.' : '..'} className="btn btn-link">Cancel</Link>*!/*/}
                                {/*</div>*/}
                            </div>
                            <div className="modal-footer">
                                <button type="submit" disabled={isSubmitting} className="btn btn-primary">
                                    {isSubmitting && <span className="spinner-border spinner-border-sm mr-1"></span>}
                                    Save
                                </button>
                                {/*<button className="btn btn-primary" type="button">Save</button>*/}
                                <button className="btn btn-secondary" type="button" onClick={toggleModal}>Close</button>
                            </div>
                        </div>
                    </Form>
                );
            }}
        </Formik>
    )
}
export default CreateEditForm;