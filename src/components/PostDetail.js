import React from "react";
import { connect } from "react-redux";

function PostDetail(props) {
  const { post } = props;
  return (
    <div className="col s12 mg">
      <div className="card">
        <div className="card-content">
          <span className="card-title">{post.title}</span>
          <p>{post.content}</p>
        </div>
        <div className="card-action">
          <button className="btn red">Delete</button>
        </div>
      </div>
    </div>
  );
}

export default connect()(PostDetail);
