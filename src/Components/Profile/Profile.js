import React from "react";
import classes from './Profile.module.css';
import Myposts from "./Myposts/Myposts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {addPost} from "../../Redux/State";
const Profile = (props) => {
    return (
        <div className={classes.content}>
            <ProfileInfo/>
            <Myposts PostData={props.PostData} addPost={props.addPost} />
        </div>);
}

export default Profile