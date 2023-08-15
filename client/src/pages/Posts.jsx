import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { PostCard } from '../components/PostCard';
const Posts = () => {
  const [posts, setPosts] = useState([]);

  // USE EFFECT CONNECTING TO DATABASE GETTING THE DATA WHICH WOULD THE BE HELD BY THE USEEFFCT AND THROWN TO THE FRONT END
  useEffect(() => {
    const getProductsData = async () => {
      try {
        const response = await axios.get(
          'http://localhost:3001/api/posts/allPosts'
        );

        // Destructure 'data' from the 'response' object
        const { data } = response;
        console.log(response);
        setPosts(data);
      } catch (error) {
        console.error('Error fetching data:', error);
        // Handle errors
      }
    };
    getProductsData();
  }, []);

  const postLike = async (postId) => {
    const response = await axios.post(
      'http://localhost:3001/api/like',
      { PostId: postId },
      {
        headers: {
          accessToken: localStorage.getItem('accessToken'),
        },
      }
    );
    alert(response.data);
  };

  return (
    <div className="flex flex-wrap justify-center lg:flex-row">
      <nav>SHOW POSTS</nav>
      <div className="flex flex-wrap justify-center lg:flex-row">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} postLike={postLike} />
        ))}
      </div>
    </div>
  );
};

export default Posts;
