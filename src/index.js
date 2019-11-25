import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './root/App';
import * as serviceWorker from './serviceWorker';
import {createBrowserHistory} from 'history';
import { AppContainer as HotLoaderAppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import configureStore from './store/ConfigStore';

export const history = createBrowserHistory();
export const store = configureStore({}, history);

ReactDOM.render(
    <HotLoaderAppContainer>
        <Provider store={store}>
            <Router history={history}>
                <App />
            </Router>
        </Provider>
    </HotLoaderAppContainer>, 
    document.getElementById('root')
);

if (module.hot) {
    // the module update from this path onwards... */
    module.hot.accept();
  }

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
