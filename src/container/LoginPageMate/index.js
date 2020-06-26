/* eslint-disable react/no-unescaped-entities */
import {
  Avatar,
  Box,
  Checkbox,
  Container,
  FormControlLabel,
  Grid,
} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { withStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators, compose } from 'redux';
import { Field, reduxForm } from 'redux-form';
import * as authActions from '../../action/auth';
import TextField from '../../components/FormHelper/TextField';
import styles from './styles';
import validate from './validate';
class LoginPageMate extends Component {
  Copyright = () => {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://material-ui.com/">
          Your Website
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  };

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
      <Container component="main" maxWidth="xs">
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form
            className={classes.form}
            onSubmit={handleSubmit(this.handleSubmitForm)}
          >
            <Field
              // id="userName"
              // label="Email"
              // className={classes.textField}
              // fullWidth
              // margin="normal"
              // name="userName"
              // component={TextField}
              // //
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="userName"
              label="Email Address"
              name="userName"
              autoComplete="email"
              autoFocus
              component={TextField}
            />
            <Field
              // id="passWord"
              // label="passWord"
              // className={classes.textField}
              // type="password"
              // fullWidth
              // margin="normal"
              // name="passWord"
              // component={TextField}
              // //
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="passWord"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              component={TextField}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              disabled={invalid || submitting}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#.com" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link to="/signup" variant="body2">
                  Don't have an account? Sign Up
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
        <Box mt={8}>{this.Copyright}</Box>
      </Container>
    );
  }
}
LoginPageMate.propTypes = {
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

export default compose(
  withStyles(styles),
  withConnect,
  withForm,
)(LoginPageMate);
