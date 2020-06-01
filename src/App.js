import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import Settings from "./components/Settings/Settings";
import Music from "./components/Music/Music";
import News from "./components/News/News";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar state={props.state}/>
                <div className='app-wrapper-content'>
                    <Route path='/profile' render={ () => <Profile profilePage={props.state.profilePage}
                                                                   addPost={props.addPost}
                                                                   updateNewPostText={props.updateNewPostText}/>} />
                    <Route path='/dialogs' render={ () => <Dialogs dialogsPage={props.state.dialogsPage}
                                                                   addMessage={props.addMessage}
                                                                   updateNewMessageText={props.updateNewMessagePost}/>} />
                    <Route path='/news' render={ () => <News />} />
                    <Route path='/music' render={ () => <Music />} />
                    <Route path='/settings' render={ () => <Settings />} />
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
