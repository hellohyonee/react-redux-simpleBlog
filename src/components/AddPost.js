import React, { useState } from "react";

export default function AddPost() {
  const [post, setPost] = useState({ post: { id: 3, title: "", content: "" } });

  const handelChange = (e) => {
    setPost({ post: { ...post.post, [e.target.name]: e.target.value } });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(post.post);
    setPost({ post: { title: "", content: "" } });
  };

  return (
    <div className="container" style={{ margin: "4rem auto" }}>
      <h5 className="blue-text center-align">HyoneeBlog</h5>
      <form onSubmit={handleSubmit}>
        <div className="input-field">
          <label className="active" htmlFor="post_title">
            Title
          </label>
          <input
            onChange={handelChange}
            value={post.title}
            type="text"
            name="title"
          />
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
