import axiosService from '../commons/axoisService';
import { API_ENDPOINT_PRODUCT } from '../constants';

const url = 'auth';

export const signup = (data) => {
  return axiosService.post(`${API_ENDPOINT_PRODUCT}/${url}/register`, data);
};

export const login = (data) => {
  return axiosService.post(`${API_ENDPOINT_PRODUCT}/${url}/token`, data);
};
