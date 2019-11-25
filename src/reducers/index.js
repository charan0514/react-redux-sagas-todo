import { combineReducers } from 'redux';
import DashboardReducer from '../dashboard/reducers';
import { LOAD } from '../store/Consts';
import { merger } from '../store/StoreHelpers';

const appReducer = asyncReducers =>
  combineReducers({
    dashboard: DashboardReducer
})

export const createReducer = (asyncReducers, state, action) => {
    if (action.type === LOAD && !!action.loadedState) {
        const newState = merger(state, action.loadedState);
        return appReducer(asyncReducers)(newState, action);
      }
    return appReducer(asyncReducers)(state, action);
}

const rootReducer = (state, action) => createReducer(() => { }, state, action);
export default rootReducer;