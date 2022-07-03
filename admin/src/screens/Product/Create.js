import React, {useState, useEffect} from 'react';
import Breadcrumb from "../../components/common/Breadcrumb";
import CreateEditForm from '../../features/product/CreateEditForm';

const Create = () => {

    const breadCrumbArr = ['Product', 'Add Product'];

    // useEffect(() => {
    //     heroFiles[0] && console.log(heroFiles[0][0].path);
    // },[heroFiles]);
    return (
        <div className="page-body">
            <Breadcrumb  breadCrumbArr={breadCrumbArr} />
            <div className="container-fluid">
                <CreateEditForm />
            </div>
        </div>
    )
}
export default Create;