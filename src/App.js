import React from "react";
import './App.css';
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";

const App = (props) => {
  return(
      <div className='app-wrapper'>
          <Header />
          <Navbar />
          <div className='app-wrapper-content'>
              <Routes>
                <Route path="/profile" element={
                    <Profile profilePage={props.state.profilePage}
                             addPost={props.addPost}
                            updateNewPostText={props.updateNewPostText}/>}/>
                <Route path="/dialogs" element={
                    <Dialogs dialogsPage={props.state.dialogsPage}
                             updateNewMessageText={props.updateNewMessageText}
                             addMessage={props.addMessage}/>}/>
              </Routes>
          </div>
          </div>
  );
}
export default App;
