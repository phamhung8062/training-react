import {
  call,
  delay,
  fork,
  put,
  take,
  takeLatest,
  takeEvery,
  select,
} from 'redux-saga/effects';
import {
  fetchListTaskFailed,
  fetchListTaskSuccess,
  addTaskSuccess,
  addTaskFailed,
  fetchListTask,
  updateTaskSuccess,
  updateTaskFailed,
  deleteTaskSuccess,
  deleteTaskFailed,
} from '../action/task';
import {
  fetchListProductSuccess,
  fetchListProductFailed,
  addProductSuccess,
  addProductFailed,
  updateProductSuccess,
  updateProductFailed,
  deleteProductSuccess,
  deleteProductFailed,
} from '../action/product';
import { hideLoading, showLoading } from '../action/ui';
import { getList, addTask, updateTask, deleteTask } from '../apis/task';
import {
  getListProduct,
  addProduct,
  updateProduct,
  deleteProduct,
} from '../apis/product';
import { STATUS_CODE, STATUSES, AUTHORIZATION_KEY } from '../constants';
import * as taskTypes from '../constants/task';
import * as productTypes from '../constants/product';
import { hideModal, showModal } from '../action/modal';
import {
  loginFailed,
  loginSuccess,
  signupFailed,
  signupSuccess,
} from '../action/auth';
import axiosService from '../commons/axoisService';
import { push } from 'connected-react-router';
import { login, signup } from '../apis/auth';
import * as authTypes from '../constants/auth';
// B1:thực thi action fetchListTask
// B2:Gọi API
// B3: Kiểm tra STATUS_CODE
//   Nếu thành công trả về ....
//   Nếu thất bại
// B4:Thực thi các công việc tiếp theo

// function* WatchFetchListTaskAction() {
//   while (true) {
//     const action = yield take(taskTypes.FETCH_TASK);
//     yield put(showLoading());
//     const { param } = action.payload;

//     // =======blocking====== //
//     const resp = yield call(getList, param);
//     // =======blocking cho đến khi call xong ====== //
//     const { status, data } = resp;
//     if (status === STATUS_CODE.SUCCES) {
//       // dispatch fetchTaskListSucces //
//       yield put(fetchListTaskSuccess(data));
//     } else {
//       // dispatch fetchTaskListFaile //
//       yield put(fetchListTaskFailed(data));
//     }
//     yield delay(500);
//     yield put(hideLoading());
//   }
// }

// function* filterTaskSaga({ payload }) {
//   yield delay(500);
//   const { keyword } = payload;
//   yield put(
//     fetchListTask({
//       q: keyword,
//     }),
//   );
//   // const list = yield select((state) => state.task.listTask);
//   // const filterTasks = list.filter((task) =>
//   //   task.name.trim().toLowerCase().includes(keyword.trim().toLowerCase()),
//   // );
//   // yield put(filterTaskSuccess(filterTasks));
// }

// function* addTaskSaga({ payload }) {
//   const { title, description } = payload;
//   yield put(showLoading());
//   const resp = yield call(addTask, {
//     name: title,
//     description,
//     status: STATUSES[0].value,
//   });
//   const { data, status } = resp;
//   if (status === STATUS_CODE.CREATED) {
//     yield put(addTaskSuccess(data));
//     yield put(hideModal());
//   } else {
//     yield put(addTaskFailed(data));
//   }
//   yield put(hideLoading());
// }
// function* updateTaskSaga({ payload }) {
//   const { title, description, status } = payload;
//   const taskEditting = yield select((state) => state.task.taskEditting);
//   yield put(showLoading());
//   const resp = yield call(
//     updateTask,
//     {
//       name: title,
//       description,
//       status,
//     },
//     taskEditting.id,
//   );
//   const { data, status: statuscode } = resp;
//   if (statuscode === STATUS_CODE.SUCCES) {
//     yield put(updateTaskSuccess(data));
//     yield put(hideModal());
//   } else {
//     yield put(updateTaskFailed(data));
//   }
//   yield put(hideLoading());
// }
// function* deleteTaskSaga({ payload }) {
//   const { id } = payload;
//   yield put(showLoading());
//   const resp = yield call(deleteTask, id);
//   const { data, status: statuscode } = resp;
//   if (statuscode === STATUS_CODE.SUCCES) {
//     yield put(deleteTaskSuccess(id));
//     yield put(hideModal());
//   } else {
//     yield put(deleteTaskFailed(data));
//   }
//   yield put(hideLoading());
// }

// *************************************************************************

function* WatchFetchListProductAction() {
  while (true) {
    const action = yield take(productTypes.FETCH_PRODUCT);
    yield put(showLoading());
    const { param } = action.payload;
    const resp = yield call(getListProduct, param);
    const { status, data } = resp;
    if (status === STATUS_CODE.SUCCES) {
      yield put(fetchListProductSuccess(data));
    } else {
      yield put(fetchListProductFailed(data));
    }
    yield delay(500);
    yield put(hideLoading());
  }
}
function* addProductSaga({ payload }) {
  const dataAdd = payload.data;
  yield put(showLoading());
  const resp = yield call(addProduct, dataAdd);
  const { data, status } = resp;
  if (status === STATUS_CODE.SUCCES) {
    yield put(addProductSuccess(data));
    yield put(hideModal());
    yield put(push(productTypes.REDIRECT_AFTER_ADD_SUCCESS));
  } else {
    yield put(addProductFailed(data));
  }
  yield put(hideLoading());
}
function* updateProductSaga({ payload }) {
  const dataUpadate = payload.data;
  yield put(showLoading());
  const resp = yield call(updateProduct, dataUpadate);
  const { data, status: statuscode } = resp;
  if (statuscode === STATUS_CODE.SUCCES) {
    yield put(updateProductSuccess(data));
    yield put(hideModal());
    yield put(push(productTypes.REDIRECT_AFTER_ADD_SUCCESS));
  } else {
    yield put(updateProductFailed(data));
  }
  yield put(hideLoading());
}
function* deleteProductSaga({ payload }) {
  const { id } = payload;
  // yield put(showLoading());
  const resp = yield call(deleteProduct, id);
  const { data, status: statuscode } = resp;
  if (statuscode === STATUS_CODE.SUCCES) {
    yield put(deleteProductSuccess(id));
    yield put(hideModal());
  } else {
    yield put(deleteProductFailed(data));
  }
  // yield put(hideLoading());
}

// *************************************************************************
function* processLogin({ payload }) {
  const { userName, passWord } = payload;
  yield put(showLoading());
  try {
    const resp = yield call(login, {
      userName,
      passWord,
    });
    const { data, status } = resp;
    if (status === STATUS_CODE.SUCCES) {
      yield put(loginSuccess(data));
      const { token } = data;
      console.log('data', data);
      axiosService.setHeader('Authorization', `Bearer ${token}`);
      localStorage.setItem(AUTHORIZATION_KEY, token);
      localStorage.setItem('userName', userName);
      yield put(push(authTypes.REDIRECT_AFTER_LOGIN_SUCCESS));
    } else {
      yield put(loginFailed(data));
    }
  } catch (error) {
    // const err = _get(error, 'response.data', {});
    // yield put(loginFailed(err));
  } finally {
    yield put(hideLoading());
  }
}
function* rootSaga() {
  // yield fork(WatchFetchListTaskAction);
  // yield takeLatest(taskTypes.FILTER_TASK, filterTaskSaga);
  // yield takeEvery(taskTypes.ADD_TASK, addTaskSaga);
  // yield takeLatest(taskTypes.UPDATE_TASK, updateTaskSaga);
  // yield takeLatest(taskTypes.DELETE_TASK, deleteTaskSaga);
  // ***********
  yield fork(WatchFetchListProductAction);
  yield takeEvery(productTypes.ADD_PRODUCT, addProductSaga);
  yield takeLatest(productTypes.UPDATE_PRODUCT, updateProductSaga);
  yield takeLatest(productTypes.DELETE_PRODUCT, deleteProductSaga);
  // *************************
  yield takeLatest(authTypes.LOGIN, processLogin);
}
export default rootSaga;
