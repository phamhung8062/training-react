import { Box, Button, withStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import AddIcons from '@material-ui/icons/Add';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as modalActions from '../../action/modal';
import * as taskActions from '../../action/task';
import SearchBox from '../../components/SearchBox';
import TaskList from '../../components/TaskList';
import { STATUSES } from '../../constants';
import TaskForm from '../TaskForm';
import styles from './styles';
import { toast } from 'react-toastify';

class TaskBoard extends Component {
  componentDidMount() {
    const { taskActionCreators } = this.props;
    // const { fetchListTaskRequest } = taskActionCreators;
    // fetchListTaskRequest();
    const { fetchListTask } = taskActionCreators;
    fetchListTask();
  }

  handleClose = () => {};

  // renderForm = () => {
  //   let xhtml = null;
  //   const { open } = this.state;
  //   xhtml = <TaskForm open={open} onClose={this.handleClose} />;
  //   return xhtml;
  // };

  openForm = () => {
    const { modalActionCreators, taskActionCreators } = this.props;
    const { setTaskEditting } = taskActionCreators;
    setTaskEditting(null);
    const {
      showModal,
      changeModalContent,
      changeModalTittle,
    } = modalActionCreators;
    showModal();
    changeModalTittle('Thêm Mới Công Việc');
    changeModalContent(<TaskForm />);
  };

  renderBoard = () => {
    const { TaskLists } = this.props;
    let xhtml = null;
    xhtml = (
      <Grid container spacing={6}>
        {STATUSES.map((status) => {
          const TaskFilter = TaskLists.filter(
            (task) => task.status === status.value,
          );
          return (
            <TaskList
              tasks={TaskFilter}
              status={status}
              key={status}
              onClickEdit={this.handleEdit}
              onClickDelete={this.showModalDeleteTask}
            />
          );
        })}
      </Grid>
    );
    return xhtml;
  };

  handleFilter = (e) => {
    const { value } = e.target;
    const { taskActionCreators } = this.props;
    const { filterTask } = taskActionCreators;
    filterTask(value);
  };

  handleEdit = (task) => {
    const { taskActionCreators, modalActionCreators } = this.props;
    const { setTaskEditting } = taskActionCreators;
    setTaskEditting(task);
    const {
      showModal,
      changeModalContent,
      changeModalTittle,
    } = modalActionCreators;
    showModal();
    changeModalTittle('Cập Nhập Công Việc');
    changeModalContent(<TaskForm />);
  };

  showModalDeleteTask = (task) => {
    const { modalActionCreators, classes } = this.props;
    const {
      showModal,
      changeModalContent,
      changeModalTittle,
      hideModal,
    } = modalActionCreators;
    showModal();
    changeModalTittle('Xóa Công Việc');
    changeModalContent(
      <div className={classes.modalDelete}>
        <div className={classes.modalConfirmText}>
          Bạn chắc chắn muốn xóa{' '}
          <span className={classes.modalConfirmTextBold}>{task.name}</span>?
        </div>
        <Box display="flex" flexDirection="row-reverse" mt={2}>
          <Box mt={1} ml={2}>
            <Button variant="contained" onClick={hideModal}>
              Hủy Bỏ
            </Button>
          </Box>
          <Box mt={1}>
            <Button
              variant="contained"
              color="primary"
              onClick={() => this.handleDelete(task)}
            >
              Đồng Ý
            </Button>
          </Box>
        </Box>
      </div>,
    );
  };

  handleDelete = (task) => {
    const { id } = task;
    const { taskActionCreators } = this.props;
    const { deleteTask } = taskActionCreators;
    deleteTask(id);
  };

  renderSearchBox = () => {
    let xhtml = null;
    xhtml = <SearchBox handleChange={this.handleFilter} />;
    return xhtml;
  };

  loadData = () => {
    const { taskActionCreators } = this.props;
    // const { fetchListTaskRequest } = taskActionCreators;
    // fetchListTaskRequest();
    const { fetchListTask } = taskActionCreators;
    fetchListTask();
  };

  loadToat = () => {
    toast.success('gaggaa');
  };

  render() {
    const { classes } = this.props;
    return (
      <div classes={classes.TaskBoard}>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          // onClick={this.loadData}
          onClick={this.loadToat}
          style={{
            marginRight: 20,
          }}
        >
          Load Data
        </Button>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={this.openForm}
        >
          <AddIcons color="secondary" /> Thêm Mới
        </Button>
        {this.renderSearchBox()}
        {this.renderBoard()}
        {/* {this.renderForm()} */}
      </div>
    );
  }
}
TaskBoard.propTypes = {
  classes: PropTypes.object,
  taskActionCreators: PropTypes.shape({
    fetchListTask: PropTypes.func,
    filterTask: PropTypes.func,
    setTaskEditting: PropTypes.func,
    deleteTask: PropTypes.func,
  }),
  modalActionCreators: PropTypes.shape({
    showModal: PropTypes.func,
    hideModal: PropTypes.func,
    changeModalTittle: PropTypes.func,
    changeModalContent: PropTypes.func,
  }),
  TaskLists: PropTypes.array,
};
const mapStateToProps = (state) => {
  return {
    TaskLists: state.task.listTask,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    taskActionCreators: bindActionCreators(taskActions, dispatch),
    modalActionCreators: bindActionCreators(modalActions, dispatch),
  };
};
export default withStyles(styles)(
  connect(mapStateToProps, mapDispatchToProps)(TaskBoard),
);
