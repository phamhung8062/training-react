/* eslint-disable import/no-cycle */
import TaskBoard from '../container/taskboard/index';
import AdminHomePage from '../container/AdminHomePage';
import ListProducts from '../container/Product/ListProducts';
import ProductInfo from '../container/Product/ProductInfo';
import ProductAction from '../container/Product/ProductAction';
import LoginPage from '../container/LoginPage';
import SignUpPage from '../container/SignUpPage';
import LoginPageMate from '../container/LoginPageMate';
export const API_ENDPOINT = 'http://localhost:3000';
export const API_ENDPOINT_PRODUCT = 'http://localhost:8082';
export const AUTHORIZATION_KEY = 'TOKEN';
export const STATUSES = [
  {
    value: 0,
    lable: 'READY',
  },
  {
    value: 1,
    lable: 'IN PROGRESS',
  },
  {
    value: 2,
    lable: 'COMPLETE',
  },
];
export const STATUS_CODE = {
  SUCCES: 200,
  CREATED: 201,
  UPDATE: 202,
};
export const ADMIN_ROUTERS = [
  // {
  //   path: '/',
  //   name: 'Trang Quản Trị',
  //   exact: true,
  //   component: AdminHomePage,
  // },
  {
    path: '/task-board',
    name: 'Quản Lý Công Việc',
    component: TaskBoard,
  },
  {
    path: '/product-list',
    name: 'Quản Lý Sản Phẩm',
    component: ListProducts,
  },
  {
    path: '/product/add',
    component: ProductAction,
  },
  {
    path: '/product/info',
    component: ProductInfo,
  },
];
export const ADMIN_ROUTERS_MENU = [
  {
    path: '/',
    name: 'Trang Quản Trị',
    exact: true,
    component: AdminHomePage,
  },
  // },
  // {
  //   path: '/task-board',
  //   name: 'Quản Lý Công Việc',
  //   component: TaskBoard,
  // },
  {
    path: '/product-list',
    name: 'Quản Lý Sản Phẩm',
    component: ListProducts,
  },
];
export const ROUTERS = [
  // {
  //   path: '/login',
  //   name: 'Đăng Nhập',
  //   component: LoginPage,
  // },
  {
    path: '/login',
    name: 'Đăng Nhập',
    component: LoginPageMate,
  },
  {
    path: '/signup',
    name: 'Đăng Kí',
    component: SignUpPage,
  },
];
