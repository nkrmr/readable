import { connect } from "react-redux";
import { compose, lifecycle } from "recompose";
import sortBy from "sort-by";

import Component from "../components/CommentList";
import { updateCommentVote, removeComment } from "../actions";

function mapStateToProps(state, ownProps) {
  return {
    comments: ownProps.comments.sort(sortBy("-timestamp"))
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    handleVote(event, option, id) {
      dispatch(updateCommentVote({ id, option }));
    },
    handleRemove(id) {
      dispatch(removeComment(id));
    },
    handleModalClose() {
      ownProps.history.goBack();
    }
  };
}

const enhance = compose(
  connect(mapStateToProps, mapDispatchToProps),
  lifecycle({})
);
const CommentListContainer = enhance(Component);

export default CommentListContainer;
