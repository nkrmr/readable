import { connect } from "react-redux";
import { compose, lifecycle } from "recompose";

import Component from "../components/PostForm";
import { addPost, updatePost } from "../actions";

function mapStateToProps(state, ownProps) {
  return {
    initialValues: state.posts.filter(
      p => p.id === ownProps.match.params.id
    )[0],
    categories: state.categories.list
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    onSubmit: values => {
      if (ownProps.match.params.id) {
        dispatch(updatePost(values, ownProps.match.params.id)).then(data => {
          ownProps.history.push(`/post/${values.category}/${values.id}`);
        });
      } else {
        dispatch(addPost(values)).then(() => {
          ownProps.history.push("/redirect");
        });
      }
    }
  };
}

const enhance = compose(
  connect(mapStateToProps, mapDispatchToProps),
  lifecycle({})
);
const PostFormContainer = enhance(Component);

export default PostFormContainer;
