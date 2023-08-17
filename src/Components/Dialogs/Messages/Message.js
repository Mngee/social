import React from "react";
import s from './Message.module.css'


const Message = (props) => {
    let addMessage = React.createRef()
    return(
        <div className={s.message}>
            {props.message}
        </div>

    )
}
export default Message;