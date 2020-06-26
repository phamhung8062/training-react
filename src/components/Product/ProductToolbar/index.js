import { Button, withStyles, ButtonBase } from '@material-ui/core';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import SearchInput from '../../SearchInput';
import styles from './styles';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose, bindActionCreators } from 'redux';
import * as ProductActions from '../../../action/product';
class ProductToolbar extends Component {
  setEdit = () => {
    const { productActionCreators } = this.props;
    const { ResetProductEditting } = productActionCreators;
    ResetProductEditting();
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
        <div className={classes.row}>
          <span className={classes.spacer} />
          <Button className={classes.importButton}>Import</Button>
          <Button className={classes.exportButton}>Export</Button>
          <Button
            variant="contained"
            className={classes.button}
            onClick={this.setEdit}
          >
            <Link to="/product/add" className={classes.link}>
              Thêm Mới
            </Link>
          </Button>
        </div>
        <div className={classes.row}>
          <SearchInput className={classes.searchInput} />
        </div>
      </div>
    );
  }
}
ProductToolbar.propTypes = {
  classes: PropTypes.object,
  productActionCreators: PropTypes.shape({
    ResetProductEditting: PropTypes.func,
  }),
};
const mapDispatchToProps = (dispatch) => {
  return {
    productActionCreators: bindActionCreators(ProductActions, dispatch),
  };
};
const withConnect = connect(null, mapDispatchToProps);
export default compose(withStyles(styles), withConnect)(ProductToolbar);
