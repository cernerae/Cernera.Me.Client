import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './components/App'
import configureStore from './store/configureStore';
import "./index.css";

const store = configureStore();

const ConnectedApp = () => (
    <Provider store={store}>
        <App />
    </Provider>
);

render(
    <ConnectedApp />,
    document.getElementById('root')
)