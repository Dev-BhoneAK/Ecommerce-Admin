import React from "react";
import Dropzone from "react-dropzone";
import { ErrorMessage } from "formik";

const ImageUpload = ({
  productImagesObj,
  existingImages,
  requiredImageObj,
}) => {
  const { productImages, setProductImages } = productImagesObj;
  const { requiredImageMessage, setRequiredImageMessage } = requiredImageObj;
  const fileGenerator = (acceptedFiles) => {
    const files = acceptedFiles.map((file) =>
      Object.assign(file, {
        preview: URL.createObjectURL(file),
        key: productImages.length + acceptedFiles.length,
      })
    );
    setRequiredImageMessage(false);
    return files;
  };

  const removeImage = (key) => {
    productImages.length > 0 &&
      setProductImages(productImages.filter((image) => image.key !== key));
  };

  return (
    <>
      <label className="col-form-label pt-0"> Image Upload</label>
      <Dropzone
        onDrop={(acceptedFiles) => {
          setProductImages((prevState) => [
            ...prevState,
            ...fileGenerator(acceptedFiles),
          ]);
        }}
        name="images"
        accept={{ "image/*": [] }}
        multiple={true}
      >
        {({ getRootProps, getInputProps }) => (
          <div {...getRootProps({ className: "custom-dropzone" })}>
            <div className="dz-message needsclick">
              <input {...getInputProps()} />
              <i className="fa fa-cloud-upload"></i>
              <h4 className="mb-0 f-w-600">
                Drop files here or click to upload.
              </h4>
            </div>
          </div>
        )}
      </Dropzone>
      {requiredImageMessage && (
        <div className="required-image">Product Image is required.</div>
      )}
      <ErrorMessage
        name="images"
        component="div"
        className="invalid-feedback"
      />
      <div className="form-group show-images">
        {existingImages.length > 0 &&
          existingImages.map((image, index) => (
            <div className="image-area" key={index}>
              <img
                className="show-image"
                src={`http://localhost:8834/${image?.preview}`}
                alt="Product Image"
              />
              <a
                className="remove-image"
                onClick={() => removeImage(image.key)}
              >
                &#215;
              </a>
            </div>
          ))}
        {productImages.length > 0 &&
          productImages.map((image, index) => (
            <div className="image-area" key={index}>
              <img
                className="show-image"
                src={image?.preview}
                alt="Product Image"
              />
              <a
                className="remove-image"
                onClick={() => removeImage(image.key)}
              >
                &#215;
              </a>
            </div>
          ))}
      </div>
    </>
  );
};

export default ImageUpload;
