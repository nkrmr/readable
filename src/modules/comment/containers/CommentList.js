import { connect } from "react-redux";
import { compose, lifecycle } from "recompose";
import sortBy from "sort-by";

import Component from "../components/CommentList";
import { updateComment, removeComment } from "../actions";

function mapStateToProps(state, ownProps) {
  return {
    comments: ownProps.comments.sort(sortBy("-timestamp"))
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    handleVote(event, option, id) {
      dispatch(updateComment({ id, option }));
    },
    handleRemove(id) {
      dispatch(removeComment(id));
    }
  };
}

const enhance = compose(
  connect(mapStateToProps, mapDispatchToProps),
  lifecycle({})
);
const CommentListContainer = enhance(Component);

export default CommentListContainer;
