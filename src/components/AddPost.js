import React, { useState } from "react";
import { connect } from "react-redux";
import { v4 as uuidv4 } from "uuid";

function AddPost(props) {
  const [post, setPost] = useState({
    post: {
      id: "",
      title: "",
      content: "",
    },
  });

  const handelChange = (e) => {
    setPost({
      post: {
        ...post.post,
        [e.target.name]: e.target.value,
      },
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.createPost(post.post);
    setPost({
      post: { id: uuidv4(), title: "", content: "" },
    });
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

const mapDispatchToProps = (dispatch) => {
  return {
    createPost: (post) => {
      dispatch({ type: "ADD_POST", post });
    },
  };
};

export default connect(null, mapDispatchToProps)(AddPost);
