import React from 'react';
import { Routes, Route } from 'react-router-dom';
import CreatePost from './pages/CreatePost';
import IndividualPost from './pages/IndividualPost.tsx';
import Posts from './pages/Posts';
import Register from './pages/Register';
function App() {
  return (
    <Routes>
      <Route path="posts" element={<Posts />} />
      <Route path="createpost" element={<CreatePost />} />
      <Route path="individualpost/:id" element={<IndividualPost />} />
      <Route path="register" element={<Register />} />
    </Routes>
  );
}

export default App;
