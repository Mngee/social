import React from "react";
import './App.css';
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {addPost} from "./Redux/State";

const App = (props) => {
  return(
      <BrowserRouter>
      <div className='app-wrapper'>
          <Header />
          <Navbar />
          <div className='app-wrapper-content'>
              <Routes>
                <Route path="/profile" element={<Profile PostData={props.state.profilePage.PostData} addPost={addPost}/>}/>
                <Route path="/dialogs" element={<Dialogs DialogsData={props.state.dialogsPage.DialogsData} MessagesData={props.state.dialogsPage.MessagesData} />}/>
              </Routes>
          </div>
          </div>
      </BrowserRouter>

  );
}
export default App;
