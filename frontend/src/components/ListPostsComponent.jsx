import React, { useEffect, useState } from 'react';
import { listPosts, deletePost } from '../services/PostService'; // Import your PostService or equivalent service
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { FiEdit, FiTrash } from 'react-icons/fi';


// PostCard component to display individual post details
const PostCard = ({ post, updatePost, removePost }) => (
    <div className="card rounded">
        <div className="card-header">
            <div className="d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center">
                    <img className="img-xs rounded-circle" src="../images/t3.jpg" alt="" />
                    <div className="ml-2">
                        <p>{post.createdBy.name}</p> {/* Assuming createdBy has a 'name' property */}
                        <p className="tx-11 text-muted">1 min ago</p> {/* You can replace this with the actual created time */}
                    </div>
                </div>
                <div style={{ marginLeft: '500px' }} onClick={() => updatePost(post.id)} className="icon-container">
                    <FiEdit className="edit-icon" size={20} />
                </div>
                <div onClick={() => removePost(post.id)} className="icon-container">
                    <FiTrash className="delete-icon" size={20} />
                </div>
            </div>
        </div>
        <div className="card-body">
            {/* Render post details here */}
            <p>Description: {post.description}</p>
            {post.images && post.images.length > 0 && (
                <div>
                    <p>Images:</p>
                    <div className="d-flex flex-wrap">
                        {post.images.map((imageUrl, index) => (
                            <img
                            key={index}
                            src={`http://localhost:8080/${imageUrl}`}
                            alt={`Image ${index}`}
                            className="img-thumbnail mr-2 mb-2"
                            style={{ width: '100px', height: '100px' }}
                        />
                        
                        ))}
                    </div>
                </div>
            )}
            {/* You can render other post details like video, etc. */}
        </div>
        <div className="card-footer">
            {/* You can add post actions here */}
        </div>
    </div>
);




// ListPostComponent to display a list of posts
const ListPostComponent = () => {
    const [posts, setPosts] = useState([]);
    const navigator = useNavigate([]);

    useEffect(() => {
        getAllPosts();
    }, []);

    function getAllPosts() {
        listPosts()
            .then((response) => {
                setPosts(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    }

    function updatePost(id) {
        navigator(`/updatepost/${id}`);
    }

    function removePost(id) {
        deletePost(id)
            .then(response => {
                toast.success("Post deleted successfully");
                getAllPosts();
            })
            .catch(error => {
                console.error(error);
            });
    }

    return (
        <div>
            <div className="scrollable-cards-container" style={{ height: '1000px', overflowY: 'scroll' }}>
                {posts.map(post => (
                    <div className="card rounded mb-4" key={post.id}>
                        <PostCard
                            post={post}
                            updatePost={updatePost}
                            removePost={removePost}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ListPostComponent;
