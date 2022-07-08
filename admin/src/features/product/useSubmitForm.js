import { useDispatch } from "react-redux";
import { formatFormData } from "../../utility/helpers";

const useSubmitForm = () => {
  const dispatch = useDispatch();

  const submitForm = async (formDataObj, formActionObj) => {
    const { id, productFields, productImages, existingImages } = formDataObj;
    const { create, update } = formActionObj;
    const formData = formatFormData(
      productFields,
      productImages,
      existingImages
    );

    let status = "";
    let message = "";
    try {
      if (id !== 0) {
        await dispatch(update({ id, formData })).unwrap();
        message = "Updated Successfully!";
      } else {
        await dispatch(create(formData)).unwrap();
        message = "Created Successfully!";
      }
      status = "success";
      return { status, message };
    } catch (err) {
      status = "failure";
      message = err.name + ": " + err.message;
      return { status, message };
    }
  };

  const updateForm = (id, resetFormObj) => {
    const { resetForm, initialValues, setInitialValues } = resetFormObj;
    if (id !== 0) {
      resetForm();
    } else {
      const objKeys = Object.keys(initialValues).reduce((obj, char) => {
        obj[char] = "";
        return obj;
      }, {});
      setInitialValues((prevState) => ({
        ...prevState,
        ...objKeys,
      }));
    }
  };

  const showMessage = (showMessageObj) => {
    const { setStatusMessage, status, message } = showMessageObj;

    setStatusMessage((prevState) => ({
      ...prevState,
      status,
      message,
    }));

    setTimeout(() => {
      setStatusMessage({
        status: "",
        message: "",
      });
    }, 3000);
  };
  return { submitForm, updateForm, showMessage };

  // setStatusMessage((prevState) => ({
  //   ...prevState,
  //   status: "success",
  //   message: message,
  // }));
  // setProductImages([]);
  //   } catch (err) {
  //     console.error("Failed to save the post: ", err);
  //     return err;
  // setStatusMessage((prevState) => ({
  //   ...prevState,
  //   status: "error",
  //   message: err.name + ": " + err.message,
  // }));
  // setSubmitting(false);
  //   } finally {
  // setTimeout(() => {
  //   setStatusMessage({
  //     name: "",
  //     parent: "",
  //   });
  // }, 2000);
  //   }
};

export default useSubmitForm;
