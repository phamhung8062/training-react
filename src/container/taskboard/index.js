import React, { Component } from 'react';
import { withStyles, Button } from '@material-ui/core';
import styles from './styles';
import AddIcons from '@material-ui/icons/Add';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import { STATUSES } from '../../constants';
import TaskList from '../../components/TaskList';
import TaskForm from '../../components/TaskForm';

const TaskLists = [
  {
    id: 1,
    name: 'Read Book',
    status: 0,
    description: 'Read material book',
  },
  {
    id: 2,
    name: 'Play FootBall',
    status: 2,
    description: 'With myfriend',
  },
  {
    id: 3,
    name: 'Play Game',
    status: 1,
    description: 'Alone',
  },
];

class TaskBoard extends Component {
  state = {
    open: false,
  };

  handleClose = () => {
    this.setState({
      open: false,
    });
  };

  renderForm = () => {
    let xhtml = null;
    const { open } = this.state;
    xhtml = <TaskForm open={open} onClose={this.handleClose} />;
    return xhtml;
  };

  openForm = () => {
    this.setState({
      open: true,
    });
  };

  renderBoard = () => {
    let xhtml = null;
    xhtml = (
      // eslint-disable-next-line react/jsx-first-prop-new-line
      <Grid container spacing={2}>
        {STATUSES.map((status) => {
          const TaskFilter = TaskLists.filter(
            (task) => task.status === status.value,
          );
          return <TaskList tasks={TaskFilter} status={status} key={status} />;
        })}
      </Grid>
    );
    return xhtml;
  };

  render() {
    const { classes } = this.props;
    return (
      <div classes={classes.TaskBoard}>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={this.openForm}
        >
          <AddIcons color="secondary" /> Thêm Mới
        </Button>
        {this.renderBoard()}
        {this.renderForm()}
      </div>
    );
  }
}
TaskBoard.propTypes = {
  classes: PropTypes.object,
};
export default withStyles(styles)(TaskBoard);
