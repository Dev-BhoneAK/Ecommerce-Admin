import React, { useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import sanitizeHtml from "sanitize-html";

const TextEditor = ({
  labelName,
  initialValues,
  setFieldValue,
  descriptionObj,
}) => {
  const { description, setDescription } = descriptionObj;
  const sanitizeConfig = {
    allowedTags: [],
    allowedAttributes: {},
  };
  return (
    <div className="form-group">
      <label className="col-form-label pt-0"> {labelName}</label>
      <div className="description-sm">
        <CKEditor
          editor={ClassicEditor}
          data={initialValues?.description}
          onFocus={() => {
            setDescription((prevState) => ({
              ...prevState,
              status: true,
            }));
          }}
          onChange={(event, editor) => {
            const data = editor.getData();
            setFieldValue("description", data);
          }}
          onBlur={(event, editor) => {
            setDescription((prevState) => ({
              ...prevState,
              count: sanitizeHtml(editor.getData(), sanitizeConfig).length,
            }));
          }}
        />
      </div>
      {!description.status && (
        <div className="required-image">Product Description is required.</div>
      )}
    </div>
  );
};

export default TextEditor;
