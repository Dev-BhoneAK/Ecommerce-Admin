import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/datatables.css';
import './css/bootstrap.css';
import './css/font-awesome.css';
import './css/style.css';
import './css/animate.css';
import './css/custom-style.css';
import {Provider} from "react-redux";
import store from './app/store';
import {BrowserRouter} from 'react-router-dom';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
);
