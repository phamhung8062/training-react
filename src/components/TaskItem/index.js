import React, { Component } from 'react';
import styles from './styles';
import { withStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Fab from '@material-ui/core/Fab';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';
class TaskItem extends Component {
  render() {
    const { classes, task, status } = this.props;
    return (
      <Card className={classes.card} key={task.id}>
        <CardContent>
          <Grid container justify="space-between">
            <Grid item md={8}>
              <Typography component="h2">{task.name}</Typography>
            </Grid>
            <Grid item md={4}>
              <Typography component="h2">{status.lable}</Typography>
            </Grid>
          </Grid>
          <p>{task.description}</p>
        </CardContent>
        <CardActions className={classes.cartActions}>
          <Fab color="primary" className="classes.fab" size="small">
            <Icon fontSize="small">edit_icon</Icon>
          </Fab>
          <Fab color="secondary" className="classes.fab" size="small">
            <Icon fontSize="small">delete_icon</Icon>
          </Fab>
        </CardActions>
      </Card>
    );
  }
}

export default withStyles(styles)(TaskItem);
