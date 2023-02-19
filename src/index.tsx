import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux/es/exports';
import { applyMiddleware, compose, legacy_createStore } from 'redux';
import thunk from 'redux-thunk';

import reducers from './reducers';

import App from './App';

const store = legacy_createStore(reducers, compose(applyMiddleware(thunk)));

createRoot(document.body || document.getElementById('root')).render(
    <Provider store={store}>
        <StrictMode>
            <App />
        </StrictMode>
    </Provider>
);
