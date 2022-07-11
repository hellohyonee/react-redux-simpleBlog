import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addPost } from '../store/actions/postAction';

export default function AddPost() {
  const dispatch = useDispatch();
  const [post, setPost] = useState({
    id: '',
    title: '',
    content: '',
  });

  const handelChange = (e) => {
    setPost({
      ...post,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    if ((post.title === '') | (post.content === '')) {
      alert('내용을 채워주세요.');
      return null;
    }
    e.preventDefault();
    dispatch(addPost(post));
    setPost({
      id: uuidv4(),
      title: '',
      content: '',
    });
  };

  return (
    <div className="container" style={{ margin: '4rem auto' }}>
      <h5 className="blue-text center-align">HyoneeBlog</h5>
      <form onSubmit={handleSubmit}>
        <div className="input-field">
          <label className="active" htmlFor="post_title">
            Title
          </label>
          <input onChange={handelChange} value={post.title} type="text" name="title" />
        </div>
        <div className="input-field">
          <label className="active" htmlFor="post_content">
            Content
          </label>
          <textarea
            onChange={handelChange}
            value={post.content}
            name="content"
            className="materialize-textarea"
          ></textarea>
        </div>
        <div className="input-field">
          <button className="btn blue">
            Submit
            <i className="material-icons right">send</i>
          </button>
        </div>
      </form>
    </div>
  );
}
