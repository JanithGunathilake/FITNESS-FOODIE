import React, { useState } from 'react';
import axios from 'axios';

const UserPostForm = () => {
  const [description, setDescription] = useState('');
  const [images, setImages] = useState([]);
  const [video, setVideo] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append('description', description);
      images.forEach((image, index) => {
        formData.append(`image${index}`, image); // Append each image with the name 'image0', 'image1', etc.
      });
      formData.append('video', video);
  
      const response = await axios.post('http://localhost:8080/api/userPost', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log(response.data);
    } catch (error) {
      console.error('Error:', error);
    }
  };
  

  return (
    <div style={{ maxWidth: '500px', margin: '0 auto', padding: '20px', border: '1px solid #ccc', borderRadius: '5px' }}>
      <h2>Create a New Post</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '15px' }}>
          <label>Description:</label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '3px' }}
          />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label>Images:</label>
          <input
            type="file"
            multiple
            onChange={(e) => setImages([...images, ...e.target.files])}
          />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label>Video:</label>
          <input
            type="text"
            value={video}
            onChange={(e) => setVideo(e.target.value)}
            style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '3px' }}
          />
        </div>

        <button type="submit" style={{ backgroundColor: '#007bff', color: '#fff', border: 'none', padding: '10px 20px', borderRadius: '3px', cursor: 'pointer' }}>Submit</button>
      </form>
    </div>
  );
};

export default UserPostForm;
