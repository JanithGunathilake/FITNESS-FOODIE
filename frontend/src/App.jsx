

import './App.css'

import ListMealComponent from './components/ListMealComponent'
import HeaderComponent from './components/HeaderComponent'
import FooterComponent from './components/FooterComponent'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import MealComponent from './components/MealComponent'
import ListWorkoutplanComponent from './components/ListWorkoutplanComponent'
import AddWorkoutPlanComponent from './components/WorkoutComponents'

import UserRegisterComponent from './components/UserRegisterComponent'
import UserLoginComponent from './components/UserLoginComponent'
import PostCreationComponent from './components/PostCreationComponent'

import { Toaster } from 'react-hot-toast';
import ProfileComponent from './components/ProfileComponent'


import ProfileComponentWorkout from './components/ProfileComponentWorkout'
import ProfileComponentPosts from './components/ProfileComponentPosts'
import ListPostComponent from './components/ListPostsComponent'
import UserPostForm from './components/UserPostForm'
import EditProfileComponent from './components/EditProfileComponent'
function App() {


  return (
    <>

    <BrowserRouter>
    <HeaderComponent/>
    <br></br>
    <Routes>

      <Route path='/workoutplans' element={<ListWorkoutplanComponent/>}></Route>
      <Route path='/addworkoutplan' element={<AddWorkoutPlanComponent/>}></Route>
      <Route path='/updateworkoutplan/:wid' element={<AddWorkoutPlanComponent/>}></Route>
      <Route path='/meals' element={<ListMealComponent/>}></Route>
      <Route path='/addmeal' element={<MealComponent/>}></Route>
      <Route path='/updatemeal/:id' element={<MealComponent/>}></Route>

      <Route path='/profile/meal' element={<ProfileComponent/>}></Route>

      <Route path='/profile/workout' element={<ProfileComponentWorkout/>}></Route>

      <Route path='/register' element={<UserRegisterComponent/>}></Route>
      
      <Route path='/login' element={<UserLoginComponent/>}></Route>

      <Route path='/addpost' element={<PostCreationComponent/>}></Route>
      
      <Route path='/updatepost/:id' element={<PostCreationComponent/>}></Route>

      <Route path='/profile/posts' element={<ProfileComponentPosts/>}></Route>

      <Route path='/posts' element={<ListPostComponent/>}></Route>

      <Route path='/postss' element={<UserPostForm/>}></Route>

      <Route path='/updateprofile' element={<EditProfileComponent/>}></Route>

    </Routes>

{/* <FooterComponent/> */}
</BrowserRouter>
<Toaster position="top-center"
        reverseOrder={false} />

    </>
  )
}

export default App