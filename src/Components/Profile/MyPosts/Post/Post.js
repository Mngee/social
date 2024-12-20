import React from "react";
import c from "./Post.module.css"


const Post = (props) => {

    return (<div className={c.item}>
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSngDLxVdX-4fhpWyG8hDPxUWyGV1B9uOXJ3Q&s'/>
        {props.message} likes:{props.likesCount}
                </div>);
}

export default Post;