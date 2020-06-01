import * as serviceWorker from './serviceWorker'
import state, {subscribe} from './redux/state'
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addMessage, addPost, updateNewMessageText, updateNewPostText} from "./redux/state";


let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state}
                 addPost={addPost}
                 updateNewPostText={updateNewPostText}
                 addMessage={addMessage}
                 updateNewMessagePost={updateNewMessageText}
            />
        </React.StrictMode>,
        document.getElementById('root')
    );
}


rerenderEntireTree(state);

subscribe(rerenderEntireTree);


serviceWorker.unregister();