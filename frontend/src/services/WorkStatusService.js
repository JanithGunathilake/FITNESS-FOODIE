import axios from 'axios'

const REST_API_BASE_URL = 'http://localhost:8080/api/status';

export const listWorkStatus = ()=>axios.get(REST_API_BASE_URL);

export const addworkStatus = (workStatus)=>axios.post(REST_API_BASE_URL,workStatus);

export const getworkStatus = (workStatusId)=>axios.get(REST_API_BASE_URL+ '/'+ workStatusId);

export const updateworkStatus = (workStatusId,workStatus)=>axios.put(REST_API_BASE_URL+ '/'+ workStatusId,workStatus);

export const deleteWorkStatus = (workStatusId)=>axios.delete(REST_API_BASE_URL+ '/'+ workStatusId);


