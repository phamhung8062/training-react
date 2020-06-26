import * as productConstants from '../constants/product';
import { toastError, toastSuccess } from '../helpers/toastHelper';
const initalState = {
  listProduct: [],
  errors: '',
  productEditting: null,
};
const reducer = (state = initalState, action) => {
  switch (action.type) {
    case productConstants.FETCH_PRODUCT: {
      return {
        ...state,
        listProduct: [],
      };
    }
    case productConstants.FETCH_PRODUCT_SUCCESS: {
      const { data } = action.payload;
      return {
        ...state,
        listProduct: data,
      };
    }
    case productConstants.FETCH_PRODUCT_FAILED: {
      return {
        ...state,
        listProduct: [],
      };
    }
    case productConstants.ADD_PRODUCT: {
      return {
        ...state,
        productEditting: null,
      };
    }
    case productConstants.ADD_PRODUCT_SUCCESS: {
      const { data } = action.payload;
      toastSuccess('Thêm mới thành công');
      return {
        ...state,
        productEditting: null,
        listTask: [state.listTask].concat(data),
      };
    }
    case productConstants.ADD_PRODUCT_FAILED: {
      const { error } = action.payload;
      return {
        ...state,
        productEditting: null,
        errors: error,
      };
    }
    case productConstants.SET_PRODUCT_EDITTING: {
      const { product } = action.payload;
      return {
        ...state,
        productEditting: product,
      };
    }
    case productConstants.RESET_PRODUCT_EDITTING: {
      return {
        ...state,
        productEditting: null,
      };
    }
    case productConstants.UPDATE_PRODUCT: {
      return {
        ...state,
      };
    }
    case productConstants.UPDATE_PRODUCT_SUCCESS: {
      const { data } = action.payload;
      toastSuccess('Sửa thành công');
      const { listProduct } = state;
      const index = listProduct.findIndex((item) => item.id === data.id);
      if (index !== -1) {
        const newList = [
          ...listProduct.splice(0, index),
          data,
          ...listProduct.splice(index + 1),
        ];
        return {
          ...state,
          listProduct: newList,
        };
      }
      return {
        ...state,
      };
    }
    case productConstants.UPDATE_PRODUCT_FAILED: {
      const { error } = action.payload;
      return {
        ...state,
        errors: error,
      };
    }
    case productConstants.DELETE_PRODUCT: {
      return {
        ...state,
      };
    }
    case productConstants.DELETE_PRODUCT_SUCCESS: {
      const { data } = action.payload; // id
      toastSuccess('Xóa Thành Công');
      return {
        ...state,
        listProduct: state.listProduct.filter((item) => item.id !== data),
      };
    }
    case productConstants.DELETE_PRODUCT_FAILED: {
      const { error } = action.payload;
      return {
        ...state,
        errors: error,
      };
    }
    default:
      return state;
  }
};
export default reducer;
