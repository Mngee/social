import React from "react";
import classes from './Profile.module.css';
import Myposts from "./Myposts/Myposts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
const Profile = (props) => {
    return (
        <div className={classes.content}>
            <ProfileInfo/>
            <Myposts profilePage={props.profilePage}
                     addPost={props.addPost}
                     updateNewPostText={props.updateNewPostText} />
        </div>);
}

export default Profile