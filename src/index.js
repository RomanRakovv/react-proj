import * as serviceWorker from './serviceWorker'
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from "./redux/state";


let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state}
                 dispatch={store.dispatch.bind(store)}
                 addMessage={store.addMessage.bind(store)}
                 updateNewMessagePost={store.updateNewMessageText.bind(store)}
            />
        </React.StrictMode>,
        document.getElementById('root')
    );
}


rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree);


serviceWorker.unregister();