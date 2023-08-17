import React from "react";
import classes from './Myposts.module.css';
import Post from "./Post/Post";
const Myposts = (props) => {
    let PostElement = props.profilePage.PostData.map(post => <Post message={post.post} likes={post.likes}/>)

    let newPostElement = React.createRef()

    //кнопка
    let textPost = () => {
        props.addPost() ;
    }
    //текст
    let onPostChange = () => {
        let text = newPostElement.current.value
        props.updateNewPostText(text)
    }
    return (
            <div>
                my posts
                <div>
                    <textarea ref={newPostElement}
                              value={props.profilePage.newPostText}
                              onChange={onPostChange}></textarea>
                    <button onClick={textPost}>Add post</button>
                </div>
                <div className={classes.posts}>
                    {PostElement}
                </div>
            </div>);
}

export default Myposts;