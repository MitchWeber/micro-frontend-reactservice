import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// @ts-ignore
window.renderReactService = (containerId: string) => {
    ReactDOM.render(<App />, document.getElementById(containerId));
};

// @ts-ignore
window.unmountReactService = (containerId: string) => {
    // @ts-ignore
    ReactDOM.unmountComponentAtNode(document.getElementById(containerId));
};

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
