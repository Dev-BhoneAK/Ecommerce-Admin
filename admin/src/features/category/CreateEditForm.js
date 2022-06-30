import React,{useContext} from 'react';
import {useDispatch} from "react-redux";
import {ErrorMessage, Field, Form, Formik} from "formik";
import {Link} from "react-router-dom";
import * as Yup from "yup";
import {CreateEditContext} from './CreateEditContext';
import {createCategory} from './categorySlice';

const CreateEditForm = () => {

    const dispatch = useDispatch();
    const createEditContext = useContext(CreateEditContext);
    const {categoryItems, toggleModal} = createEditContext;
    const initialValues = {
        name: '',
        parent: ''
    };

    const validationSchema = Yup.object().shape({
        name: Yup.string()
            .required('Name is required')
    });

    function onSubmit(categoryFields) {
        console.log(fields);
        dispatch(createCategory(categoryFields));
        // setStatus();
        // if (isAddMode) {
        //     createUser(fields, setSubmitting);
        // } else {
        //     updateUser(id, fields, setSubmitting);
        // }
    }

    return (
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
            {({ errors, touched, isSubmitting, setFieldValue }) => {

                // useEffect(() => {
                //     // if (!isAddMode) {
                //     //     // get user and set form fields
                //     //     userService.getById(id).then(user => {
                //     //         const fields = ['name', 'parent'];
                //     //         fields.forEach(field => setFieldValue(field, user[field], false));
                //     //         setUser(user);
                //     //     });
                //     // }
                // }, []);

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