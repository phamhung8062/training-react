import * as productConstants from '../constants/product';
export const fetchListProduct = (param = {}) => {
  return {
    type: productConstants.FETCH_PRODUCT,
    payload: {
      param,
    },
  };
};
export const fetchListProductSuccess = (data) => {
  return {
    type: productConstants.FETCH_PRODUCT_SUCCESS,
    payload: {
      data,
    },
  };
};
export const fetchListProductFailed = (error) => {
  return {
    type: productConstants.FETCH_PRODUCT_FAILED,
    payload: {
      error,
    },
  };
};
export const addProduct = (data) => {
  return {
    type: productConstants.ADD_PRODUCT,
    payload: {
      data,
    },
  };
};
export const addProductSuccess = (data) => {
  return {
    type: productConstants.ADD_PRODUCT_SUCCESS,
    payload: {
      data,
    },
  };
};
export const addProductFailed = (error) => {
  return {
    type: productConstants.ADD_PRODUCT_FAILED,
    payload: {
      error,
    },
  };
};
export const setProductEditting = (product) => {
  return {
    type: productConstants.SET_PRODUCT_EDITTING,
    payload: {
      product,
    },
  };
};
export const ResetProductEditting = () => {
  return {
    type: productConstants.RESET_PRODUCT_EDITTING,
  };
};
export const updateProduct = (data) => {
  return {
    type: productConstants.UPDATE_PRODUCT,
    payload: {
      data,
    },
  };
};
export const updateProductSuccess = (data) => {
  return {
    type: productConstants.UPDATE_PRODUCT_SUCCESS,
    payload: {
      data,
    },
  };
};
export const updateProductFailed = (error) => {
  return {
    type: productConstants.UPDATE_PRODUCT_FAILED,
    payload: {
      error,
    },
  };
};
export const deleteProduct = (id) => {
  return {
    type: productConstants.DELETE_PRODUCT,
    payload: {
      id,
    },
  };
};
export const deleteProductSuccess = (data) => {
  return {
    type: productConstants.DELETE_PRODUCT_SUCCESS,
    payload: {
      data,
    },
  };
};
export const deleteProductFailed = (error) => {
  return {
    type: productConstants.DELETE_PRODUCT_FAILED,
    payload: {
      error,
    },
  };
};
