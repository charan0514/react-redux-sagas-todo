import { routerMiddleware } from "connected-react-router";
import { fromJS } from "immutable";
import { applyMiddleware, compose, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import sagas from "../sagas";
import {
  saveStoreInSessionStorage,
  getFromSessionStorage
} from "./StoreHelpers";
import { keyForReduxState } from "./Consts";
import { loadDataFromSessionStorage } from "./Actions";

import rootReducer from "../reducers/index";

const blackListState = [
];

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

function configureStore(initialState, history) {
  const middlewares = [sagaMiddleware, routerMiddleware(history)];
  const composeEnhancers =
    process.env.NODE_ENV !== "production" &&
    typeof window === "object" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
          // shouldHotReload: false
          deserializeState: state =>
            Object.keys(state).reduce((previous, current) => {
              previous[current] = fromJS(state[current]);
              return previous;
            }, {})
        })
      : compose;

  const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(...middlewares))
  );

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept("../reducers", () => {
      const nextRootReducer = require("../reducers/index");
      store.replaceReducer(nextRootReducer);
    });
  }
  sagaMiddleware.run(sagas);
  store.runSaga = sagaMiddleware.run;

  if (window) {
    window.addEventListener("beforeunload", () => {
      saveStoreInSessionStorage(store, blackListState, keyForReduxState);
    });
    window.addEventListener("unload", () => {
      saveStoreInSessionStorage(store, blackListState, keyForReduxState);
    });
    window.addEventListener("pageshow", () => {
      saveStoreInSessionStorage(store, blackListState, keyForReduxState);
    });
    window.addEventListener("pagehide", () => {
      saveStoreInSessionStorage(store, blackListState, keyForReduxState);
    });
    const stateInSession = getFromSessionStorage(keyForReduxState);
    store.dispatch(loadDataFromSessionStorage(JSON.parse(stateInSession)));
  }

  store.asyncReducers = {};
  return store;
}

export default configureStore;
