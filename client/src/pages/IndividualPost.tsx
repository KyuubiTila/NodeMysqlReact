import axios from 'axios';
import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CreateCommentCard from '../components/CreateCommentCard.tsx';
import * as Yup from 'yup';
import CommentCard from '../components/CommentCard';

type IComment = {
  id: number | string;
  comment: string;
  updatedAt: Date;
};

const IndividualPost = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [title, setTitle] = useState('');
  const [postText, setPostText] = useState('');
  const [username, setUsername] = useState('');
  const [comments, setComments] = useState<IComment[]>([]);

  const initialValues = {
    comment: '',
    PostId: id,
  };
  const validationSchema = Yup.object().shape({
    comment: Yup.string().required('you must send a comment'),
  });

  console.log(id);

  // USE EFFECT CONNECTING TO DATABASE GETTING THE DATA WHICH WOULD THE BE HELD BY THE USEEFFCT AND THROWN TO THE FRONT END
  useEffect(() => {
    // ASYNC FUNCTION TO CALLING THE DATABASE
    const getIndividualPost = async () => {
      try {
        const postResponse = await axios.get(
          `http://localhost:3001/api/posts/${id}`
        );
        console.log(postResponse);
        // Destructure 'data' from the 'response' object
        const { data } = postResponse;
        console.log(postResponse);
        //SETTING THE RESPONSE DATAS TO THE USESTATE FOR HOLDING
        setTitle(data.title);
        setPostText(data.postText);
        setUsername(data.username);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    getIndividualPost();
  }, [id]);

  useEffect(() => {
    // ASYNC FUNCTION TO CALLING THE DATABASE FOR THE POST DATA
    const gePostsComments = async () => {
      try {
        const commentResponse = await axios.get(
          `http://localhost:3001/api/posts/${id}/comment`
        );
        const { data } = commentResponse;
        setComments(data);
        console.log(commentResponse);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    gePostsComments();
  }, [id]);

  const addCommentHandler = async (data: IComment) => {
    try {
      const { data: newComment } = await axios.post(
        'http://localhost:3001/api/comments',
        data, // THIS IS THE DATA CARRIER
        {
          // THIS IS THE TOKEN CARRIER FROM WHICH THE AUTH WILL TAKE ITS PARAMETERS FOR CHECK
          headers: {
            accessToken: localStorage.getItem('accessToken'),
          },
        }
      );

      setComments([...comments, newComment]);
    } catch (error) {
      alert(`${error.response.data.error}; you can not create comment`);
    }
  };

  const handlePostDelete = async (id: number) => {
    try {
      await axios.delete(`http://localhost:3001/api/posts/${id}`, {
        // THIS IS THE TOKEN CARRIER FROM WHICH THE AUTH WILL TAKE ITS PARAMETERS FOR CHECK
        headers: {
          accessToken: localStorage.getItem('accessToken'),
        },
      });
      navigate('/posts');
    } catch (error) {
      alert(`${error.response.data.error}; you can not delete post`);
    }
  };

  const handleCommentDelete = async (id: number) => {
    try {
      await axios.delete(`http://localhost:3001/api/comments/${id}`, {
        // THIS IS THE TOKEN CARRIER FROM WHICH THE AUTH WILL TAKE ITS PARAMETERS FOR CHECK
        headers: {
          accessToken: localStorage.getItem('accessToken'),
        },
      });
      const newComments = comments.filter((element) => {
        return element.id !== id;
      });

      setComments(newComments);
    } catch (error) {
      alert(`${error.response.data.error}; you can not delete comment`);
    }
  };

  return (
    <div className="flex flex-wrap justify-center lg:flex-row">
      <div className="m-3 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        {/* <Link to={`/productDetail/${id}`}>
        <img src={'http://localhost:8080/' + image} alt="" />
      </Link> */}
        <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Post Title : {title}
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Post Text : {`${postText}`}
          </p>

          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Creator Username : {username}
          </p>
          <button
            onClick={() => handlePostDelete(+id!)}
            className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
          >
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Delete
            </span>
          </button>
        </div>
        {comments.map((eleement) => {
          return (
            <CommentCard
              key={eleement.id}
              eleement={eleement}
              handleCommentDelete={handleCommentDelete}
            />
          );
        })}

        <CreateCommentCard
          addCommentHandler={addCommentHandler}
          initialValues={initialValues}
          validationSchema={validationSchema}
        />
      </div>
    </div>
  );
};

export default IndividualPost;
