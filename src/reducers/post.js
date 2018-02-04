const initialState = [
  { id: 1, title: 'First post', body: 'My first post' },
  { id: 2, title: 'Second post', body: 'My second post' },
  { id: 3, title: 'Third post', body: 'My third post' },
];

export default (state = initialState, action) => {
  switch (action.type) {
    case 'POST_ADD':
      return { ...state, posts: state.posts.concat(action.payload) };
    default:
      return state;
  }
};
