import { connect } from "react-redux";
import { compose, lifecycle } from "recompose";

import Component from "../components/CommentForm";
import { addComment, updateComment } from "../actions";

function mapStateToProps(state, ownProps) {
  return {
    initialValues: ownProps.comment
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    onSubmit: values => {
      if (ownProps.comment && ownProps.comment.id) {
        dispatch(updateComment(values, ownProps.comment.id)).then(() => {
          ownProps.history.goBack();
        });
      } else {
        dispatch(addComment(values, ownProps.postId)).then(() => {});
      }
    }
  };
}

const enhance = compose(
  connect(mapStateToProps, mapDispatchToProps),
  lifecycle({})
);
const CommentFormContainer = enhance(Component);

export default CommentFormContainer;
