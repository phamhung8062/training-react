import { withStyles, Box, Button } from '@material-ui/core';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import ProductsList from '../../../components/Product/ProductList';
import ProductToolbar from '../../../components/Product/ProductToolbar';
import styles from './styles';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as productActions from '../../../action/product';
import * as modalActions from '../../../action/modal';
class ListProducts extends Component {
  componentDidMount() {
    const { productActionCreators } = this.props;
    const { fetchListProduct } = productActionCreators;
    fetchListProduct();
  }

  handleEdit = (product) => {
    const { productActionCreators } = this.props;
    const { setProductEditting } = productActionCreators;
    setProductEditting(product);
    // const {
    //   showModal,
    //   changeModalContent,
    //   changeModalTittle,
    // } = modalActionCreators;
    // showModal();
    // changeModalTittle('Cập Nhập Công Việc');
    // changeModalContent(<TaskForm />);
  };

  showModalDeleteTask = (product) => {
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
          <span className={classes.modalConfirmTextBold}>{product.name}</span>?
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
              onClick={() => this.handleDelete(product)}
            >
              Đồng Ý
            </Button>
          </Box>
        </Box>
      </div>,
    );
  };

  handleDelete = (product) => {
    const { id } = product;
    const { productActionCreators } = this.props;
    const { deleteProduct } = productActionCreators;
    deleteProduct(id);
  };

  render() {
    const { classes, ProductList } = this.props;
    return (
      <div className={classes.root}>
        <ProductToolbar />
        <div className={classes.content}>
          <ProductsList
            products={ProductList}
            onClickEdit={this.handleEdit}
            onClickDelete={this.showModalDeleteTask}
          />
        </div>
      </div>
    );
  }
}
ListProducts.propTypes = {
  classes: PropTypes.object,
  productActionCreators: PropTypes.shape({
    fetchListProduct: PropTypes.func,
    setProductEditting: PropTypes.func,
    deleteProduct: PropTypes.func,
  }),
  ProductList: PropTypes.array,
  modalActionCreators: PropTypes.shape({
    showModal: PropTypes.func,
    hideModal: PropTypes.func,
    changeModalTittle: PropTypes.func,
    changeModalContent: PropTypes.func,
  }),
};
const mapStateToProps = (state) => {
  return {
    ProductList: state.product.listProduct,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    productActionCreators: bindActionCreators(productActions, dispatch),
    modalActionCreators: bindActionCreators(modalActions, dispatch),
  };
};
export default withStyles(styles)(
  connect(mapStateToProps, mapDispatchToProps)(ListProducts),
);
