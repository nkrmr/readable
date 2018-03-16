import { connect } from "react-redux";
import { compose, lifecycle } from "recompose";
import sortBy from "sort-by";

import Component from "../components/PostDetails";
import { removePost, updateVote } from "../actions";

function mapStateToProps(state, ownProps) {
  return {
    post: state.posts.filter(p => p.id === ownProps.match.params.id)[0],
    comments:
      state.comments
        .filter(c => c.parentId === ownProps.match.params.id)
        .sort(sortBy("-timestamp")) || []
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    handleVote(event, option, id) {
      dispatch(updateVote({ id, option }));
    },
    handleRemove(id) {
      dispatch(removePost(id)).then(() => {
        ownProps.history.push("/");
      });
    }
  };
}

const enhance = compose(
  connect(mapStateToProps, mapDispatchToProps),
  lifecycle({})
);
const PostDetailsContainer = enhance(Component);

export default PostDetailsContainer;
