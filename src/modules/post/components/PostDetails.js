import React from "react";
import PropTypes from "prop-types";
import { Redirect, Link } from "react-router-dom";
import moment from "moment";
import { withStyles } from "material-ui/styles";
import Card, { CardHeader, CardContent, CardActions } from "material-ui/Card";
import Typography from "material-ui/Typography";
import Button from "material-ui/Button";
import FileUpload from "material-ui-icons/FileUpload";
import FileDownload from "material-ui-icons/FileDownload";
import Comments from "../../comment/containers/CommentList";

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

const PostDetails = ({
  initialState,
  post,
  comments,
  classes,
  handleRemove,
  voteScore,
  handleVote,
  commentsCount,
  category,
  commentEdit,
  history
}) => {
  return (
    <div>
      {post ? (
        <div>
          <Card className={classes.card} elevation={1}>
            <div className={classes.vote}>
              <Button
                className={classes.button}
                onClick={(event, value) => handleVote(event, "upVote", post.id)}
                variant="raised"
                color="primary"
              >
                <FileUpload />
              </Button>

              <Button
                className={classes.button}
                variant="raised"
                color="default"
                disabled
              >
                {post.voteScore}
              </Button>
              <Button
                className={classes.button}
                onClick={(event, value) =>
                  handleVote(event, "downVote", post.id)
                }
                variant="raised"
                color="primary"
              >
                <FileDownload />
              </Button>
            </div>
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
                    <Button
                      color="inherit"
                      onClick={() => handleRemove(post.id)}
                    >
                      Remove
                    </Button>
                  </div>
                }
              />
              <CardContent>
                <Typography component="p">{post.body}</Typography>
              </CardContent>
              <CardActions className={classes.actions}>
                <Button size="small" color="primary" disabled>
                  {comments.filter(c => c.parentId === post.id).length}{" "}
                  comment(s)
                </Button>
              </CardActions>
            </div>
          </Card>
          <Comments
            comments={comments}
            post={post}
            commentEdit={commentEdit}
            history={history}
          />
        </div>
      ) : (
        initialState && <Redirect to={`/notfound`} />
      )}
    </div>
  );
};

PostDetails.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(PostDetails);
