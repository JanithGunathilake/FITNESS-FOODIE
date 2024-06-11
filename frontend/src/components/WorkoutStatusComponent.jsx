import React, { useEffect, useState } from 'react';

import { addworkStatus,getworkStatus,updateworkStatus } from '../services/WorkStatusService';
import { useNavigate,useParams } from 'react-router-dom';
import toast from 'react-hot-toast';

const WorkoutStatusComponent = () => {
  const [achievementDescription, setdes] = useState('');
  const [distanceRun, setdistance] = useState('');
  const [pushupsCompleted, setpushup] = useState('');
  const [weightLifted, setweight] = useState('');
  
  const {id}=useParams();
  const [errors, setErrors] = useState({
    achievementDescription: '',
    distanceRun: '',
    pushupsCompleted: '',
    weightLifted: ''
  });
  //efe
  const navigate = useNavigate();

  useEffect(()=>{
   if(id){
    getworkStatus(id).then((response)=>{
      setdes(response.data.achievementDescription);
      setdistance(response.data.distanceRun);
      setpushup(response.data.pushupsCompleted);
      setweight(response.data.weightLifted);
    }).catch(error=>{
      console.error(error);
    })
   }
  },[id])

  function saveOrUpdateStatus(e) {
    e.preventDefault();
    if (validateForm()) {

      const status = { achievementDescription, distanceRun, pushupsCompleted, weightLifted };
      console.log(status);

      if(id){
        updateworkStatus(id,status).then((response)=>{
          console.log(response.data);
          toast.success("Status updated successfully");
          setTimeout(() => {
            navigate('/profile/status');
          }, 2000);
        }).catch(error=>{
          console.error(error)
        })
      }else{

        addworkStatus(status).then((response) => {
          console.log(response.data);
  
          toast.success("status added successfully");
          setdes("");
          setdistance("");
          setpushup("");
          setweight("");
  
          setTimeout(() => {
            navigate('/profile/status');
          }, 2000);
        }).catch(error=>{
          console.error(error);
        })
      }
     


    }
  }

  function validateForm() {
    let valid = true;
    const errorsCopy = { ...errors };
    if (typeof achievementDescription === 'string' && !achievementDescription.trim()) {
      errorsCopy.achievementDescription = 'description required';
      valid = false;
    } else {
      errorsCopy.achievementDescription = '';
    }

    if (typeof distanceRun === 'string' && !distanceRun.trim()){
      errorsCopy.distanceRun = 'distance required';
      valid = false;
    } else {
      errorsCopy.distanceRun = '';
    }

    if (typeof pushupsCompleted === 'string' && !pushupsCompleted.trim()){
      errorsCopy.pushupsCompleted = 'pushup required';
      valid = false;
    } else {
      errorsCopy.pushupsCompleted = '';
    }

    if (typeof weightLifted === 'string' && !weightLifted.trim()){
      errorsCopy.weightLifted = 'weight required';
      valid = false;
    } else {
      errorsCopy.weightLifted = '';
    }

    setErrors(errorsCopy);
    return valid;
  }

  function pageTitle(){
    if(id){
      return <h2 className='text-center'>Update status Plan</h2>
    }else{
      return <h2 className='text-center'>Add workout status</h2>
    }
  }





  return (
    
   
    <div className='container'>
     
      <br /><br />
      <div className='row'>
        <div className='card col-md-6 offset-md-3 offset-md-3'>
         {
          pageTitle()
         }
          <div className='card-body'>
            <form>
        

              <div className='form-group mb-2'>
                <label className='form-label'>Description:</label>
                <textarea
                  type='text'
                  placeholder=''
                  name='description'
                  value={achievementDescription}
                  className={`form-control ${errors.achievementDescription ? 'is-invalid' : ''}`}
                  onChange={(e) => setdes(e.target.value)}
                  required
                />
                {errors.achievementDescription && <div className='invalid-feedback'>{errors.achievementDescription}</div>}
              </div>

              <div className='form-group mb-2'>
                <label className='form-label'>Distance:</label>
                <textarea
                  placeholder=''
                  name='distance'
                  value={distanceRun}
                  className={`form-control ${errors.distanceRun ? 'is-invalid' : ''}`}
                  onChange={(e) => setdistance(e.target.value)}
                  required
                />
                {errors.distanceRun && <div className='invalid-feedback'>{errors.distanceRun}</div>}
              </div>

              <div className='form-group mb-2'>
                <label className='form-label'>No of push-ups:</label>
                <textarea
                  placeholder=''
                  name='pushups'
                  value={pushupsCompleted}
                  className={`form-control ${errors.pushupsCompleted ? 'is-invalid' : ''}`}
                  onChange={(e) => setpushup(e.target.value)}
                  required
                />
                {errors.pushupsCompleted && <div className='invalid-feedback'>{errors.pushupsCompleted}</div>}
              </div>

              <div className='form-group mb-2'>
                <label className='form-label'>Lifted weight:</label>
                <textarea
                  placeholder=''
                  name='weight'
                  value={weightLifted}
                  className={`form-control ${errors.weightLifted ? 'is-invalid' : ''}`}
                  onChange={(e) => setweight(e.target.value)}
                  required
                />
                {errors.weightLifted && <div className='invalid-feedback'>{errors.weightLifted}</div>}
              </div>
              <div className="d-flex justify-content-end">
                <button type="submit" className='btn btn-primary' onClick={saveOrUpdateStatus}>Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>

  )
}

export default WorkoutStatusComponent;