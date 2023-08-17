import ReactDOM from "react-dom/client";
import React from "react";
import App from "./App";
// import {addPost} from "./Redux/State";

let rerenderEntireTree = (state, addPost) => {
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(

        <React.StrictMode>
            <App state={state} addPost={addPost}/>
        </React.StrictMode>
    );
}
export default rerenderEntireTree;