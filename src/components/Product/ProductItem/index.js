import {
  Avatar,
  Checkbox,
  IconButton,
  TableCell,
  TableRow,
  Typography,
  withStyles,
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import VisibilityIcon from '@material-ui/icons/Visibility';
import EditIcon from '@material-ui/icons/Edit';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styles from './styles';
import { Link } from 'react-router-dom';
class ProductItem extends Component {
  render() {
    const { classes, product, onClickEdit, onClickDelete } = this.props;
    const d = new Date(product.createdDate);
    const n = d.getDate();
    return (
      <TableRow className={classes.tableRow} hover>
        <TableCell padding="checkbox">
          <Checkbox color="primary" value="true" />
        </TableCell>
        <TableCell>
          <div className={classes.nameContainer}>
            <Avatar className={classes.avatar} src={product.image}>
              Pham
            </Avatar>
            <Typography variant="body1">{product.name}</Typography>
          </div>
        </TableCell>
        <TableCell>{product.battery}</TableCell>
        <TableCell>{product.amount}</TableCell>
        <TableCell
          style={{
            color: 'red',
          }}
        >
          {product.status === 1 ? 'Hoạt Động ' : 'Ẩn'}
        </TableCell>
        <TableCell>{n}.</TableCell>
        <TableCell>
          <Link to="/product/info" className={classes.link}>
            <IconButton color="default" aria-label="add to shopping cart">
              <VisibilityIcon onClick={onClickEdit} />
            </IconButton>
          </Link>
          <Link to="/product/add" className={classes.link}>
            <IconButton color="primary" aria-label="add to shopping cart">
              <EditIcon onClick={onClickEdit} />
            </IconButton>
          </Link>
          <IconButton color="secondary" aria-label="add an alarm">
            <DeleteIcon onClick={onClickDelete} />
          </IconButton>
        </TableCell>
      </TableRow>
    );
  }
}
ProductItem.propTypes = {
  classes: PropTypes.object,
  product: PropTypes.object,
  onClickEdit: PropTypes.func,
  onClickDelete: PropTypes.func,
};
export default withStyles(styles)(ProductItem);
