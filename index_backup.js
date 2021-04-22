import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import App2 from './Carousel';
import RecipeCardTable from './RecipeCardTable';
import { Provider } from 'react-redux';
import store from './store';
import Navbar from './Navbar';
// add <Navbar />
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
    <Provider store={store}>
        <App2 />
        <RecipeCardTable />
        <App />
    </Provider>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();