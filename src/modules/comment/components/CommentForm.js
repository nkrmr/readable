import React from "react";
// import PropTypes from 'prop-types';
import { Field, reduxForm } from "redux-form";
import { Grid, TextField, Button } from "material-ui";

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
  },
  button: {
    margin: theme.spacing.unit
  }
});

const renderTextField = ({
  input,
  label,
  meta: { touched, error },
  ...custom
}) => (
  <TextField
    label={label}
    helperText={touched && error}
    fullWidth
    margin="normal"
    className={styles.textField}
    {...input}
    {...custom}
  />
);

let CommentForm = ({
  postId,
  onSubmit,
  handleSubmit,
  pristine,
  submitting,
  reset
}) => {
  return (
    <Grid container spacing={24}>
      <Grid item xs={1} />
      <Grid item xs={10}>
        <form
          className={styles.container}
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          autoComplete="off"
        >
          <Field
            name="body"
            component={renderTextField}
            label="Body"
            multiline
            rows="5"
          />
          <Field name="author" component={renderTextField} label="Author" />
          <Button
            type="submit"
            variant="raised"
            color="primary"
            className={styles.button}
            disabled={pristine || submitting}
          >
            Submit
          </Button>
          <Button
            variant="raised"
            className={styles.button}
            disabled={pristine || submitting}
            onClick={reset}
          >
            Clear Values
          </Button>
        </form>
      </Grid>
      <Grid item xs={1} />
    </Grid>
  );
};

const validate = values => {
  const errors = {};
  const requiredFields = ["body", "author"];
  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = "Required";
    }
  });
  return errors;
};

CommentForm = reduxForm({
  form: "CommentForm",
  validate,
  enableReinitialize: true
})(CommentForm);

export default CommentForm;
