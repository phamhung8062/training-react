/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Component } from 'react';
import styles from './styles';
import PropTypes from 'prop-types';
import {
  withStyles,
  Grid,
  Card,
  CardHeader,
  Divider,
  CardContent,
  CardMedia,
  CardActionArea,
  Typography,
  CardActions,
  Button,
} from '@material-ui/core';
import { connect } from 'react-redux';
import { compose, bindActionCreators } from 'redux';
class ProductInfo extends Component {
  render() {
    const { classes, productEditting } = this.props;
    return (
      <div className={classes.root}>
        <Typography gutterBottom variant="h5" component="h2" color="secondary">
          Chi Tiết Sản Phẩm
        </Typography>
        <Grid container spacing={4}>
          <Grid item md={8} xs={12}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Contemplative Reptile"
                  height="500"
                  src={productEditting.image ? productEditting.image : ''}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Mô tả sản phẩm
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {productEditting.descripton}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item md={4} xs={12}>
            <Card className={classes.root}>
              <CardHeader
                title="Thông Số Kĩ Thuật"
                size="small"
                color="primary"
              />
              <Divider />

              <CardContent>
                <div className={classes.fstsright}>
                  <div
                    className="col-sm-12"
                    style={{
                      paddingBottom: 15,
                      display: '-webkit-box',
                    }}
                  >
                    <div className=" col-sm-3">
                      <label className={classes.label}>Màn hình :</label>
                    </div>
                    <div className="col-sm-8">
                      <span className={classes.span}>
                        {productEditting.display}
                      </span>
                    </div>
                  </div>
                  <div
                    className="col-sm-12"
                    style={{
                      paddingBottom: 15,
                      display: '-webkit-box',
                    }}
                  >
                    <div className=" col-sm-3">
                      <label className={classes.label}>Ram :</label>
                    </div>
                    <div className="col-sm-8">
                      <span className={classes.span}>
                        {productEditting.ram} GB
                      </span>
                    </div>
                  </div>
                  <div
                    className="col-sm-12"
                    style={{
                      paddingBottom: 15,
                      display: '-webkit-box',
                    }}
                  >
                    <div className=" col-sm-3">
                      <label className={classes.label}>Camera :</label>
                    </div>
                    <div className="col-sm-8">
                      <span className={classes.span}>
                        {productEditting.camera}
                      </span>
                    </div>
                  </div>
                  <div
                    className="col-sm-12"
                    style={{
                      paddingBottom: 15,
                      display: '-webkit-box',
                    }}
                  >
                    <div className=" col-sm-3">
                      <label className={classes.label}>Bộ Nhớ :</label>
                    </div>
                    <div className="col-sm-8">
                      <span className={classes.span}>256 GB</span>
                    </div>
                  </div>
                  <div
                    className="col-sm-12"
                    style={{
                      paddingBottom: 15,
                      display: '-webkit-box',
                    }}
                  >
                    <div className=" col-sm-3">
                      <label className={classes.label}>GPU :</label>
                    </div>
                    <div className="col-sm-8">
                      <span className={classes.span}>
                        {productEditting.gpu}
                      </span>
                    </div>
                  </div>
                  <div
                    className="col-sm-12"
                    style={{
                      paddingBottom: 15,
                      display: '-webkit-box',
                    }}
                  >
                    <div className=" col-sm-3">
                      <label className={classes.label}>Pin :</label>
                    </div>
                    <div className="col-sm-8">
                      <span className={classes.span}>
                        {productEditting.battery}
                      </span>
                    </div>
                  </div>
                  <div
                    className="col-sm-12"
                    style={{
                      paddingBottom: 15,
                      display: '-webkit-box',
                    }}
                  >
                    <div className=" col-sm-3">
                      <label className={classes.label}>Xuất Xứ</label>
                    </div>
                    <div className="col-sm-8">
                      <span className={classes.span}>Việt Nam</span>
                    </div>
                  </div>
                  <div
                    className="col-sm-12"
                    style={{
                      paddingBottom: 15,
                      display: '-webkit-box',
                    }}
                  >
                    <div className=" col-sm-3">
                      <label className={classes.label}>Năm Sản Xuất :</label>
                    </div>
                    <div className="col-sm-8">
                      <span className={classes.span}>2020</span>
                    </div>
                  </div>
                  <div
                    className="col-sm-12"
                    style={{
                      paddingBottom: 15,
                      display: '-webkit-box',
                    }}
                  >
                    <div className=" col-sm-3">
                      <label className={classes.label}>Hệ Điều Hành :</label>
                    </div>
                    <div className="col-sm-8">
                      <span className={classes.span}> iOS 13</span>
                    </div>
                  </div>
                  <div
                    className="col-sm-12"
                    style={{
                      paddingBottom: 15,
                      display: '-webkit-box',
                    }}
                  >
                    <div className=" col-sm-3">
                      <label className={classes.label}>Thẻ Sim :</label>
                    </div>
                    <div className="col-sm-8">
                      <span className={classes.span}>
                        eSIM và NanoSIM, 1 Sim
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardActions>
                <button
                  type="button"
                  className="btn btn-primary"
                  data-toggle="modal"
                  data-target="#myModal"
                  style={{ width: 333 }}
                >
                  Xem thông tin chi tiết
                </button>
                <div id="myModal" className="modal fade" role="dialog">
                  <div
                    className="modal-dialog modal-dialog-centered"
                    role="document"
                  >
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLongTitle">
                          Thông Tin Chi Tiết
                        </h5>
                        <button
                          type="button"
                          className="close"
                          data-dismiss="modal"
                          aria-label="Close"
                        >
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div className="modal-body">
                        <h5 style={{ color: 'red', fontSize: 'large' }}>
                          Màn Hình
                        </h5>
                        <hr />
                        <div
                          className="col-sm-12"
                          style={{
                            paddingBottom: 0,
                            display: '-webkit-box',
                          }}
                        >
                          <div className=" col-sm-3">
                            <label className={classes.label}>Màn hình :</label>
                          </div>
                          <div className="col-sm-8">
                            <span className={classes.span}>
                              {productEditting.display}
                            </span>
                          </div>
                        </div>
                        <hr />
                        <div
                          className="col-sm-12"
                          style={{
                            paddingBottom: 0,
                            display: '-webkit-box',
                          }}
                        >
                          <div className=" col-sm-3">
                            <label className={classes.label}>
                              Màu màn hình :
                            </label>
                          </div>
                          <div className="col-sm-8">
                            <span className={classes.span}>16 triệu màu</span>
                          </div>
                        </div>
                        <hr />
                        <div
                          className="col-sm-12"
                          style={{
                            paddingBottom: 0,
                            display: '-webkit-box',
                          }}
                        >
                          <div className=" col-sm-3">
                            <label className={classes.label}>
                              Chuẩn màn hình :
                            </label>
                          </div>
                          <div className="col-sm-8">
                            <span className={classes.span}>Full HD +</span>
                          </div>
                        </div>
                        <hr />
                        <div
                          className="col-sm-12"
                          style={{
                            paddingBottom: 0,
                            display: '-webkit-box',
                          }}
                        >
                          <div className=" col-sm-3">
                            <label className={classes.label}>
                              Độ phân giải màn hình :
                            </label>
                          </div>
                          <div className="col-sm-8">
                            <span className={classes.span}>
                              1080 x 2340 Pixels
                            </span>
                          </div>
                        </div>
                        <hr />
                        <div
                          className="col-sm-12"
                          style={{
                            paddingBottom: 0,
                            display: '-webkit-box',
                          }}
                        >
                          <div className=" col-sm-3">
                            <label className={classes.label}>
                              Mặt kính màn hình :
                            </label>
                          </div>
                          <div className="col-sm-8">
                            <span className={classes.span}>Kính Cường Lực</span>
                          </div>
                        </div>
                        <hr />
                        <h5 style={{ color: 'red', fontSize: 'large' }}>
                          Camera Trước
                        </h5>
                        <hr />
                        <div
                          className="col-sm-12"
                          style={{
                            paddingBottom: 0,
                            display: '-webkit-box',
                          }}
                        >
                          <div className=" col-sm-3">
                            <label className={classes.label}>
                              Độ phân giải :
                            </label>
                          </div>
                          <div className="col-sm-8">
                            <span className={classes.span}>
                              {productEditting.camera}
                            </span>
                          </div>
                        </div>
                        <hr />
                        <div
                          className="col-sm-12"
                          style={{
                            paddingBottom: 0,
                            display: '-webkit-box',
                          }}
                        >
                          <div className=" col-sm-3">
                            <label className={classes.label}>
                              Thông tin khác :
                            </label>
                          </div>
                          <div className="col-sm-8">
                            <span className={classes.span}>
                              Chụp ảnh xóa phông + Công nghệ trí thông minh nhân
                              tạo AI + Chế độ làm đẹp + Hiệu ứng AR Stickers
                            </span>
                          </div>
                        </div>
                        <hr />
                        <h5 style={{ color: 'red', fontSize: 'large' }}>
                          Camera Sau
                        </h5>
                        <hr />
                        <div
                          className="col-sm-12"
                          style={{
                            paddingBottom: 0,
                            display: '-webkit-box',
                          }}
                        >
                          <div className=" col-sm-3">
                            <label className={classes.label}>
                              Độ phân giải :
                            </label>
                          </div>
                          <div className="col-sm-8">
                            <span className={classes.span}>
                              {productEditting.camera}
                            </span>
                          </div>
                        </div>
                        <hr />
                        <div
                          className="col-sm-12"
                          style={{
                            paddingBottom: 0,
                            display: '-webkit-box',
                          }}
                        >
                          <div className=" col-sm-3">
                            <label className={classes.label}>Quay phim :</label>
                          </div>
                          <div className="col-sm-8">
                            <span className={classes.span}>
                              Quay phim FullHD 1080p@120fps, Quay phim HD
                              720p@240fps, Quay phim 4K 2160p@30fps
                            </span>
                          </div>
                        </div>
                        <hr />
                        <div
                          className="col-sm-12"
                          style={{
                            paddingBottom: 0,
                            display: '-webkit-box',
                          }}
                        >
                          <div className=" col-sm-3">
                            <label className={classes.label}>Đèn Flash :</label>
                          </div>
                          <div className="col-sm-8">
                            <span className={classes.span}>Có</span>
                          </div>
                        </div>
                        <hr />
                        <div
                          className="col-sm-12"
                          style={{
                            paddingBottom: 0,
                            display: '-webkit-box',
                          }}
                        >
                          <div className=" col-sm-3">
                            <label className={classes.label}>
                              Chụp ảnh nâng cao :
                            </label>
                          </div>
                          <div className="col-sm-8">
                            <span className={classes.span}>
                              Chế độ chụp đêm + Chụp ảnh xóa phông + Chụp ảnh
                              góc siêu rộng (120º) + Công nghệ trí thông minh
                              nhân tạo AI + Chế độ làm đẹp + Hiệu ứng AR
                              Stickers
                            </span>
                          </div>
                        </div>
                        <hr />
                        <h5 style={{ color: 'red', fontSize: 'large' }}>
                          Cấu Hình Phần Cứng
                        </h5>
                        <hr />
                        <div
                          className="col-sm-12"
                          style={{
                            paddingBottom: 0,
                            display: '-webkit-box',
                          }}
                        >
                          <div className=" col-sm-3">
                            <label className={classes.label}>
                              Tốc độ CPU :
                            </label>
                          </div>
                          <div className="col-sm-8">
                            <span className={classes.span}>2.0Ghz</span>
                          </div>
                        </div>
                        <hr />
                        <div
                          className="col-sm-12"
                          style={{
                            paddingBottom: 0,
                            display: '-webkit-box',
                          }}
                        >
                          <div className=" col-sm-3">
                            <label className={classes.label}>RAM :</label>
                          </div>
                          <div className="col-sm-8">
                            <span className={classes.span}>
                              {productEditting.ram}
                            </span>
                          </div>
                        </div>
                        <hr />
                        <div
                          className="col-sm-12"
                          style={{
                            paddingBottom: 0,
                            display: '-webkit-box',
                          }}
                        >
                          <div className=" col-sm-3">
                            <label className={classes.label}>
                              Chip đồ họa (GPU) :
                            </label>
                          </div>
                          <div className="col-sm-8">
                            <span className={classes.span}>
                              {productEditting.gpu}
                            </span>
                          </div>
                        </div>
                        <hr />
                      </div>
                      <div className="modal-footer">
                        <button
                          type="button"
                          className="btn btn-secondary"
                          data-dismiss="modal"
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <Button
                  size="medium"
                  color="primary"
                  display="flex"
                  variant="outlined"
                  fullWidth="true"
                  onClick={() => this.renderModal()}
                >
                  Xem Chi Tiết
                </Button> */}
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </div>
    );
  }
}
ProductInfo.propTypes = {
  classes: PropTypes.object,
  productEditting: PropTypes.object,
};
const mapStateToProps = (state) => {
  return {
    productEditting: state.product.productEditting,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    // productActionCreators: bindActionCreators(ProductActions, dispatch),
  };
};
const withConnect = connect(mapStateToProps, mapDispatchToProps);
export default compose(withStyles(styles), withConnect)(ProductInfo);
