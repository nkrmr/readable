import { connect } from "react-redux";
import { compose, lifecycle } from "recompose";

import Component from "../components/CommentModal";

function mapStateToProps(state, ownProps) {
  return {};
}

function mapDispatchToProps(dispatch, ownProps) {
  return {};
}

const enhance = compose(
  connect(mapStateToProps, mapDispatchToProps),
  lifecycle({})
);
const CommentModalContainer = enhance(Component);

export default CommentModalContainer;
