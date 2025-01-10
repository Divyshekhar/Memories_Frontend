import axios from 'axios';

// const url = 'http://localhost:3000/posts/';
const url = 'https://memories-backend-1ezd.onrender.com/posts/';

export const fetchPosts = async () => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error('Error fetching posts:', error);
    return []; // Return an empty array on error
  }
};

export const createPost = (newPost) => axios.post(url, newPost)

export const updatePost = (_id, updatedPost) => axios.patch(url + _id, updatedPost)

export const deletePost = (_id) => axios.delete(url + _id)

export const likePost = (_id) => axios.patch(url + _id + likePost);
