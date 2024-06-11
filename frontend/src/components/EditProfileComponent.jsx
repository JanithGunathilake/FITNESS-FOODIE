import React, { useEffect, useState } from 'react';
import { getUserById, updateUser } from '../services/UserProfileService'; // Import your UserService or equivalent service
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const EditProfileComponent = () => {
    const [user, setUser] = useState({
        id: null,
        firstname: '',
        lastname: '',
        username: '',
        email: '',
        password: ''
    });
    const navigator = useNavigate();

    useEffect(() => {
        // Fetch user data when the component mounts
        fetchUser();
    }, []);

    const fetchUser = () => {
        // Assuming you have the userId stored in session or props
        const userId = localStorage.getItem('id');
        console.log("User ID:", userId);

        getUserById(userId)
            .then(response => {
                setUser(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    }

    const handleChange = e => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    }

    const handleSubmit = e => {
        e.preventDefault();

        updateUser(user.id, user)
            .then(response => {
                toast.success("Profile updated successfully");
                navigator('/login');
            })
            .catch(error => {
                console.error(error);
                toast.error("Failed to update profile");
            });
    }

    return (
        <div className="container">
            <div className="row justify-content-center mt-5">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-header">Edit Profile</div>
                        <div className="card-body">
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="firstname" className="form-label">First Name:</label>
                                    <input type="text" id="firstname" name="firstname" value={user.firstname} onChange={handleChange} className="form-control" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="lastname" className="form-label">Last Name:</label>
                                    <input type="text" id="lastname" name="lastname" value={user.lastname} onChange={handleChange} className="form-control" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="username" className="form-label">Username:</label>
                                    <input type="text" id="username" name="username" value={user.username} onChange={handleChange} className="form-control" disabled />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email:</label>
                                    <input type="email" id="email" name="email" value={user.email} onChange={handleChange} className="form-control" disabled />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">Password:</label>
                                    <input type="password" id="password" name="password" value={user.password} onChange={handleChange} className="form-control" />
                                </div>
                                <button type="submit" className="btn btn-primary">Update Profile</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditProfileComponent;
