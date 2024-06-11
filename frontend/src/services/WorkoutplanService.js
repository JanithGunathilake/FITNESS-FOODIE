import axios from "axios";


const REST_API_BASE_URL = 'http://localhost:8080/api/workoutPlan_a';

export const listworkoutplans = () => axios.get(REST_API_BASE_URL);

export const addWorkoutPlan = (workoutPlan_a)=>axios.post(REST_API_BASE_URL,workoutPlan_a);

export const getWorkoutPlan = (wid)=>axios.get(REST_API_BASE_URL+ '/'+ wid);

export const updateWorkoutPlan = (wid,workoutPlan_a)=>axios.put(REST_API_BASE_URL+ '/'+ wid,workoutPlan_a);

export const deleteWorkoutplan = (wid)=>axios.delete(REST_API_BASE_URL+ '/'+ wid);
