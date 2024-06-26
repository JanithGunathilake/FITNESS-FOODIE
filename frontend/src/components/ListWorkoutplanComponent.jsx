import React, { useEffect, useState } from 'react';
import { listworkoutplans, deleteWorkoutplan } from '../services/WorkoutplanService';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { FiEdit, FiTrash } from 'react-icons/fi';

const WorkoutPlanCard = ({ workoutPlan, updateWorkoutPlan, removeWorkoutPlan }) => (
    <div className="card rounded">
        <div className="card-header">
            <div className="d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center">
                    <img className="img-xs rounded-circle" src="../images/t3.jpg" alt="" />
                    <div className="ml-2">
                        <p>Ayesh Ekanayaka</p>
                        <p className="tx-11 text-muted">Recently Updated</p>
                    </div>
                </div>
                <div className="dropdown">
                    <button className="btn p-0" type="button" id={`dropdownMenuButton_${workoutPlan.id}`} data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-more-horizontal icon-lg pb-3px">
                            <circle cx="12" cy="12" r="1"></circle>
                            <circle cx="19" cy="12" r="1"></circle>
                            <circle cx="5" cy="12" r="1"></circle>
                        </svg>
                    </button>
                    <div className="dropdown-menu" aria-labelledby={`dropdownMenuButton_${workoutPlan.id}`}>
                        <a className="dropdown-item d-flex align-items-center" href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-meh icon-sm mr-2">
                                <circle cx="12" cy="12" r="10"></circle>
                                <line x1="8" y1="15" x2="16" y2="15"></line>
                                <line x1="9" y1="9" x2="9.01" y2="9"></line>
                                <line x1="15" y1="9" x2="15.01" y2="9"></line>
                            </svg> <span className="">Unfollow</span></a>
                        <a className="dropdown-item d-flex align-items-center" href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-corner-right-up icon-sm mr-2">
                                <polyline points="10 9 15 4 20 9"></polyline>
                                <path d="M4 20h7a4 4 0 0 0 4-4V4"></path>
                            </svg> <span className="">Go to post</span></a>
                        <a className="dropdown-item d-flex align-items-center" href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-share-2 icon-sm mr-2">
                                <circle cx="18" cy="5" r="3"></circle>
                                <circle cx="6" cy="12" r="3"></circle>
                                <circle cx="18" cy="19" r="3"></circle>
                                <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
                                <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
                            </svg> <span className="">Share</span></a>
                        <a className="dropdown-item d-flex align-items-center" href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-copy icon-sm mr-2">
                                <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                            </svg> <span className="">Copy link</span></a>
                    </div>
                </div>
            </div>
        </div>
        <div className="card-body" style={{ position: 'relative', backgroundColor: 'lightyellow' }}>
            <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '10px', position: 'absolute', top: '10px', right: '10px' }}>
                <div style={{ marginRight: '20px' }} onClick={() => updateWorkoutPlan(workoutPlan.wid)} className="icon-container">
                    <FiEdit className="edit-icon" size={20} />
                </div>
                <div onClick={() => removeWorkoutPlan(workoutPlan.wid)} className="icon-container">
                    <FiTrash className="delete-icon" size={20} />
                </div>
            </div>

            <p className="mb-3 tx-14"><strong>Workout Plan Name:</strong> {workoutPlan.planName}</p>
            <p className="mb-3 tx-14"><strong>Workout Plan Description:</strong> {workoutPlan.planDescription}</p>
            {/* Display additional workout plan details */}
        </div>
        <div className="card-footer">
            <div className="d-flex justify-content-end post-actions">
                <a href="javascript:;" className="d-flex align-items-center text-muted mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-heart icon-md">
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                    </svg>
                    <p className="d-none d-md-block ml-2 " style={{ marginRight: '20px' }}></p>
                </a>
                <a href="javascript:;" className="d-flex align-items-center text-muted mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-message-square icon-md">
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                    </svg>
                    <p className="d-none d-md-block ml-2" style={{ marginRight: '20px' }}></p>
                </a>
                <a href="javascript:;" className="d-flex align-items-center text-muted">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-share icon-md">
                        <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path>
                        <polyline points="16 6 12 2 8 6"></polyline>
                        <line x1="12" y1="2" x2="12" y2="15"></line>
                    </svg>
                    <p className="d-none d-md-block ml-2"></p>
                </a>
            </div>
        </div>
    </div>
);

const ListWorkoutplanComponent = () => {
    const [workoutPlans, setWorkoutPlans] = useState([]);
    const navigator = useNavigate([]);

    useEffect(() => {
        getAllWorkoutPlans();
    }, []);

    function getAllWorkoutPlans() {
        listworkoutplans()
            .then(response => {
                setWorkoutPlans(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    }

    function updateWorkoutPlan(id) {
        navigator(`/updateworkoutplan/${id}`);
    }

    function removeWorkoutPlan(id) {
        deleteWorkoutplan(id)
            .then(response => {
                toast.success("Workout plan deleted successfully");
                getAllWorkoutPlans();
            })
            .catch(error => {
                console.error(error);
            });
    }

    return (
        <div>
            <div className="scrollable-cards-container" style={{ height: '1000px', overflowY: 'scroll' }}>
                {workoutPlans.map(workoutPlan => (
                    <div className="card rounded mb-4" key={workoutPlan.id}>
                        <WorkoutPlanCard
                            workoutPlan={workoutPlan}
                            updateWorkoutPlan={updateWorkoutPlan}
                            removeWorkoutPlan={removeWorkoutPlan}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ListWorkoutplanComponent;
