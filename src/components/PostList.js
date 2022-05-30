import React from "react";
import PostDetail from "./PostDetail";
import { connect } from "react-redux";

function PostList(props) {
  const { posts } = props;
  return (
    <div className="container">
      <div className="row">
        {posts && posts.map((post) => <PostDetail post={post} key={post.id} />)}
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
