import postReducer from './post';

describe('Post Reducer', () => {
  test('returns a state object', () => {
    const result = postReducer(undefined, { type: 'ANYTHING' });
    expect(result).toBeDefined();
  });

  test('adds a post', () => {
    const startState = {
      posts: [
        { id: 1, title: 'First post', body: 'My first post' },
        { id: 2, title: 'Second post', body: 'My second post' },
        { id: 3, title: 'Third post', body: 'My third post' },
      ],
    };
    const expectedState = {
      posts: [
        { id: 1, title: 'First post', body: 'My first post' },
        { id: 2, title: 'Second post', body: 'My second post' },
        { id: 3, title: 'Third post', body: 'My third post' },
        { id: 4, title: 'Fourth post', body: 'My fourth post' },
      ],
    };
    const action = {
      type: 'POST_ADD',
      payload: { id: 4, title: 'Fourth post', body: 'My fourth post' },
    };
    const result = postReducer(startState, action);
    expect(result).toEqual(expectedState);
  });
});
