import axios from 'axios'

const REST_API_BASE_URL = 'http://localhost:8080/api/meals';

export const listMeals = ()=>axios.get(REST_API_BASE_URL);

export const addMeal = (meal)=>axios.post(REST_API_BASE_URL,meal);

export const getMeal = (mealId)=>axios.get(REST_API_BASE_URL+ '/'+ mealId);

export const updateMeal = (mealId,meal)=>axios.put(REST_API_BASE_URL+ '/'+ mealId,meal);

export const deleteMeal = (mealId)=>axios.delete(REST_API_BASE_URL+ '/'+ mealId);


