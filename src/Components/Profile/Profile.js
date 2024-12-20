import React from "react";
import c from "./Profile.module.css"
import MyPosts from "./MyPosts/MyPosts";


const Profile = (props) => {
    return (<div>
        <div >
            <div>
                <img
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_6bhznzmqn77LPBLowr3_kRG678s4C-0TEw&usqp=CAU'/>
            </div>
            <div>
                peredelka 1
            </div>

            <MyPosts PostData={props.PostData} addPost={props.addPost}/>
        </div>
    </div>);
}

export default Profile