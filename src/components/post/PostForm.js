import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import TextField from 'material-ui/TextField';

let PostForm = props => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <TextField floatingLabelText="Title" />
      <br />
      <TextField floatingLabelText="Author" />
      <br />
      <TextField
        floatingLabelText="Body"
        multiLine={true}
        rows={2}
        rowsMax={4}
      />
      <br />
    </form>
  );
};

PostForm = reduxForm({
  form: 'post',
})(PostForm);

export default PostForm;
