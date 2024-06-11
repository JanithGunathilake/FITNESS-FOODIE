import React, { useEffect, useState } from 'react';
import { addMeal, getMeal, updateMeal } from '../services/MealService';
import { useNavigate,useParams } from 'react-router-dom';
import toast from 'react-hot-toast';

const MealComponent = () => {
  const [time, setTime] = useState('');
  const [mealName, setMealName] = useState('');
  const [ingredient, setIngredient] = useState('');
  const [description, setDescription] = useState('');
  
  const {id}=useParams();
  const [errors, setErrors] = useState({
    time: '',
    mealName: '',
    ingredient: '',
    description: ''
  });

  const navigate = useNavigate();

  useEffect(()=>{
   if(id){
    getMeal(id).then((response)=>{
      setTime(response.data.time);
      setMealName(response.data.mealName);
      setIngredient(response.data.ingredient);
      setDescription(response.data.description);
    }).catch(error=>{
      console.error(error);
    })
   }
  },[id])

  function saveOrUpdateMeal(e) {
    e.preventDefault();
    if (validateForm()) {

      const meal = { time, mealName, ingredient, description };
      console.log(meal);

      if(id){
        updateMeal(id,meal).then((response)=>{
          console.log(response.data);
          toast.success("Meal plan updated successfully");
          setTimeout(() => {
            navigate('/profile/meal');
          }, 2000);
        }).catch(error=>{
          console.error(error)
        })
      }else{

        addMeal(meal).then((response) => {
          console.log(response.data);
  
          toast.success("Meal plan added successfully");
          setTime("");
          setMealName("");
          setIngredient("");
          setDescription("");
  
          setTimeout(() => {
            navigate('/profile/meal');
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
    if (!mealName.trim()) {
      errorsCopy.mealName = 'Meal name required';
      valid = false;
    } else {
      errorsCopy.mealName = '';
    }

    if (!time.trim()) {
      errorsCopy.time = 'Meal time required';
      valid = false;
    } else {
      errorsCopy.time = '';
    }

    if (!ingredient.trim()) {
      errorsCopy.ingredient = 'Ingredient required';
      valid = false;
    } else {
      errorsCopy.ingredient = '';
    }

    if (!description.trim()) {
      errorsCopy.description = 'Description required';
      valid = false;
    } else {
      errorsCopy.description = '';
    }

    setErrors(errorsCopy);
    return valid;
  }

  function pageTitle(){
    if(id){
      return <h2 className='text-center'>Update Meal Plan</h2>
    }else{
      return <h2 className='text-center'>Add Meal Plan</h2>
    }
  }





  return (
    
   
    <div className='container background-container' >
     
      <br /><br />
      <div className='row'>
        <div className='card col-md-6 offset-md-3 offset-md-3' style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
         {
          pageTitle()
         }
          <div className='card-body'>
            <form>
              <div className='form-group mb-2'>
                <label className='form-label'>Meal Time:</label>
                <select
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className={`form-control ${errors.time ? 'is-invalid' : ''}`}
                  required
                >
                  <option value=''>Select time</option>
                  <option value='breakfast'>Breakfast</option>
                  <option value='lunch'>Lunch</option>
                  <option value='dinner'>Dinner</option>
                </select>
                {errors.time && <div className='invalid-feedback'>{errors.time}</div>}
              </div>

              <div className='form-group mb-2'>
                <label className='form-label'>Meal Name:</label>
                <input
                  type='text'
                  placeholder=''
                  name='mealName'
                  value={mealName}
                  className={`form-control ${errors.mealName ? 'is-invalid' : ''}`}
                  onChange={(e) => setMealName(e.target.value)}
                  required
                />
                {errors.mealName && <div className='invalid-feedback'>{errors.mealName}</div>}
              </div>

              <div className='form-group mb-2'>
                <label className='form-label'>Meal Ingredients:</label>
                <textarea
                  placeholder=''
                  name='ingredient'
                  value={ingredient}
                  className={`form-control ${errors.ingredient ? 'is-invalid' : ''}`}
                  onChange={(e) => setIngredient(e.target.value)}
                  required
                />
                {errors.ingredient && <div className='invalid-feedback'>{errors.ingredient}</div>}
              </div>

              <div className='form-group mb-2'>
                <label className='form-label'>Meal Description:</label>
                <textarea
                  placeholder=''
                  name='description'
                  value={description}
                  className={`form-control ${errors.description ? 'is-invalid' : ''}`}
                  onChange={(e) => setDescription(e.target.value)}
                  required
                />
                {errors.description && <div className='invalid-feedback'>{errors.description}</div>}
              </div>
              <div className="d-flex justify-content-end">
                <button type="submit" className='btn btn-primary' onClick={saveOrUpdateMeal}>Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>

  )
}

export default MealComponent;




