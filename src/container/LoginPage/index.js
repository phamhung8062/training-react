import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/styles';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators, compose } from 'redux';
import { Field, reduxForm } from 'redux-form';
import * as authActions from '../../action/auth';
import TextField from '../../components/FormHelper/TextField';
import styles from './styles';
import validate from './validate';
import PropTypes from 'prop-types';
class LoginPage extends Component {
  handleSubmitForm = (values) => {
    if (values) {
      const { userName, passWord } = values;
      const { authActionsCretors } = this.props;
      const { login } = authActionsCretors;
      if (login) {
        login(userName, passWord);
      }
    } else {
      console.log('data is not valid');
    }
  };

  render() {
    const { classes, handleSubmit, invalid, submitting } = this.props;
    return (
      <div className={classes.background}>
        <div className={classes.login}>
          <Card>
            <CardContent>
              <form onSubmit={handleSubmit(this.handleSubmitForm)}>
                <div className="text-xs-center pb-xs">
                  <img src="/static/images/logo-dark.svg" alt="" />
                  <Typography variant="caption">
                    Sign in with your app id to continue.
                  </Typography>
                </div>
                <Field
                  id="userName"
                  label="Email"
                  className={classes.textField}
                  fullWidth
                  margin="normal"
                  name="userName"
                  component={TextField}
                />
                <Field
                  id="passWord"
                  label="passWord"
                  className={classes.textField}
                  type="password"
                  fullWidth
                  margin="normal"
                  name="passWord"
                  component={TextField}
                />
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  type="submit"
                  disabled={invalid || submitting}
                >
                  Login
                </Button>
                <div className="pt-1 text-md-center">
                  <Link to="/signup">
                    <Button>Create new account.</Button>
                  </Link>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }
}
LoginPage.propTypes = {
  classes: PropTypes.object,
  authActionsCretors: PropTypes.shape({
    login: PropTypes.func,
  }),
};
const FORM_NAME = 'LOGIN';
const withForm = reduxForm({
  form: FORM_NAME,
  validate,
});

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  authActionsCretors: bindActionCreators(authActions, dispatch),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withStyles(styles), withConnect, withForm)(LoginPage);
