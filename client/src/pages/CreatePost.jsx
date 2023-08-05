import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import React from 'react';
import CreatePostCard from '../components/CreatePostCard';
import * as Yup from 'yup';

const CreatePost = () => {
  const navigate = useNavigate();

  const validationSchema = Yup.object().shape({
    title: Yup.string().required('you must input a title'),
    postText: Yup.string().required('you must send a post'),
    username: Yup.string().min(3).max(15).required(),
  });

  const initialValues = {
    title: '',
    postText: '',
    username: '',
  };

  const addPostHandler = async (data) => {
    console.log(data);

    await axios.post('http://localhost:3001/api/posts', data);

    // on execution it should redirect ie navigate to the showProduct page
    navigate('/posts');
  };

  return (
    <div className="flex flex-wrap justify-center lg:flex-row">
      <h1>CREATE POST </h1>

      <div className="flex flex-wrap justify-center pt-14 lg:flex-row">
        <CreatePostCard
          addPostHandler={addPostHandler}
          initialValues={initialValues}
          validationSchema={validationSchema}
        />
      </div>
    </div>
  );
};

export default CreatePost;
