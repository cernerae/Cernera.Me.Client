import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import reducer, { initialState } from './store/reducer';
import App from './components/App';
import "./index.css";
import 'bootstrap/dist/css/bootstrap.min.css';

// If you are interested in using the redux devtools
import { composeWithDevTools } from 'redux-devtools-extension';

const composeEnhancers = composeWithDevTools({});
const store = createStore(reducer, initialState, composeEnhancers(applyMiddleware(thunk)));

const ConnectedApp = () => (
    <Provider store={store}>
        <App />
    </Provider>
);

ReactDOM.render(<ConnectedApp />, document.getElementById('root'));