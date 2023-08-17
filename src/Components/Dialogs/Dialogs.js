import React from "react";
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Messages/Message";


const Dialogs = (props) =>{
    let DialogsElement = props.DialogsData.map( dialog =>  <DialogItem name={dialog.name} id={dialog.id} />)
    let MessagesElement = props.MessagesData.map(message => <Message message={message.message }/> )
    let newMessageElement = React.createRef()
    let sendMessage = () => {
        let text = newMessageElement.current.value
        alert(text)
    }

    return(
        <div className={s.dialogs}>
            <div className={s.dialog}>
                {DialogsElement}
            </div>

            <div className={s.messages}>
                {MessagesElement}
                <textarea ref={newMessageElement}></textarea>
                <button onClick={sendMessage}>send message</button>
            </div>
        </div>
    );
}

export default Dialogs;