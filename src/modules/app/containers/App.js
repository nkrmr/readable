import { connect } from "react-redux";
import { compose, lifecycle } from "recompose";

import Component from "../components/App";
import { initialState } from "../actions";
import { getPosts } from "../../post/actions";
import { getCategories } from "../../category/actions";

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    initialState: () => {
      dispatch(getPosts()).then(() =>
        dispatch(getCategories()).then(() => dispatch(initialState()))
      );
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
