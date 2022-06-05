import React from "react";
import { useDispatch } from "react-redux";
import { deletePost } from "../store/actions/postAction";

export default function PostDetail({ post }) {
  const dispatch = useDispatch();

  return (
    <div className="col s12 mg">
      <div className="card">
        <div className="card-content">
          <span className="card-title">{post.title}</span>
          <p>{post.content}</p>
        </div>
        <div className="card-action">
          <button
            onClick={() => dispatch(deletePost(post.id))}
            className="btn red"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
