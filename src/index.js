import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let dialogsData = [
    {id: 1, name: 'Гена'},
    {id: 2, name: 'Женя'},
    {id: 3, name: 'Рома'},
]

let messagesData = [
    {id: 1, message: 'Privet'},
    {id: 2, message: 'займи сотку'},
    {id: 3, message: 'как дела?'},
]

let postsData = [
    {id: 1, message: 'Ведро с болтами' , likeCount: 23},
    {id: 2, message: 'Машина мечты', likeCount: 100},
]

ReactDOM.render(
  <React.StrictMode>
    <App dialogsData={dialogsData}
         messagesData={messagesData}
         postsData={postsData}
    />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

