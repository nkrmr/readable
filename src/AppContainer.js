import { connect } from "react-redux";
import { compose, lifecycle } from "recompose";

import Component from "./App";
import { getPosts } from "./modules/post/actions";
import { getCategories } from "./modules/category/actions";

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    initialState: () => {
      dispatch(getPosts()).then(() => dispatch(getCategories()));
    }
  };
}

const enhance = compose(
  connect(mapStateToProps, mapDispatchToProps),
  lifecycle({
    componentDidMount() {
      this.props.initialState();
    }
  })
);
const AppContainer = enhance(Component);

export default AppContainer;
