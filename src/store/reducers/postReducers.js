const initialState = {
  posts: [
    { id: 1, title: "post one", content: "this is post one" },
    { id: 2, title: "post two", content: "this is post two" },
  ],
};

const postReducer = (state = initialState, action) => {
  return state;
};

export default postReducer;
