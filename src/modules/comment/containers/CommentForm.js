import { connect } from 'react-redux';
import { compose, lifecycle } from 'recompose';

import Component from '../components/CommentForm';
import { addComment } from '../actions';

function mapStateToProps(state, ownProps) {
  return {};
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    onSubmit: values => {
      dispatch(addComment(values, ownProps.postId)).then(() => {});
    },
  };
}

const enhance = compose(
  connect(mapStateToProps, mapDispatchToProps),
  lifecycle({}),
);
const CommentFormContainer = enhance(Component);

export default CommentFormContainer;
