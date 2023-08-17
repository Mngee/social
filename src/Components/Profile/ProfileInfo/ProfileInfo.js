import React from "react";
import classes from './ProfileInfo.module.css';
const ProfileInfo = () => {
    return (
        <div className={classes.content}>
            <div>
                <img
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_6bhznzmqn77LPBLowr3_kRG678s4C-0TEw&usqp=CAU'/>
            </div>
            <div>
                <img
                    src='https://i.guim.co.uk/img/media/26392d05302e02f7bf4eb143bb84c8097d09144b/446_167_3683_2210/master/3683.jpg?width=1200&quality=85&auto=format&fit=max&s=a52bbe202f57ac0f5ff7f47166906403'/>
            </div>
        </div>);
}

export default ProfileInfo;