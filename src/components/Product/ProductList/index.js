import {
  Card,
  CardContent,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  withStyles,
  TablePagination,
  CardActions,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import ProductItem from '../ProductItem';
import styles from './styles';
class ProductsList extends Component {
  showProductItem = (products) => {
    const { onClickEdit, onClickDelete } = this.props;
    let result = null;
    if (products.length > 0) {
      result = products.map((product, index) => {
        return (
          <ProductItem
            key={product.id}
            product={product}
            index={index}
            onClickEdit={() => onClickEdit(product)}
            onClickDelete={() => onClickDelete(product)}
          />
        );
      });
    }
    return result;
  };

  render() {
    const { classes, products } = this.props;
    return (
      <Card className={classes.card}>
        <CardContent className={classes.content}>
          <PerfectScrollbar>
            <div className={classes.inner}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell padding="checkbox">
                      <Checkbox
                        // checked={selectedUsers.length === users.length}
                        color="primary"
                        // indeterminate={
                        //   selectedUsers.length > 0 &&
                        //   selectedUsers.length < users.length
                        // }
                        // onChange={handleSelectAll}
                      />
                    </TableCell>
                    <TableCell>Tên Sản Phẩm</TableCell>
                    <TableCell>Loại Sản Phẩm</TableCell>
                    <TableCell>Số Lượng</TableCell>
                    <TableCell>Trạng Thái</TableCell>
                    <TableCell>Ngày Khởi Tạo</TableCell>
                    <TableCell>Hành Động</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>{this.showProductItem(products)}</TableBody>
              </Table>
            </div>
          </PerfectScrollbar>
        </CardContent>
        {/* <CardActions className={classes.actions}>
          <TablePagination
            component="div"
            count={10}
            onChangePage={this.handlePageChange}
            onChangeRowsPerPage={this.handleRowsPerPageChange}
            page="1"
            rowsPerPage="10"
            rowsPerPageOptions={[5, 10, 25]}
          />
        </CardActions> */}
      </Card>
    );
  }
}
ProductsList.propTypes = {
  classes: PropTypes.object,
  products: PropTypes.array,
  onClickEdit: PropTypes.func,
  onClickDelete: PropTypes.func,
};
export default withStyles(styles)(ProductsList);
