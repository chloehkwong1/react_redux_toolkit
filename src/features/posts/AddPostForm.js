import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
// nanoid is smaller and faster than uuid
import { nanoid } from "@reduxjs/toolkit";

import { postAdded } from "./postsSlice";

const AddPostForm = () => {
  const dispatch = useDispatch();
  // use useState for local/temporary state. We only need to send to global state if other components might be using that state
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const onTitleChanged = (e) => setTitle(e.target.value);
  const onContentChanged = (e) => setContent(e.target.value);

  const navigate = useNavigate();
  const onSavePostClicked = () => {
    // we want to abstract this logic to the reducer in case the state format changes
    if (title && content) {
      dispatch(
        postAdded({
          id: nanoid(),
          title,
          content,
        })
      );

      setTitle("");
      setContent("");
      navigate("/posts-list");
    }
  };

  return (
    <section>
      <h2>Add a New Post</h2>
      <form>
        <label htmlFor="postTitle">Post Title:</label>
        <input
          type="text"
          id="postTitle"
          name="postTitle"
          value={title}
          onChange={onTitleChanged}
        />
        <label htmlFor="postContent">Content:</label>
        <textarea
          id="postContent"
          name="postContent"
          value={content}
          onChange={onContentChanged}
        />
        <button type="button" onClick={onSavePostClicked}>
          Save Post
        </button>
      </form>
    </section>
  );
};

export default AddPostForm;
