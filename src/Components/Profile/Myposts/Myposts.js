import React from "react";
import classes from './Myposts.module.css';
import Post from "./Post/Post";
const Myposts = (props) => {
    let PostElement = props.PostData.map(post => <Post message={post.post} likes={post.likes}/>)

    let newPostElement = React.createRef()
    let textPost = () => {
        debugger
        let text = newPostElement.current.value
        props.addPost(text) ;
    }
    return (
            <div>
                my posts
                <div>
                    <textarea ref={newPostElement} value={props.newPostText}></textarea>
                    <button onClick={textPost}>Add post</button>
                </div>
                <div className={classes.posts}>
                    {PostElement}
                </div>
            </div>);
}

export default Myposts;