import 'bootstrap/dist/css/bootstrap.min.css'
import { createRoot } from 'react-dom/client'
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

createRoot(document.getElementById('root')!).render(<ConnectedApp />)
