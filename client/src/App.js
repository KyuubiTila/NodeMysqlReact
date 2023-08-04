import { Routes, Route } from 'react-router-dom';
import CreatePost from './pages/CreatePost';
import IndividualPost from './pages/IndividualPost';
import Posts from './pages/Posts';

function App() {
  return (
    <>
      <Routes>
        <Route path="posts" element={<Posts />} />
        <Route path="createpost" element={<CreatePost />} />
        <Route path="individualpost/:id" element={<IndividualPost />} />
      </Routes>
    </>
  );
}

export default App;
