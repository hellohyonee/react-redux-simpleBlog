import React from "react";

export default function AddPost() {
  return (
    <div className="container">
      <h5 className="blue-text center-align">HyoneeBlog</h5>
      <form>
        <div className="input-field">
          <label className="active" htmlFor="post_title">
            Title
          </label>
          <input type="text" name="title" />
        </div>
        <div className="input-field">
          <label className="active" htmlFor="post_content">
            Content
          </label>
          <textarea name="content" className="materialize-textarea"></textarea>
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
