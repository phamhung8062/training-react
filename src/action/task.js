import { STATUSES } from '../constants/index';
import * as taskConstants from '../constants/task';
export const fetchListTask = (param = {}) => {
  return {
    type: taskConstants.FETCH_TASK,
    payload: {
      param,
    },
  };
};
export const fetchListTaskSuccess = (data) => {
  return {
    type: taskConstants.FETCH_TASK_SUCCESS,
    payload: {
      data,
    },
  };
};
export const fetchListTaskFailed = (error) => {
  return {
    type: taskConstants.FETCH_TASK_FAILED,
    payload: {
      error,
    },
  };
};
// export const fetchListTaskRequest = () => {
//   return (dispatch) => {
//     dispatch(fetchListTask());
//     TaskApis.getList()
//       .then((resp) => {
//         const { data } = resp;
//         dispatch(fetchListTaskSuccess(data));
//       })
//       .catch((error) => {
//         dispatch(fetchListTaskFailed(error));
//       });
//   };
// };
export const filterTask = (keyword) => ({
  type: taskConstants.FILTER_TASK,
  payload: {
    keyword,
  },
});

export const filterTaskSuccess = (data) => ({
  type: taskConstants.FILTER_TASK_SUCCESS,
  payload: {
    data,
  },
});
export const addTask = (title, description) => {
  return {
    type: taskConstants.ADD_TASK,
    payload: {
      title,
      description,
    },
  };
};
export const addTaskSuccess = (data) => {
  return {
    type: taskConstants.ADD_TASK_SUCCESS,
    payload: {
      data,
    },
  };
};
export const addTaskFailed = (error) => {
  return {
    type: taskConstants.ADD_TASK_FAILED,
    payload: {
      error,
    },
  };
};
export const setTaskEditting = (task) => {
  return {
    type: taskConstants.SET_TASK_EDITTING,
    payload: {
      task,
    },
  };
};
export const updateTask = (title, description, status = STATUSES[0].value) => {
  return {
    type: taskConstants.UPDATE_TASK,
    payload: {
      title,
      description,
      status,
    },
  };
};
export const updateTaskSuccess = (data) => {
  return {
    type: taskConstants.UPDATE_TASK_SUCCESS,
    payload: {
      data,
    },
  };
};
export const updateTaskFailed = (error) => {
  return {
    type: taskConstants.UPDATE_TASK_FAILED,
    payload: {
      error,
    },
  };
};
export const deleteTask = (id) => {
  return {
    type: taskConstants.DELETE_TASK,
    payload: {
      id,
    },
  };
};
export const deleteTaskSuccess = (data) => {
  return {
    type: taskConstants.DELETE_TASK_SUCCESS,
    payload: {
      data,
    },
  };
};
export const deleteTaskFailed = (error) => {
  return {
    type: taskConstants.DELETE_TASK_FAILED,
    payload: {
      error,
    },
  };
};
