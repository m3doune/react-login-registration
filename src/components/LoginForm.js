import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {Button} from 'reactstrap';

const LoginForm = (props) => {

  return (
    <form onSubmit={props.handleSubmit} className="form-signin">

      <Field component="input"
             name="username"
             id="username"
             type="text"
             placeholder="Username or email address"
             required="required"
             className="form-control"
      />

      <Field component="input"
             name="password"
             id="password"
             type="password"
             placeholder="Password"
             required="required"
             className="form-control"
      />

      <Button type="submit"
              size="lg"
              block
              color="success"
      >
        Login
      </Button>
    </form>
  );

};

LoginForm.propTypes = {
  handleSubmit: React.PropTypes.func.isRequired,
  onSubmit: React.PropTypes.func.isRequired
};

export default reduxForm({
  form: 'login'
})(LoginForm);
