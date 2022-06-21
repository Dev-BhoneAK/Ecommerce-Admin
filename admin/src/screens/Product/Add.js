import React, {useState, useEffect} from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Dropzone from 'react-dropzone';
import Dashboard from "../../components/common/Dashboard";

const Add = () => {

    const breadCrumbArr = ['Product', 'Add Product'];
    const [heroFiles, setHeroFiles] = useState([]);
    const fileGenerator = (acceptedFiles) => {
        const files = acceptedFiles.map(file => Object.assign(file, {
            preview: URL.createObjectURL(file)
        }));
        return files;
    }

    // useEffect(() => {
    //     heroFiles[0] && console.log(heroFiles[0][0].path);
    // },[heroFiles]);
    return (
        <Dashboard breadCrumbArr={breadCrumbArr}>
            <div className="container-fluid">
                <div className="row product-adding">
                    <div className="col-xl-6">
                        <div className="card">
                            <div className="card-header">
                                <h5>General</h5>
                            </div>
                            <div className="card-body">
                                <div className="digital-add needs-validation">
                                    <div className="form-group">
                                        <label htmlFor="validationCustom01"
                                               className="col-form-label pt-0"><span>*</span>
                                            Title</label>
                                        <input className="form-control" id="validationCustom01" type="text" required="" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="validationCustomtitle"
                                               className="col-form-label pt-0"><span>*</span> SKU</label>
                                        <input className="form-control" id="validationCustomtitle" type="text"
                                               required="" />
                                    </div>
                                    <div className="form-group">
                                        <label className="col-form-label categories-basic"><span>*</span>
                                            Categories</label>
                                        <select className="custom-select form-control" required="">
                                            <option value="">--Select--</option>
                                            <option value="1">eBooks</option>
                                            <option value="2">Graphic Design</option>
                                            <option value="3">3D Impact</option>
                                            <option value="4">Application</option>
                                            <option value="5">Websites</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label className="col-form-label">Sort Summary</label>
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
                                    <div className="form-group">
                                        <label htmlFor="validationCustom02" className="col-form-label"><span>*</span>
                                            Product Price</label>
                                        <input className="form-control" id="validationCustom02" type="text" required="" />
                                    </div>
                                    <div className="form-group">
                                        <label className="col-form-label"><span>*</span> Status</label>
                                        <div className="m-checkbox-inline mb-0 custom-radio-ml d-flex radio-animated">
                                            <label className="d-block" htmlFor="edo-ani">
                                                <input className="radio_animated" id="edo-ani" type="radio"
                                                       name="rdo-ani" />
                                                    Enable
                                            </label>
                                            <label className="d-block" htmlFor="edo-ani1">
                                                <input className="radio_animated" id="edo-ani1" type="radio"
                                                       name="rdo-ani" />
                                                    Disable
                                            </label>
                                        </div>
                                    </div>
                                    <label className="col-form-label pt-0"> Product Upload</label>
                                    <Dropzone  onDrop={(acceptedFiles) => {
                                        setHeroFiles(prevState => [...prevState, acceptedFiles.map(file => Object.assign(file, {
                                            preview: URL.createObjectURL(file)
                                        }))]);
                                        // setHeroFiles(acceptedFiles.map(file => Object.assign(file, {
                                        //     preview: URL.createObjectURL(file)
                                        // })));
                                    }} name="heroImage" multiple={true}>
                                        {({getRootProps, getInputProps}) => (
                                            <div {...getRootProps({className: 'dropzone'})}>
                                                <input {...getInputProps()} />
                                                <span style={{ fontSize: ".8rem" }}>
                                                Drop hero image here, or click to select file
                                           </span>
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
                                <h5>Add Description</h5>
                            </div>
                            <div className="card-body">
                                <div className="digital-add needs-validation">
                                    <div className="form-group mb-0">
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
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-header">
                                <h5>Meta Data</h5>
                            </div>
                            <div className="card-body">
                                <div className="digital-add needs-validation">
                                    <div className="form-group">
                                        <label htmlFor="validationCustom05" className="col-form-label pt-0"> Meta
                                            Title</label>
                                        <input className="form-control" id="validationCustom05" type="text" required="" />
                                    </div>
                                    <div className="form-group">
                                        <label className="col-form-label">Meta Description</label>
                                        <textarea rows="4" cols="12"></textarea>
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
            </div>
        </Dashboard>
    )
}
export default Add;