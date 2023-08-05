import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CreateCommentCard from '../components/CreateCommentCard';
import * as Yup from 'yup';
import CommentCard from '../components/CommentCard';

const IndividualPost = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [title, setTitle] = useState('');
  const [postText, setPostText] = useState('');
  const [username, setUsername] = useState('');
  const [comments, setComments] = useState([]);

  const initialValues = {
    comment: '',
    PostId: id,
  };
  const validationSchema = Yup.object().shape({
    comment: Yup.string().required('you must send a comment'),
  });

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
    // ASYNC FUNCTION TO CALLING THE DATABASE
    const gePostsComments = async () => {
      try {
        const commentResponse = await axios.get(
          `http://localhost:3001/api/posts/${id}/comment`
        );
        const { data } = commentResponse;
        setComments(data);
        console.log(commentResponse);
        console.log(comments);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    gePostsComments();
  }, [id]);

  const addCommentHandler = async (data) => {
    await axios.post('http://localhost:3001/api/comments', data);
    window.location.reload();
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:3001/api/posts/${id}`);
    navigate('/posts');
  };

  const handleCommentDelete = async (id) => {
    await axios.delete(`http://localhost:3001/api/comments/${id}`);
    window.location.reload();
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
          {/* <Link to={`/editProduct/${id}`} className="relative">
          <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Edit
            </span>
          </button>
        </Link> */}
          <button
            onClick={() => handleDelete(id)}
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
