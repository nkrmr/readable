import React from "react";
import { withStyles } from "material-ui/styles";
import ExpansionPanel, {
  ExpansionPanelSummary,
  ExpansionPanelDetails
} from "material-ui/ExpansionPanel";
import ExpandMoreIcon from "material-ui-icons/ExpandMore";
import Typography from "material-ui/Typography";
import CommentItem from "./CommentItem";
import CommentForm from "../containers/CommentForm";
import CommentModal from "../../comment/containers/CommentModal";

const styles = theme => ({
  expension: {
    flexGrow: 1
  },
  secondaryHeading: {
    float: "right"
  },
  vote: {
    display: "flex",
    flexDirection: "column",
    width: 100,
    padding: 10
  },
  paper: {
    margin: 20,
    padding: 5,
    backgroundColor: "#eeeeee"
  },
  column: {
    flexBasis: "95%"
  }
});

const CommentList = ({
  comments,
  post,
  handleVote,
  classes,
  handleRemove,
  commentEdit,
  handleModalClose,
  history
}) => {
  return (
    <div className={classes.expension}>
      <ExpansionPanel className={classes.paper}>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading} component="h4">
            Comments
          </Typography>
          <div className={classes.column}>
            <Typography className={classes.secondaryHeading}>
              Add comment
            </Typography>
          </div>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <CommentForm postId={post.id} />
        </ExpansionPanelDetails>
      </ExpansionPanel>
      {comments &&
        comments.map(comment => (
          <CommentItem
            key={comment.id}
            {...comment}
            post={post}
            handleVote={handleVote}
            handleRemove={handleRemove}
          />
        ))}
      <CommentModal
        comment={commentEdit}
        open={commentEdit ? true : false}
        handleModalClose={handleModalClose}
        history={history}
      />
    </div>
  );
};

export default withStyles(styles)(CommentList);
