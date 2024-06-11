import React,{useEffect, useState} from 'react'
import { listMeals,deleteMeal } from '../services/MealService'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast';
import { FiEdit, FiTrash } from 'react-icons/fi';



const MealCard = ({ meal, updateMeal, removeMeal }) => (


      <div className="card rounded">
          <div className="card-header">
              <div className="d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center">
                      <img className="img-xs rounded-circle" src="../images/t3.jpg" alt="" />
                      <div className="ml-2">
                          <p>Danesh Perera</p>
                          <p className="tx-11 text-muted">1 min ago</p>
                      </div>
                  </div>

                  
                     
                  <div style={{ marginLeft: '500px' }} onClick={() => updateMeal(meal.id)} className="icon-container">
                <FiEdit className="edit-icon" size={20}  /> 
            </div>
            <div onClick={() => removeMeal(meal.id)} className="icon-container">
                <FiTrash className="delete-icon" size={20}  /> 
            </div>
   
                  
              </div>
          </div>
          <div className="card-body" style={{ 
  position: 'relative', 
  backgroundImage: 'url(\'../images/b2.jpg\')', 
  backgroundSize: 'cover', 
  backgroundRepeat: 'no-repeat', 
  
  
}}>
  <div style={{ 
    display: 'flex', 
    justifyContent: 'flex-end', 
    marginBottom: '10px', 
    position: 'absolute', 
    top: '10px', 
    right: '10px' 
  }}>
   
  </div>

  <p className="mb-3 tx-14" style={{ color: 'white' }} ><strong>Time:</strong> {meal.time}</p>
  <p className="mb-3 tx-14" style={{ color: 'white' }}><strong>Meal Name:</strong> {meal.mealName}</p>
  <p className="mb-3 tx-14" style={{ color: 'white' }}><strong>Ingredients:</strong> {meal.ingredient}</p>
  <p className="mb-3 tx-14" style={{ color: 'white' }}><strong>Description:</strong> {meal.description}</p>
</div>



          <div className="card-footer">
          <div className="d-flex justify-content-end post-actions">
      <a href="javascript:;" className="d-flex align-items-center text-muted mr-4">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-heart icon-md">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
          </svg>
          <p className="d-none d-md-block ml-2 " style={{ marginRight: '20px' }}></p>
      </a>
      <a href="javascript:;" className="d-flex align-items-center text-muted mr-4">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-message-square icon-md">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
          </svg>
          <p className="d-none d-md-block ml-2"style={{ marginRight: '20px' }}></p>
      </a>
      <a href="javascript:;" className="d-flex align-items-center text-muted">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-share icon-md">
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





  
  const ListMealComponent = () => {
        const [meals, setMeals] = useState([]);
    const navigator = useNavigate([]);

    

    useEffect(() => {
        getAllMeals();
    }, []);



    function getAllMeals() {
        listMeals()
            .then((response) => {
                setMeals(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    }

    function addNewMeal() {
        navigator('/addmeal');
    }

    function updateMeal(id) {
        navigator(`/updatemeal/${id}`);
    }

    function removeMeal(id) {
        deleteMeal(id)
            .then(response => {
                toast.success("Meal plan deleted successfully");
                getAllMeals();
            })
            .catch(error => {
                console.error(error);
            });
    }
    return (
      <div>
             
            <div className="scrollable-cards-container" style={{ height: '1000px', overflowY: 'scroll' }}>
                    {meals.map(meal => (
                        <div className="card rounded mb-4" key={meal.id}>
                            <MealCard
                                meal={meal}
                                updateMeal={updateMeal}
                                removeMeal={removeMeal}
                            />
                        </div>
                    ))}
                </div>
       
           
      </div>
    )
  }
  
  export default ListMealComponent




