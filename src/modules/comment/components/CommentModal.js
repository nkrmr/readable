import React from "react";
import { withStyles } from "material-ui/styles";
import Typography from "material-ui/Typography";
import Modal from "material-ui/Modal";
import CommentForm from "../containers/CommentForm";

const styles = theme => ({
  paper: {
    position: "absolute",
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4
  }
});

const getModalStyle = () => {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`
  };
};

const CommentModal = ({
  comment,
  open,
  handleModalClose,
  classes,
  history
}) => {
  return (
    <Modal
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
      open={open}
      onClose={handleModalClose}
    >
      <div style={getModalStyle()} className={classes.paper}>
        <Typography variant="title" id="modal-title">
          Update comment
        </Typography>
        <CommentForm comment={comment} history={history} />
      </div>
    </Modal>
  );
};

export default withStyles(styles)(CommentModal);
