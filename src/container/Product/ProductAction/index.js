/* eslint-disable react/no-deprecated */
/* eslint-disable no-unused-vars */
/* eslint-disable prefer-const */
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  withStyles,
  Hidden,
  MenuItem,
} from '@material-ui/core';
import CKEditor from 'ckeditor4-react';
import MaterialTable from 'material-table';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose, bindActionCreators } from 'redux';
import { Field, reduxForm } from 'redux-form';
import renderTextField from '../../../components/FormHelper/TextField';
import styles from './styles';
import * as ProductActions from '../../../action/product';
import { Link } from 'react-router-dom';
import renderSelectField from '../../../components/FormHelper/Selected';
import * as FileInput from '../../../components/FormHelper/FileInput';
class ProductAction extends Component {
  constructor(props) {
    super(props);
    this.state = {
      columnsoption: [
        { title: 'Tên Thuộc Tính', field: 'name' },
        { title: 'Giá Trị', field: 'value' },
      ],
      columnsverion: [
        { title: 'Tên Phiên Bản', field: 'name' },
        { title: 'Giá ', field: 'price' },
        { title: 'Mã ', field: 'code' },
      ],
      data: [{ name: 'Màu Sắc', value: 'hahah' }],
      datav: [{ name: 'Màu', value: 'Xanh' }],
      huhu: 'hahaha',
      colors: ['Apple', 'Sam Sung', 'Oppo', 'XiaoMi', 'ReMe'],
      content: '',
    };
  }

  handleSubmitForm = (data) => {
    const { productActionCreators, productEditting } = this.props;
    const { addProduct, updateProduct } = productActionCreators;
    const { content } = this.state;
    data.descripton = content;
    data.base64 = data.image.base64;
    data.namefile = data.image.namefile;
    data.image = '';
    if (productEditting && productEditting.id) {
      updateProduct(data);
    } else {
      addProduct(data);
    }
  };

  onChange = (evt) => {
    const newContent = evt.editor.getData();
    this.setState({
      content: newContent,
    });
  };

  render() {
    const { classes, handleSubmit, productEditting } = this.props;
    let { data, datav } = this.state;
    const { columnsoption, columnsverion, colors } = this.state;
    return (
      <form onSubmit={handleSubmit(this.handleSubmitForm)}>
        <div className={classes.root}>
          <Grid container spacing={4}>
            <Grid item md={8} xs={12}>
              <Card>
                <CardHeader title="Thông Tin Sản Phẩm" />
                <Divider />
                <CardContent>
                  <Grid container className={classes.a}>
                    <Field
                      fullWidth
                      required
                      label="Tên Sản Phẩm"
                      name="name"
                      type="text"
                      variant="outlined"
                      size="small"
                      InputLabelProps={{
                        shrink: true,
                      }}
                      component={renderTextField}
                      placeholder=""
                    />
                  </Grid>
                  <Hidden xsUp>
                    <Field
                      name="descripton"
                      type="text"
                      component={renderTextField}
                      placeholder=""
                      defaultValue="đsdsdds"
                    />
                  </Hidden>
                  <Hidden xsUp>
                    <Field name="id" type="text" component={renderTextField} />
                  </Hidden>

                  <Grid container wrap="wrap" spacing={3} className={classes.a}>
                    <Grid item xs={12} sm={6}>
                      <Field
                        fullWidth
                        required
                        label="Mã Sản Phẩm"
                        name="code"
                        style={{ marginTop: '1rem' }}
                        type="text"
                        variant="outlined"
                        size="small"
                        InputLabelProps={{
                          shrink: true,
                        }}
                        component={renderTextField}
                        placeholder=""
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Field
                        fullWidth
                        required
                        label="Giá Sản Phẩm"
                        name="price"
                        style={{ marginTop: '1rem' }}
                        type="number"
                        variant="outlined"
                        size="small"
                        InputLabelProps={{
                          shrink: true,
                        }}
                        component={renderTextField}
                        placeholder=""
                      />
                    </Grid>
                  </Grid>

                  <Grid className={classes.ckedit}>
                    <div>
                      Mô tả
                      <CKEditor
                        onChange={this.onChange}
                        // events={{
                        //   blur: this.onBlur,
                        //   afterPaste: this.afterPaste,
                        //   onChange: this.onChange,
                        // }}
                      />
                    </div>
                  </Grid>
                </CardContent>
              </Card>
              <Card className={classes.card}>
                <MaterialTable
                  title="Thuộc Tính"
                  options={{
                    search: false,
                    paging: false,
                    sorting: false,
                    tableData: false,
                  }}
                  data={data}
                  columns={columnsoption}
                  editable={{
                    onRowAdd: (newData) =>
                      new Promise((resolve) => {
                        setTimeout(() => {
                          resolve();
                          this.setState((prevState) => {
                            data = [...prevState.datav];
                            data.push(newData);
                            return { ...prevState, data };
                          });
                        }, 600);
                      }),
                    onRowUpdate: (newData, oldData) =>
                      new Promise((resolve) => {
                        setTimeout(() => {
                          resolve();
                          if (oldData) {
                            this.setState((prevState) => {
                              data = [...prevState.data];
                              data[data.indexOf(oldData)] = newData;
                              return { ...prevState, data };
                            });
                          }
                        }, 600);
                      }),
                    onRowDelete: (oldData) =>
                      new Promise((resolve) => {
                        setTimeout(() => {
                          resolve();
                          this.setState((prevState) => {
                            data = [...prevState.data];
                            data.splice(data.indexOf(oldData), 1);
                            return { ...prevState, data };
                          });
                        }, 600);
                      }),
                  }}
                />
                {/* </CardContent> */}
                <Divider />
                <CardActions>
                  <Button
                    color="primary"
                    variant="outlined"
                    onClick={() => this.onclick(data)}
                  >
                    Xác Nhận
                  </Button>
                </CardActions>
              </Card>
              <Card className={classes.card}>
                <MaterialTable
                  title="Phiên bản"
                  options={{
                    search: false,
                    paging: false,
                    sorting: false,
                  }}
                  data={datav}
                  columns={columnsverion}
                  editable={{
                    onRowAdd: (newData) =>
                      new Promise((resolve) => {
                        setTimeout(() => {
                          resolve();
                          this.setState((prevState) => {
                            datav = [...prevState.datav];
                            datav.push(newData);
                            return { ...prevState, datav };
                          });
                        }, 600);
                      }),
                    onRowUpdate: (newData, oldData) =>
                      new Promise((resolve) => {
                        setTimeout(() => {
                          resolve();
                          if (oldData) {
                            this.setState((prevState) => {
                              data = [...prevState.data];
                              data[data.indexOf(oldData)] = newData;
                              return { ...prevState, data };
                            });
                          }
                        }, 600);
                      }),
                    onRowDelete: (oldData) =>
                      new Promise((resolve) => {
                        setTimeout(() => {
                          resolve();
                          this.setState((prevState) => {
                            data = [...prevState.data];
                            data.splice(data.indexOf(oldData), 1);
                            return { ...prevState, data };
                          });
                        }, 600);
                      }),
                  }}
                />
                {/* </CardContent> */}
              </Card>
            </Grid>
            <Grid item md={4} xs={12}>
              <Card>
                <CardHeader title="Phân Loại" />
                <Divider />
                <CardContent>
                  <Grid container className={classes.a}>
                    <Field
                      id="producer"
                      className={classes.select}
                      name="producer"
                      component={renderSelectField}
                    >
                      {colors.map((colorOption) => (
                        <MenuItem value={colorOption} key={colorOption}>
                          {colorOption}
                        </MenuItem>
                      ))}
                    </Field>
                    <Field
                      fullWidth
                      required
                      label="Số Lượng"
                      name="amount"
                      type="number"
                      style={{ marginTop: '1rem' }}
                      variant="outlined"
                      size="small"
                      InputLabelProps={{
                        shrink: true,
                      }}
                      component={renderTextField}
                      placeholder=""
                    />
                  </Grid>
                </CardContent>
              </Card>
              <Card className={classes.card}>
                <CardHeader title="Ảnh" />
                <Divider />
                <CardContent>
                  <Grid container className={classes.a}>
                    <div>
                      <Field
                        required
                        component={FileInput.FileInput}
                        name="image"
                        type="file"
                      />
                    </div>
                  </Grid>
                </CardContent>
              </Card>
              <Card className={classes.card}>
                <CardHeader title="Thông số kĩ thuật" />
                <Divider />
                <CardContent>
                  <Grid container className={classes.a}>
                    <Field
                      fullWidth
                      label="Ram"
                      required
                      name="ram"
                      style={{ marginTop: '1rem' }}
                      type="number"
                      variant="outlined"
                      size="small"
                      InputLabelProps={{
                        shrink: true,
                      }}
                      component={renderTextField}
                      placeholder=""
                    />
                    <Field
                      fullWidth
                      required
                      label="Dung Lượng Pin"
                      name="battery"
                      style={{ marginTop: '1rem' }}
                      type="text"
                      variant="outlined"
                      size="small"
                      InputLabelProps={{
                        shrink: true,
                      }}
                      component={renderTextField}
                      placeholder=""
                    />
                    <Field
                      fullWidth
                      label="Camera"
                      name="camera"
                      required
                      style={{ marginTop: '1rem' }}
                      type="text"
                      variant="outlined"
                      size="small"
                      InputLabelProps={{
                        shrink: true,
                      }}
                      component={renderTextField}
                      placeholder=""
                    />
                    <Field
                      fullWidth
                      label="GPU"
                      required
                      name="gpu"
                      style={{ marginTop: '1rem' }}
                      type="text"
                      variant="outlined"
                      size="small"
                      InputLabelProps={{
                        shrink: true,
                      }}
                      component={renderTextField}
                      placeholder=""
                    />
                    <Field
                      fullWidth
                      label="Màn Hình"
                      name="display"
                      style={{ marginTop: '1rem' }}
                      type="text"
                      variant="outlined"
                      size="small"
                      required
                      InputLabelProps={{
                        shrink: true,
                      }}
                      component={renderTextField}
                      placeholder=""
                    />
                    {/* <Field name="profile_pic" component="input" type="file" /> */}
                  </Grid>
                </CardContent>
              </Card>
              <Box flexDirection="row-reverse" display="flex" mt={2}>
                <Box ml={1}>
                  <Link to="/product-list">
                    <Button variant="contained">Hủy Bỏ</Button>
                    {/* <Button> Đăng kí tài khoản mới</Button> */}
                  </Link>
                </Box>
                {/* <Link to="/product-list"> */}
                <Button
                  // disabled={invalid || submitting}
                  variant="contained"
                  color="primary"
                  type="submit"
                >
                  Lưu Lại
                </Button>
                {/* </Link> */}
                &nbsp;
              </Box>
            </Grid>
          </Grid>
        </div>
      </form>
    );
  }
}
const FORM_NAME = 'PRODUCT_MANAGERMENT';
const withReduxForm = reduxForm({
  form: FORM_NAME,
  // validate,
});
ProductAction.propTypes = {
  classes: PropTypes.object,
  handleSubmit: PropTypes.func,
  productActionCreators: PropTypes.shape({
    addProduct: PropTypes.func,
    updateProduct: PropTypes.func,
  }),
  productEditting: PropTypes.object,
};
const mapStateToProps = (state) => {
  return {
    productEditting: state.product.productEditting,
    initialValues: {
      name: state.product.productEditting
        ? state.product.productEditting.name
        : null,
      gpu: state.product.productEditting
        ? state.product.productEditting.gpu
        : null,
      image: state.product.productEditting
        ? state.product.productEditting.image
        : null,
      display: state.product.productEditting
        ? state.product.productEditting.display
        : null,
      amount: state.product.productEditting
        ? state.product.productEditting.amount
        : null,
      camera: state.product.productEditting
        ? state.product.productEditting.camera
        : null,
      descripton: state.product.productEditting
        ? state.product.productEditting.descripton
        : null,
      producer: state.product.productEditting
        ? state.product.productEditting.producer
        : null,
      battery: state.product.productEditting
        ? state.product.productEditting.battery
        : null,
      price: state.product.productEditting
        ? state.product.productEditting.price
        : null,
      ram: state.product.productEditting
        ? state.product.productEditting.price
        : null,
      code: state.product.productEditting
        ? state.product.productEditting.price
        : null,
      id: state.product.productEditting
        ? state.product.productEditting.id
        : null,
    },
    enableReinitialize: true,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    productActionCreators: bindActionCreators(ProductActions, dispatch),
  };
};
const withConnect = connect(mapStateToProps, mapDispatchToProps);
export default compose(
  withStyles(styles),
  withConnect,
  withReduxForm,
)(ProductAction);
