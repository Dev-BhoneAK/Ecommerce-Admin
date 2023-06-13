import React, { useEffect, useContext } from "react";
import CreateEditForm from "./CreateEditForm";
import { CreateEditContext } from "../../components/common/CreateEditContext";

const CreateEditModal = () => {
  const createEditContext = useContext(CreateEditContext);
  const { modal, toggleModal } = createEditContext;

  return (
    <>
      <div
        className={`modal fade ${modal ? "show" : "hide"}`}
        id="exampleModal"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title f-w-600" id="exampleModalLabel">
                Add Category
              </h5>
              <button
                className="btn-close"
                type="button"
                onClick={toggleModal}
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <CreateEditForm />
          </div>
        </div>
      </div>
      <div
        className={`modal-backdrop fade ${modal ? "show" : "hide"}`}
        id="backdrop"
      ></div>
    </>
  );
};
export default CreateEditModal;
