import React from 'react';

const CommentCard = ({ eleement, handleCommentDelete }) => {
  const { id, username, comment } = eleement;
  return (
    // <div className="flex flex-wrap justify-center lg:flex-row">
    <div className="flex flex-wrap  lg:flex-row m-3 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
      <div id="defaultTabContent">
        <h2 className="mb-3 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
          {comment}
        </h2>
        <p className="mb-3 text-gray-500 dark:text-gray-400">{username}</p>
      </div>
      <button
        onClick={() => handleCommentDelete(id)}
        className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
      >
        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
          Delete
        </span>
      </button>
    </div>
    // </div>
  );
};

export default CommentCard;
