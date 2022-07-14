import React from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import sanitizeHtml from "sanitize-html";

const TextEditor = ({
  initialValues,
  setEditor,
  setFieldValue,
  descriptionObj,
}) => {
  const { description, setDescription } = descriptionObj;
  const sanitizeConfig = {
    allowedTags: [],
    allowedAttributes: {},
  };
  return (
    <div className="description-sm">
      <CKEditor
        editor={ClassicEditor}
        data={initialValues?.description}
        onReady={(editor) => {
          setEditor(editor);
        }}
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

      {!description.status && (
        <div className="required-image">{description.message}</div>
      )}
    </div>
  );
};

export default TextEditor;
