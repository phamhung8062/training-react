import React, { Component } from 'react';
import { withStyles, Button, Grid, MenuItem } from '@material-ui/core';
import styles from './styles';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';
import * as modalActions from '../../action/modal';
import { reduxForm, Field } from 'redux-form';
import renderTextField from '../../components/FormHelper/TextField';
import validate from './validate';
import * as TaskAction from '../../action/task';
import renderSelectField from '../../components/FormHelper/Selected';
class TaskForm extends Component {
  handleSubmitForm = (data) => {
    console.log(data);
    const { taskActionCreators, taskEditting } = this.props;
    const { addTask, updateTask } = taskActionCreators;
    const { title, description, status } = data;
    if (taskEditting && taskEditting.id) {
      updateTask(title, description, status);
    } else {
      addTask(title, description);
    }
  };

  required = (value) => {
    let err = 'Vui Lòng Nhập Tiêu Đề';
    if (value !== null && typeof value !== 'undefined' && value.trim() !== '') {
      err = null;
    }
    return err;
  };

  renderStatusSelection = () => {
    let xhtml = null;
    const { taskEditting, classes } = this.props;
    if (taskEditting && taskEditting.id) {
      xhtml = (
        <Field
          id="status"
          label="Trạng Thái"
          className={classes.select}
          name="status"
          component={renderSelectField}
        >
          <MenuItem value={0}>Ready</MenuItem>
          <MenuItem value={1}>In Progress</MenuItem>
          <MenuItem value={2}>Complete</MenuItem>
        </Field>
      );
    }
    return xhtml;
  };

  render() {
    const {
      classes,
      modalActionCreators,
      handleSubmit,
      invalid,
      submitting,
    } = this.props;
    const { hideModal } = modalActionCreators;
    return (
      <form onSubmit={handleSubmit(this.handleSubmitForm)}>
        <Grid container>
          <Grid item md={12}>
            {/* <TextField
              id="standard-name"
              label="Tiêu Đề"
              margin="normal"
              className={classes.textField}
            /> */}
            <Field
              id="title"
              label="Tiêu Đề"
              className={classes.textField}
              margin="normal"
              name="title"
              component={renderTextField}
              // value={taskEditting ? taskEditting.title : ''}
              // validate={[this.required, this.minLenght5]}
            />
            <Field
              id="title"
              label="hihi"
              className={classes.textField}
              margin="normal"
              name="title"
              component={renderTextField}
              // value={taskEditting ? taskEditting.title : ''}
              // validate={[this.required, this.minLenght5]}
            />
          </Grid>
          <Grid item md={12}>
            <Field
              id="description"
              label="Mô Tả"
              className={classes.textField}
              margin="normal"
              name="description"
              component={renderTextField}
              // value={taskEditting ? taskEditting.description : ''}
            />
          </Grid>
          {this.renderStatusSelection()}
          <Grid item md={12}>
            <Box flexDirection="row-reverse" display="flex" mt={2}>
              <Box ml={1}>
                <Button variant="contained" onClick={hideModal}>
                  Hủy Bỏ
                </Button>
              </Box>
              <Button
                disabled={invalid || submitting}
                variant="contained"
                color="primary"
                type="submit"
              >
                Lưu Lại
              </Button>
              &nbsp;
            </Box>
          </Grid>
        </Grid>
      </form>
    );
  }
}

TaskForm.propTypes = {
  classes: PropTypes.object,
  modalActionCreators: PropTypes.shape({
    hideModal: PropTypes.func,
  }),
  handleSubmit: PropTypes.func,
  invalid: PropTypes.bool,
  submitting: PropTypes.bool,
  taskActionCreators: PropTypes.shape({
    addTask: PropTypes.func,
    updateTask: PropTypes.func,
  }),
  taskEditting: PropTypes.object,
};
const mapStateToProps = (state) => {
  return {
    taskEditting: state.task.taskEditting,
    initialValues: {
      title: state.task.taskEditting ? state.task.taskEditting.name : null,
      description: state.task.taskEditting
        ? state.task.taskEditting.description
        : null,
      status: state.task.taskEditting ? state.task.taskEditting.status : 1,
    },
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    modalActionCreators: bindActionCreators(modalActions, dispatch),
    taskActionCreators: bindActionCreators(TaskAction, dispatch),
  };
};
const FORM_NAME = 'TASK_MANAGERMENT';
const withReduxForm = reduxForm({
  form: FORM_NAME,
  validate,
});
const withConnect = connect(mapStateToProps, mapDispatchToProps);
// export default withStyles(styles)(GolbalLoading);
export default compose(
  withStyles(styles),
  withConnect,
  withReduxForm,
)(TaskForm);
