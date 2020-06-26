import axiosService from '../commons/axoisService';
import qs from 'query-string';
import { API_ENDPOINT_PRODUCT } from '../constants';
const url = 'api';
export const getListProduct = (params = {}) => {
  let queryParam = '';
  if (Object.keys(params).length > 0) {
    queryParam = `?${qs.stringify(params)}`;
  }
  return axiosService.get(
    `${API_ENDPOINT_PRODUCT}/${url}/products${queryParam}`,
  );
};
export const addProduct = (data) => {
  return axiosService.post(
    `${API_ENDPOINT_PRODUCT}/${url}/insert/product`,
    data,
  );
};
export const updateProduct = (data) => {
  return axiosService.put(
    `${API_ENDPOINT_PRODUCT}/${url}/update/product`,
    data,
  );
};
export const deleteProduct = (productId) => {
  return axiosService.delete(
    `${API_ENDPOINT_PRODUCT}/${url}/delete/product?id=${productId}`,
  );
};
