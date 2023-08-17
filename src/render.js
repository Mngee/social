import ReactDOM from "react-dom/client";
import React from "react";
import App from "./App";
import {updateNewPostText, addPost, addMessage, updateNewMessageText} from "./Redux/State";
import {BrowserRouter, Route, Routes} from "react-router-dom";
// import {addPost} from "./Redux/State";

// let rerenderEntireTree = (state) => {
//     const root = ReactDOM.createRoot(document.getElementById('root'));
//     root.render(
//
//         <React.StrictMode>
//             <App state={state} addPost={addPost} updateNewPostText={updateNewPostText}/>
//         </React.StrictMode>
//     );
// }
const root = ReactDOM.createRoot(document.getElementById("root"));
export let rerenderEntireTree = (state) => {
    root.render(
        <BrowserRouter>
            <App
                state={state}
                addPost={addPost}
                updateNewPostText={updateNewPostText}
                addMessage={addMessage}
                updateNewMessageText={updateNewMessageText}
            />
        </BrowserRouter>
    );
};
export default rerenderEntireTree;