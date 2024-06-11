import React from 'react';
import { Link } from 'react-router-dom';
import ListWorkStatusComponent from './ListWorkStatusComponent';


const ProfileComponent = () => {

  
  return (
    
<div class="profile-page tx-13">
    <div class="row">
        <div class="col-12 grid-margin">
            <div class="profile-header">
                <div class="cover">
                    
                    <figure>
                        <img src="../images/trainer-bg.jpg" class="img-fluid" alt="profile cover"/>
                    </figure>
                    <div class="cover-body d-flex justify-content-between align-items-center">
                        <div>
                            <img class="profile-pic" src="../images/t3.jpg" alt="profile"/>
                            <span class="profile-name">Danesh Perera</span>
                        </div>
                        <div class="d-none d-md-block">
                            <button class="btn btn-primary btn-icon-text btn-edit-profile">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-edit btn-icon-prepend">
                                    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                                    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                                </svg> Edit profile
                            </button>
                        </div>
                    </div>
                </div>
                <div class="header-links">
                    <ul class="links d-flex align-items-center mt-3 mt-md-0">
                        <li class="header-link-item ml-3 pl-3 border-left d-flex align-items-center">
                           
                            <a class="pt-1px d-none d-md-block"style={{ marginRight: '30px' }} href="#">User Post</a>
                        </li>
                        <li class="header-link-item ml-3 pl-3 border-left d-flex align-items-center">
                         
                            <a class="pt-1px d-none d-md-block"style={{ marginRight: '30px' }} href="/profile/workout">Workout Plan Post</a>
                        </li>
                        <li class="header-link-item ml-3 pl-3 border-left d-flex align-items-center">
                          
                            <a class="pt-1px d-none d-md-block"style={{ marginRight: '30px' }} href="/profile/status">Workout Status </a>
                        </li>
                        <li class="header-link-item ml-3 pl-3 border-left d-flex align-items-center">
                            
                            <a class="pt-1px d-none d-md-block"style={{ marginRight: '30px' }} href="/profile/meal">Meal Plan Post</a>
                        </li>
                        
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <div class="row profile-body">
       
    <div class="d-none d-md-block col-md-4 col-xl-3 left-wrapper">
    <div class="card rounded">
        <div class="card-body">
            <p>Hi! I'm Danesh Perera the Senior Software Engineer at Fcode. And also I'm a fitness enthusiast. I hope to share my knowledge and experience with you.</p>
            <div class="mt-3">
                <label class="tx-11 font-weight-bold mb-0 text-uppercase">Joined:</label>
                <p class="text-muted">April 30, 2024</p>
            </div>
            <div class="mt-3">
                <label class="tx-11 font-weight-bold mb-0 text-uppercase">Lives:</label>
                <p class="text-muted">Malabe, Sri Lanka</p>
            </div>
            <div class="mt-3">
                <label class="tx-11 font-weight-bold mb-0 text-uppercase">Email:</label>
                <p class="text-muted">daneshpera99@gmail.com</p>
            </div>
            <div class="mt-3">
                <label class="tx-11 font-weight-bold mb-0 text-uppercase">Website:</label>
                <p class="text-muted">www.dblocks.com</p>
            </div>
        </div>
    </div>
    <div class="mt-4">
    <div class="d-flex flex-column align-items-center">
        <button class="btn btn-primary btn-icon-text btn-edit-profile custom-btn-width">User Post Share</button><br/>
        <Link to="/addworkoutplan" className="btn btn-primary btn-icon-text btn-edit-profile custom-btn-width">Workout Plan Share</Link><br/>
        <Link to="/addstatus" className="btn btn-primary btn-icon-text btn-edit-profile custom-btn-width">Workout Status Share</Link><br/>
        <Link to="/addmeal" className="btn btn-primary btn-icon-text btn-edit-profile custom-btn-width">Meal Plan Share</Link>
    </div>
</div>

</div>

    
        <div className="col-md-8 col-xl-6 middle-wrapper">
           <div className="row">
             <ListWorkStatusComponent/> 
             
          </div>
        </div>

        
        <div class="d-none d-xl-block col-xl-3 right-wrapper">
            <div class="row">
                <div class="col-md-12 grid-margin">
                    <div class="card rounded">
                        <div class="card-body">
                            <h6 class="card-title">latest photos</h6>
                            <div class="latest-photos">
                                <div class="row">
                                    <div class="col-md-4">
                                        <figure>
                                            <img class="img-fluid" src="../images/t3.jpg" alt=""/>
                                        </figure>
                                    </div>
                                    <div class="col-md-4">
                                        <figure>
                                            <img class="img-fluid" src="../images/t1.jpg" alt=""/>
                                        </figure>
                                    </div>
                                    <div class="col-md-4">
                                        <figure>
                                            <img class="img-fluid" src="../images/k.jpg" alt=""/>
                                        </figure>
                                    </div>
                                    <div class="col-md-4">
                                        <figure>
                                            <img class="img-fluid" src="../images/f.jpg" alt=""/>
                                        </figure>
                                    </div>
                                    <div class="col-md-4">
                                        <figure>
                                            <img class="img-fluid" src="../images/j.jpg" alt=""/>
                                        </figure>
                                    </div>
                                    <div class="col-md-4">
                                        <figure>
                                            <img class="img-fluid" src="../images/c.jpg" alt=""/>
                                        </figure>
                                    </div>
                                    <div class="col-md-4">
                                        <figure class="mb-0">
                                            <img class="img-fluid" src="../images/1.jpg" alt=""/>
                                        </figure>
                                    </div>
                                    <div class="col-md-4">
                                        <figure class="mb-0">
                                            <img class="img-fluid" src="../images/t2.jpg" alt=""/>
                                        </figure>
                                    </div>
                                    <div class="col-md-4">
                                        <figure class="mb-0">
                                            <img class="img-fluid" src="../images/t3.jpg" alt=""/>
                                        </figure>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-12 grid-margin">
                    <div class="card rounded">
                        <div class="card-body">
                            <h6 class="card-title">suggestions for you</h6>
                            <div class="d-flex justify-content-between mb-2 pb-2 border-bottom">
                                <div class="d-flex align-items-center hover-pointer">
                                    <img class="img-xs rounded-circle" src="../images/t1.jpg" alt=""/>
                                    <div class="ml-2">
                                        <p>Ayesh Ekanayaka</p>
                                        <p class="tx-11 text-muted">70 Mutual Friends</p>
                                    </div>
                                </div>
                                <button class="btn btn-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-user-plus" data-toggle="tooltip" title="" data-original-title="Connect">
                                        <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                                        <circle cx="8.5" cy="7" r="4"></circle>
                                        <line x1="20" y1="8" x2="20" y2="14"></line>
                                        <line x1="23" y1="11" x2="17" y2="11"></line>
                                    </svg>
                                </button>
                            </div>
                            <div class="d-flex justify-content-between mb-2 pb-2 border-bottom">
                                <div class="d-flex align-items-center hover-pointer">
                                    <img class="img-xs rounded-circle" src="../images/t2.jpg" alt=""/>
                                    <div class="ml-2">
                                        <p>Sansala silva</p>
                                        <p class="tx-11 text-muted">30 Mutual Friends</p>
                                    </div>
                                </div>
                                <button class="btn btn-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-user-plus" data-toggle="tooltip" title="" data-original-title="Connect">
                                        <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                                        <circle cx="8.5" cy="7" r="4"></circle>
                                        <line x1="20" y1="8" x2="20" y2="14"></line>
                                        <line x1="23" y1="11" x2="17" y2="11"></line>
                                    </svg>
                                </button>
                            </div>
                            <div class="d-flex justify-content-between mb-2 pb-2 border-bottom">
                                <div class="d-flex align-items-center hover-pointer">
                                    <img class="img-xs rounded-circle" src="../images/t3.jpg" alt=""/>
                                    <div class="ml-2">
                                        <p>Janith Gunathilake</p>
                                        <p class="tx-11 text-muted">25 Mutual Friends</p>
                                    </div>
                                </div>
                                <button class="btn btn-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-user-plus" data-toggle="tooltip" title="" data-original-title="Connect">
                                        <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                                        <circle cx="8.5" cy="7" r="4"></circle>
                                        <line x1="20" y1="8" x2="20" y2="14"></line>
                                        <line x1="23" y1="11" x2="17" y2="11"></line>
                                    </svg>
                                </button>
                            </div>
                            <div class="d-flex justify-content-between mb-2 pb-2 border-bottom">
                                <div class="d-flex align-items-center hover-pointer">
                                    <img class="img-xs rounded-circle" src="../images/1.jpg" alt=""/>
                                    <div class="ml-2">
                                        <p>Ranush Sanjula</p>
                                        <p class="tx-11 text-muted">40 Mutual Friends</p>
                                    </div>
                                </div>
                                <button class="btn btn-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-user-plus" data-toggle="tooltip" title="" data-original-title="Connect">
                                        <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                                        <circle cx="8.5" cy="7" r="4"></circle>
                                        <line x1="20" y1="8" x2="20" y2="14"></line>
                                        <line x1="23" y1="11" x2="17" y2="11"></line>
                                    </svg>
                                </button>
                            </div>
                      

                        </div>
                    </div>
                </div>
            </div>
        </div>
 
    </div>
</div>

  )
}

export default ProfileComponent