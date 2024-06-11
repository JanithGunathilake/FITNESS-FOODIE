import React, { useEffect, useState } from 'react';
import { listWorkStatus, deleteWorkStatus } from '../services/WorkStatusService'; // Assuming you have a service file for API calls
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { FiEdit, FiTrash } from 'react-icons/fi';

const WorkStatusCard = ({ workStatus, updateWorkStatus, removeWorkStatus }) => (
    <div className="card rounded">
        <div className="card-header">
            <div className="d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center">
                    <img className="img-xs rounded-circle" src="../images/t3.jpg" alt="" />
                    <div className="ml-2">
                        <p>{workStatus.userId}</p>
                        <p className="tx-11 text-muted">{workStatus.timestamp}</p>
                    </div>
                </div>
                <div style={{ marginLeft: '500px' }} onClick={() => updateWorkStatus(workStatus.id)} className="icon-container">
                    <FiEdit className="edit-icon" size={20} />
                </div>
                <div onClick={() => removeWorkStatus(workStatus.id)} className="icon-container">
                    <FiTrash className="delete-icon" size={20} />
                </div>
            </div>
        </div>
        <div className="card-body">
            <p className="mb-3 tx-14"><strong>Description:</strong> {workStatus.achievementDescription}</p>
            <p className="mb-3 tx-14"><strong>Distance Run:</strong> {workStatus.distanceRun}</p>
            <p className="mb-3 tx-14"><strong>Pushups Completed:</strong> {workStatus.pushupsCompleted}</p>
            <p className="mb-3 tx-14"><strong>Weight Lifted:</strong> {workStatus.weightLifted}</p>
        </div>
    </div>
);

const ListWorkStatusComponent = () => {
    const [workStatuses, setWorkStatuses] = useState([]);
    const navigator = useNavigate();

    useEffect(() => {
        getAllWorkStatuses();
    }, []);

    function getAllWorkStatuses() {
        listWorkStatus()
            .then(response => {
                setWorkStatuses(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    }

    function updateWorkStatus(id) {
        navigator(`/updatestatus/${id}`);
    }

    function removeWorkStatus(id) {
        deleteWorkStatus(id)
            .then(response => {
                toast.success("Work status deleted successfully");
                getAllWorkStatuses();
            })
            .catch(error => {
                console.error(error);
            });
    }



   

    function removeWorkStatus(id) {
        deleteWorkStatus(id)
            .then(response => {
                toast.success(" deleted successfully");
                getAllWorkStatuses();
            })
            .catch(error => {
                console.error(error);
            });
    }

    return (
        <div>
            <div className="scrollable-cards-container" style={{ height: '1000px', overflowY: 'scroll' }}>
                {workStatuses.map(workStatus => (
                    <div className="card rounded mb-4" key={workStatus.id}>
                        <WorkStatusCard
                            workStatus={workStatus}
                            updateWorkStatus={updateWorkStatus}
                            removeWorkStatus={removeWorkStatus}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ListWorkStatusComponent;