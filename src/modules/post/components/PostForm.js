import React from "react";
// import PropTypes from 'prop-types';
import { Field, reduxForm } from "redux-form";
import { withStyles } from "material-ui/styles";
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
    value="react"
    className={styles.textField}
    {...input}
    {...custom}
  />
);

const renderSelectField = ({
  input,
  label,
  meta: { touched, error },
  children,
  ...custom
}) => (
  <TextField
    label={label}
    helperText={touched && error}
    fullWidth
    {...input}
    SelectProps={{
      native: true
    }}
    children={children}
    {...custom}
  />
);

let PostForm = ({
  categories,
  onSubmit,
  handleSubmit,
  pristine,
  submitting,
  reset,
  classes
}) => {
  return (
    <Grid container spacing={24}>
      <Grid item xs={1} />
      <Grid item xs={10}>
        <form
          className={classes.container}
          onSubmit={handleSubmit(onSubmit)}
          autoComplete="off"
        >
          <Field name="title" component={renderTextField} label="Title" />
          <Field
            name="body"
            component={renderTextField}
            label="Body"
            multiline
            rows="10"
          />
          <Field
            name="category"
            component={renderSelectField}
            select
            label="Category"
          >
            {categories.map(category => (
              <option key={category.path} value={category.path}>
                {category.name}
              </option>
            ))}
          </Field>
          <Field name="author" component={renderTextField} label="Author" />
          <Button
            type="submit"
            variant="raised"
            color="primary"
            className={classes.button}
            disabled={pristine || submitting}
          >
            Submit
          </Button>
          <Button
            variant="raised"
            className={classes.button}
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
  const requiredFields = ["title", "body", "category", "author"];
  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = "Required";
    }
  });
  return errors;
};

PostForm = reduxForm({
  form: "postForm",
  validate,
  enableReinitialize: true
})(PostForm);

export default withStyles(styles)(PostForm);
