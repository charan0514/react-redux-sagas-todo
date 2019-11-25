
import { fork, put, call, takeLatest, all } from 'redux-saga/effects';
import * as APIUtils from  '../../utils/APIUtils';
import * as Constants from '../constants'
import * as api from '../api';

const {
  FETCH_USERS, FETCH_USERS_FAILED, FETCH_USERS_SUCCESS,
} = Constants;

function* fetchUsers(action) {
    try {
      const response = yield call(api.getUsers, action.data);
      if (!response.error_code) {
        yield put({
          type: FETCH_USERS_SUCCESS,
          data: response
        })
    } else {
      //TODO: check for error resp
      yield put({
        type: FETCH_USERS_FAILED,
        data: null
      })
    }
  } catch (e) {
    if (e.status === 401) {
      // APIUtils.RemoveTokenFromCookie();
    }
    yield put({
      type: FETCH_USERS_FAILED,
      data: e
    })
  }
}

export const watchGetUsers = takeLatest(FETCH_USERS, fetchUsers)

export default function* Sagas() {
    // yield [
    //   fork(takeLatest, FETCH_USERS, fetchUsers),
    // ];
    yield all ([
      watchGetUsers
    ])
}



  