import React, { useEffect, useState } from 'react';
import { addPost, getPost, updatePost } from '../services/PostService';
import { useNavigate, useParams } from 'react-router-dom';
import toast from 'react-hot-toast';


const PostCreationComponent = () => {
  const [description, setDescription] = useState('');
  const [images, setImages] = useState([]);
  const [video, setVideo] = useState('');

  const { id } = useParams();
  const [errors, setErrors] = useState({
    description: '',
    images: '',
    video: ''
  });

  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      getPost(id).then((response) => {
        setDescription(response.data.description);
        setImages(response.data.images);
        setVideo(response.data.video);
      }).catch(error => {
        console.error(error);
      })
    }
  }, [id]);

  function saveOrUpdatePost(e) {
    e.preventDefault();
    if (validateForm()) {
      const formData = new FormData();
      formData.append('description', description);
      
      // Convert each image to base64 string and append to FormData
      images.forEach((image, index) => {
        // Assuming you have a function to convert image file to base64 string
        convertImageToBase64String(image)
          .then(base64String => {
            formData.append(`images[${index}]`, base64String); // Append base64 string to FormData
          })
          .catch(error => {
            console.error("Error converting image to base64:", error);
          });
      });
      
      formData.append('video', video);
  
      if (id) {
        updatePost(id, formData)
          .then((response) => {
            console.log(response.data);
            toast.success("Post updated successfully");
            setTimeout(() => {
              navigate('/profile/posts');
            }, 2000);
          })
          .catch(error => {
            console.error("Error updating post:", error);
            if (error.response && error.response.status === 400) {
              toast.error("Failed to update post: Bad request. Please check your input.");
            } else {
              toast.error("Failed to update post. Please try again later.");
            }
          });
      } else {
        addPost(formData)
          .then((response) => {
            console.log(response.data);
            toast.success("Post added successfully");
            setDescription("");
            setImages([]);
            setVideo("");
            setTimeout(() => {
              navigate('/profile/posts');
            }, 2000);
          })
          .catch(error => {
            console.error("Error adding post:", error);
            if (error.response && error.response.status === 400) {
              toast.error("Failed to add post: Bad request. Please check your input.");
            } else {
              toast.error("Failed to add post. Please try again later.");
            }
          });
      }
    }
  }
  
  // Function to convert image file to base64 string
  function convertImageToBase64String(imageFile) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        resolve(reader.result.split(',')[1]); // Extract base64 string from data URL
      };
      reader.onerror = error => reject(error);
      reader.readAsDataURL(imageFile);
    });
  }
  


  function validateForm() {
    let valid = true;
    const errorsCopy = { ...errors };

    if (!description.trim()) {
      errorsCopy.description = 'Description required';
      valid = false;
    } else {
      errorsCopy.description = '';
    }

    if (images.length === 0) {
      errorsCopy.images = 'Images required';
      valid = false;
    } else {
      errorsCopy.images = '';
    }

    // Add validation for video if necessary

    setErrors(errorsCopy);
    return valid;
  }

  function pageTitle() {
    if (id) {
      return <h2 className='text-center'>Update Post</h2>
    } else {
      return <h2 className='text-center'>Add Post</h2>
    }
  }

  return (
    <div className='container'>
      <br /><br />
      <div className='row'>
        <div className='card col-md-6 offset-md-3 offset-md-3'>
          {pageTitle()}
          <div className='card-body'>
            <form>
              <div className='form-group mb-2'>
                <label className='form-label'>Description:</label>
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

              <div className='form-group mb-2'>
                <label className='form-label'>Images:</label>
                <input
                  type='file'
                  accept='image/*'
                  multiple
                  onChange={(e) => setImages(Array.from(e.target.files))}
                  className={`form-control ${errors.images ? 'is-invalid' : ''}`}
                  required
                />
                {errors.images && <div className='invalid-feedback'>{errors.images}</div>}
              </div>

              <div className='form-group mb-2'>
                <label className='form-label'>Video URL:</label>
                <input
                  type='text'
                  placeholder='Paste video URL (optional)'
                  value={video}
                  onChange={(e) => setVideo(e.target.value)}
                  className={`form-control ${errors.video ? 'is-invalid' : ''}`}
                />
                {errors.video && <div className='invalid-feedback'>{errors.video}</div>}
              </div>

              <div className="d-flex justify-content-end">
                <button type="submit" className='btn btn-primary' onClick={saveOrUpdatePost}>Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PostCreationComponent;



