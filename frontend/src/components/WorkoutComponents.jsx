import React, { useEffect, useState } from 'react';
import { addWorkoutPlan, getWorkoutPlan, updateWorkoutPlan } from '../services/WorkoutplanService';
import { useNavigate, useParams } from 'react-router-dom';
import toast from 'react-hot-toast';

const AddWorkoutPlanComponent = () => {
  const [planName, setPlanName] = useState('');
  const [planDescription, setPlanDescription] = useState('');
  const [errors, setErrors] = useState({
    planName: '',
    planDescription: ''
  });
  
  const { wid } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (wid) {
        getWorkoutPlan(wid)
        .then((response) => {
          setPlanName(response.data.planName);
          setPlanDescription(response.data.planDescription);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [wid]);

  function saveOrUpdateWorkoutPlan(e) {
    e.preventDefault();

    const workoutPlan = { planName, planDescription };

    if (validateForm()) {
      if (wid) {
        updateWorkoutPlan(wid, workoutPlan)
          .then((response) => {
            console.log(response.data);
            toast.success('Workout plan updated successfully');
            setTimeout(() => {
              navigate('/profile/workout');
            }, 2000);
          })
          .catch((error) => {
            console.error(error);
          });
      } else {
        addWorkoutPlan(workoutPlan)
          .then((response) => {
            console.log(response.data);
            toast.success('Workout plan added successfully');
            setPlanName('');
            setPlanDescription('');
            setTimeout(() => {
              navigate('/profile/workout');
            }, 2000);
          })
          .catch((error) => {
            console.error(error);
          });
      }
    }
  }

  function validateForm() {
    let valid = true;
    const errorsCopy = { ...errors };

    if (!planName.trim()) {
      errorsCopy.planName = 'Plan name is required';
      valid = false;
    } else {
      errorsCopy.planName = '';
    }

    if (!planDescription.trim()) {
      errorsCopy.planDescription = 'Plan description is required';
      valid = false;
    } else {
      errorsCopy.planDescription = '';
    }

    setErrors(errorsCopy);
    return valid;
  }

  return (
    <div className='container'>
      <br />
      <br />
      <div className='row'>
        <div className='card col-md-6 offset-md-3 offset-md-3'>
          <h2 className='text-center'>{wid ? 'Update Workout Plan' : 'Add Workout Plan'}</h2>
          <div className='card-body'>
            <form>
              <div className='form-group'>
                <label htmlFor='planName'>Plan Name:</label>
                <input
                  type='text'
                  id='planName'
                  className={`form-control ${errors.planName ? 'is-invalid' : ''}`}
                  value={planName}
                  onChange={(e) => setPlanName(e.target.value)}
                />
                {errors.planName && <div className='invalid-feedback'>{errors.planName}</div>}
              </div>
              <div className='form-group'>
                <label htmlFor='planDescription'>Plan Description:</label>
                <textarea
                  id='planDescription'
                  className={`form-control ${errors.planDescription ? 'is-invalid' : ''}`}
                  value={planDescription}
                  onChange={(e) => setPlanDescription(e.target.value)}
                />
                {errors.planDescription && <div className='invalid-feedback'>{errors.planDescription}</div>}
              </div>
              <div className='d-flex justify-content-end'>
                <button type='submit' className='btn btn-primary' onClick={saveOrUpdateWorkoutPlan}>
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddWorkoutPlanComponent;