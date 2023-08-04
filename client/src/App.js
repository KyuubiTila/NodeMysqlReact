import { Routes, Route } from 'react-router-dom';
import CreatePost from './pages/CreatePost';
import Posts from './pages/Posts';

function App() {
  return (
    <>
      <Routes>
        <Route path="posts" element={<Posts />} />
        <Route path="createpost" element={<CreatePost />} />
      </Routes>
    </>
  );
}

export default App;
