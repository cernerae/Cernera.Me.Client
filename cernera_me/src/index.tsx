import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import ReduxToastr from "react-redux-toastr";
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css'
import App from './components/App'
import configureStore from './store/configureStore';
import "./index.scss";

const store = configureStore();

const ConnectedApp = () => (
    <Provider store={store}>
        <App />
        <ReduxToastr
            timeOut={3000}
            newestOnTop={false}
            preventDuplicates
            position="bottom-right"
            transitionIn="fadeIn"
            transitionOut="fadeOut"
            progressBar
            closeOnToastrClick
        />
    </Provider>
);

render(
    <ConnectedApp />,
    document.getElementById('root')
)