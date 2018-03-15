import React from "react";
import PropTypes from "prop-types";
import PostItem from "./PostItem";
import { Grid, Paper, MenuList, MenuItem } from "material-ui";
import { withStyles } from "material-ui/styles";
import Menu from "../../category/containers/Menu";
import Avatar from "material-ui/Avatar";
import Button from "material-ui/Button";
import Typography from "material-ui/Typography";

const styles = theme => ({
  paper: {
    display: "flex",
    flexDirection: "row",
    margin: 20,
    padding: 24,
    backgroundColor: "#eeeeee"
  }
});

const PostList = props => {
  const { posts, comments, handleVote, handleRemove, classes } = props;
  return (
    <Grid container spacing={24}>
      <Grid item xs={2}>
        <Menu />
      </Grid>
      <Grid item xs={10}>
        <div className="Post-List">
          {posts.map(post => (
            <PostItem
              key={post.id}
              {...post}
              commentsCount={
                comments.filter(c => c.parentId === post.id).length
              }
              handleVote={handleVote}
              handleRemove={handleRemove}
            />
          ))}
          {posts.length === 0 && (
            <Paper className={classes.paper} elevation={1}>
              <Typography variant="headline" component="h4">
                No Post
              </Typography>
            </Paper>
          )}
        </div>
      </Grid>
    </Grid>
  );
};

PostList.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(PostList);
