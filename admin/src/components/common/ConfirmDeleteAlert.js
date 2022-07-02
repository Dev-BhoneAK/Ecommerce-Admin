import React,{useState} from 'react';
import {useDispatch} from "react-redux";

const ConfirmDeleteAlert = ({value}) => {

    const dispatch = useDispatch();
    const { confirmDeleteAlert, toggleAlert, id, title, deleteTo} = value;
    const [statusMessage, setStatusMessage] = useState({
        status: '',
        message: ''
    });

    const confirmDelete = async () => {
        try {
            await dispatch(deleteTo(id)).unwrap();
            setStatusMessage(prevState => ({
                ...prevState,
                status : 'success',
                message: 'Item Deleted Successfully!'
            }));
        } catch (err) {
            setStatusMessage(prevState => ({
                ...prevState,
                status : 'error',
                message: err.name +': ' + err.message
            }));
        } finally {
            // setAddRequestStatus('idle')
        }
    }
    return (
        <>
            <div className={`modal fade ${confirmDeleteAlert ? 'show' : 'hide'}`} id="exampleModal">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title f-w-600" id="exampleModalLabel">Delete {title}</h5>
                            <button className="btn-close" type="button" onClick={toggleAlert} aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <h5>Are you sure you want to delete?</h5>
                            <div className="status-message">
                                {statusMessage?.status === 'success' ? (
                                    <h5 className="text-success f-w-600">{statusMessage?.message}</h5>
                                ) : (
                                    <h5 className="text-danger f-w-600">{statusMessage?.message}</h5>
                                )}
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="submit" className="btn btn-primary" onClick={confirmDelete}>
                                Delete
                            </button>
                            <button className="btn btn-secondary" type="button" onClick={toggleAlert}>Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`modal-backdrop fade ${confirmDeleteAlert ? 'show' : 'hide'}`} id="backdrop"></div>
        </>
    )
}
export default ConfirmDeleteAlert;