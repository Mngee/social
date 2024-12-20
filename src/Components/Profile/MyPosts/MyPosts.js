import React from "react";
import c from "./MyPosts.module.css"
import Post from "./Post/Post";


const MyPosts = (props) => {

    let NewPostElement = React.createRef();
    let addPost = () => {
        debugger;
        let text = NewPostElement.current.value;
        props.addPost(text)
        debugger;
    }


    let PostElements = props.PostData.map( p => <Post message={p.PostMessage} likesCount={p.LikesCount} /> )
    return (<div>
        <div>
            <div className={c.posts}>
                my posts
                <div>
                    <textarea ref={NewPostElement}></textarea>
                    <button onClick={ addPost } >add post</button>
                </div>
                {PostElements}
            </div>
        </div>
    </div>);
}

export default MyPosts;