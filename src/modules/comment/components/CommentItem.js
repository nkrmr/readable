import React from "react";
import moment from "moment";
import { Link } from "react-router-dom";
import { withStyles } from "material-ui/styles";
import Card, { CardHeader, CardContent } from "material-ui/Card";
import Button from "material-ui/Button";
import Typography from "material-ui/Typography";
import FileUpload from "material-ui-icons/FileUpload";
import FileDownload from "material-ui-icons/FileDownload";

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
    display: "flex",
    flexDirection: "row",
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
  }
});

const CommentItem = ({
  id,
  body,
  author,
  timestamp,
  voteScore,
  post,
  handleVote,
  handleRemove,
  classes
}) => {
  return (
    <Card className={classes.card} elevation={1}>
      <div className={classes.vote}>
        <Button
          className={classes.button}
          onClick={(event, value) => handleVote(event, "upVote", id)}
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
          {voteScore}
        </Button>
        <Button
          className={classes.button}
          onClick={(event, value) => handleVote(event, "downVote", id)}
          variant="raised"
          color="primary"
        >
          <FileDownload />
        </Button>
      </div>
      <div className={classes.details}>
        <CardHeader
          subheader={`Since ${moment().diff(
            timestamp,
            "hours"
          )} hours by ${author}`}
          action={
            <div>
              <Button
                color="inherit"
                to={`/${post.category}/${post.id}/comment/${id}`}
                component={props => <Link {...props} />}
              >
                Edit
              </Button>
              <Button color="inherit" onClick={() => handleRemove(id)}>
                Remove
              </Button>
            </div>
          }
        />
        <CardContent>
          <Typography component="p">{body}</Typography>
        </CardContent>
      </div>
    </Card>
  );
};

export default withStyles(styles)(CommentItem);
