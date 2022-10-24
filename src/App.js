import Counter from "./features/counter/Counter";
import PostsList from "./features/posts/PostsList";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="navbar">
        <ul>
          <li>
            <Link to="/counter">Counter</Link>
          </li>
          <li>
            <Link to="/posts">Posts</Link>
          </li>
        </ul>
      </div>
      <div className="body">
        <Routes>
          <Route path="/counter" element={<Counter />} />
          <Route path="/posts" element={<PostsList />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
