import React, { Component } from "react";
import App from './App';
import App2 from './App2';
import Carousel from './Carousel';
import { Provider } from 'react-redux';
import store from './store';

class MyRecipesPageFull extends Component {
    render() {
        return(
            <Provider store={store}>
                <Carousel />
                <App />
                <App2 />
            </Provider>
        );
    }
}

export default MyRecipesPageFull