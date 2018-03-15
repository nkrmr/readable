import { connect } from 'react-redux';
import { compose, lifecycle } from 'recompose';
import { setSort } from '../actions';
import Component from '../components/Menu';

function mapStateToProps(state) {
  return {
    categories: state.categories,
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    handleSort: sort => {
      dispatch(setSort(sort));
    },
  };
}

const enhance = compose(
  connect(mapStateToProps, mapDispatchToProps),
  lifecycle({}),
);
const MenuContainer = enhance(Component);

export default MenuContainer;
