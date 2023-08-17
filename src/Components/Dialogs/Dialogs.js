import React from "react";
import s from './Dialogs.module.css'

import DialogItem from "./DialogItem/DialogItem";
import Message from "./Messages/Message";


const Dialogs = (props) =>{
    let DialogsElement = props.dialogsPage.DialogsData.map( dialog =>  <DialogItem name={dialog.name} id={dialog.id} />)
    let MessagesElement = props.dialogsPage.MessagesData.map(message => <Message message={message.message }/> )
    let newMessageElement = React.createRef()
    // let sendMessage = () => {
    //     let text = newMessageElement.current.value
    //     alert(text)
    // }
    let textMessage = () => {
        props.addMessage();
    }
    let onMesssageChange = () => {
        let textm = newMessageElement.current.value
        props.updateNewMessageText(textm)
    }
    return(
        <div className={s.dialogs}>
            <div className={s.dialog}>
                {DialogsElement}
            </div>

            <div className={s.messages}>
                {MessagesElement}

                <textarea ref={newMessageElement}
                          value={props.dialogsPage.newMessageText}
                          onChange={onMesssageChange}></textarea>
                <button onClick={textMessage}>send message</button>
            </div>
        </div>
    );
}

export default Dialogs;