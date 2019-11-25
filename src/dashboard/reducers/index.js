
import * as Constants from '../constants'

const {
  FETCH_USERS, FETCH_USERS_FAILED, FETCH_USERS_SUCCESS,
} = Constants;

const initState = {
};

export default function Main(state = initState, action) {
  switch(action.type) {
    case FETCH_USERS: {
      return {
        ...state,
        isUserFetching: true,
        isUserFetched: false,
        isUserFetchError: false
      }
    }
    case FETCH_USERS_SUCCESS: {
      return {
        ...state,
        userFechResponse: action.data,
        isUserFetching: false,
        isUserFetched: true,
        isUserFetchError: false
      }
    }
    case FETCH_USERS_FAILED: {
      return {
        ...state,
        userFechResponse: null,
        isUserFetching: false,
        isUserFetched: true,
        isUserFetchError: true
      }
    }
    default:
      return state
  }
}
