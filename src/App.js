import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Counter from "./features/counter/Counter";
import PostsList from "./features/posts/PostsList";
import AddPostForm from "./features/posts/AddPostForm";

function App() {
  return (
    <BrowserRouter>
      <div className="navbar">
        <ul>
          <li>
            <Link to="/counter">Counter</Link>
          </li>
          <li>
            <Link to="/posts-list">Posts List</Link>
          </li>
          <li>
            <Link to="/add-posts">Add a Post</Link>
          </li>
        </ul>
      </div>
      <div className="body">
        <Routes>
          <Route path="/counter" element={<Counter />} />
          <Route path="/posts-list" element={<PostsList />} />
          <Route path="/add-posts" element={<AddPostForm />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
