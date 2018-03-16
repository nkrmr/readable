import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { withStyles } from "material-ui/styles";
import Typography from "material-ui/Typography";
import Paper from "material-ui/Paper";
import Button from "material-ui/Button";

const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing.unit * 3,
    margin: 20
  })
});

const NotFound = ({ classes }) => {
  return (
    <div>
      <Paper className={classes.root} elevation={2}>
        <Typography variant="headline" component="h3">
          404 Not Found.
        </Typography>
        <Typography component="p">
          This is not the webpage you are looking for.<br />
          <br />
          <Button
            color="inherit"
            to="/"
            component={props => <Link {...props} />}
          >
            Go back home
          </Button>
        </Typography>
      </Paper>
    </div>
  );
};

NotFound.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(NotFound);
