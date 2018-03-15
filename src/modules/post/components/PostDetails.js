import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import moment from "moment";
import { withStyles } from "material-ui/styles";
import classnames from "classnames";
import Card, { CardHeader, CardContent } from "material-ui/Card";
import Typography from "material-ui/Typography";
import Comments from "../../comment/containers/CommentList";
import Button from "material-ui/Button";

const styles = theme => ({
  card: {
    display: "flex",
    flexDirection: "row",
    margin: 20
  },
  vote: {
    display: "flex",
    flexDirection: "column",
    width: 100,
    padding: 20
  },
  paper: {
    margin: 20,
    padding: 24,
    backgroundColor: "#eeeeee"
  },
  details: {
    display: "flex",
    flexDirection: "column",
    width: "100%"
  },
  actions: {
    display: "flex"
  },
  avatar: {
    backgroundColor: "#AC0000"
  }
});

const PostDetails = props => {
  const { post, comments, classes, handleRemove } = props;
  return (
    post && (
      <div>
        <Card className={classes.card} elevation={1}>
          <div className={classes.details}>
            <CardHeader
              title={post.title}
              subheader={`Since ${moment().diff(
                post.timestamp,
                "hours"
              )} hours by ${post.author} in /${post.category}`}
              action={
                <div>
                  <Button
                    color="inherit"
                    to={`/update/${post.id}`}
                    component={props => <Link {...props} />}
                  >
                    Edit
                  </Button>
                  <Button color="inherit" onClick={() => handleRemove(post.id)}>
                    Remove
                  </Button>
                </div>
              }
            />
            <CardContent>
              <Typography component="p">{post.body}</Typography>
            </CardContent>
          </div>
        </Card>
        <Comments comments={comments} postId={post.id} />
      </div>
    )
  );
};

PostDetails.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(PostDetails);
