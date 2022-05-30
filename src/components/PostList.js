import React from "react";
import PostDetail from "./PostDetail";
import { connect } from "react-redux";

function PostList() {
  return (
    <div className="container">
      <div className="row">
        <PostDetail />
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
  };
};

export default connect(mapStateToProps)(PostList);
