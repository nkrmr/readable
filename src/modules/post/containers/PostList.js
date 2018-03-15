import { connect } from "react-redux";
import { compose, lifecycle } from "recompose";
import sortBy from "sort-by";

import Component from "../components/PostList";
import { updateVote, removePost } from "../actions";

function mapStateToProps(state, ownProps) {
  return {
    posts: ownProps.match.params.category
      ? state.posts
          .filter(p => p.category === ownProps.match.params.category)
          .sort(sortBy("-" + state.categories.sort))
      : state.posts.sort(sortBy("-" + state.categories.sort)),
    comments: state.comments,
    sort: state.categories.sort
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    handleVote(event, option, id) {
      dispatch(updateVote({ id, option }));
    },
    handleRemove(id) {
      dispatch(removePost(id));
    }
  };
}

const enhance = compose(
  connect(mapStateToProps, mapDispatchToProps),
  lifecycle({})
);
const PostListContainer = enhance(Component);

export default PostListContainer;
