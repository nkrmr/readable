import React from "react";
import PropTypes from "prop-types";
import { Paper, MenuList, MenuItem, Divider } from "material-ui";
import { Link } from "react-router-dom";
import { withStyles } from "material-ui/styles";

const styles = theme => ({
  paper: {
    margin: 24,
    width: "100%"
  }
});

const Menu = ({ categories, classes, handleSort }) => {
  return (
    <Paper className={classes.paper} elevation={1}>
      <MenuList>
        <MenuItem key="all" to="/" component={props => <Link {...props} />}>
          All
        </MenuItem>
        {categories.list.map(category => (
          <MenuItem
            key={category.path}
            to={`/category/${category.path}`}
            component={props => <Link {...props} />}
          >
            {category.name.charAt(0).toUpperCase() + category.name.slice(1)}
          </MenuItem>
        ))}
        <Divider />
        <MenuItem
          key="score"
          selected={categories.sort === "voteScore"}
          onClick={() => handleSort("voteScore")}
        >
          Sort by score
        </MenuItem>
        <MenuItem
          key="date"
          selected={categories.sort === "timestamp"}
          onClick={() => handleSort("timestamp")}
        >
          Sort by date
        </MenuItem>
      </MenuList>
    </Paper>
  );
};

Menu.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Menu);
