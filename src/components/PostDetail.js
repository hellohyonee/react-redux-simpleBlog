import React from "react";
import { connect } from "react-redux";
import { deletePost } from "../store/actions/postAction";

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
          <button onClick={() => props.deletePost(post.id)} className="btn red">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    deletePost: (id) => {
      dispatch({ type: "DELETE_POST", id });
    },
  };
};

// connect()함수 첫번째 파라미터에 mapStateToProps가 없으므로 null로 처리
export default connect(null, mapDispatchToProps)(PostDetail);
