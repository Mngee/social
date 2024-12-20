import React from "react";
import c from './Dialogs.module.css'
import {NavLink} from "react-router-dom";


const DialogItem = (props) => {

    return(


        <div className={c.dialog}>
            <img src={props.avatar}/>

             <NavLink to=  {'/dialogs/' + props.id} >  {props.name}  </NavLink>

        </div>
    )
}
const MessageItem = (props) => {
    return(
        <div >
            <div className={c.message}> {props.message} </div>

        </div>
    )
}

const Dialogs = (props) =>{

    let DialogsElements =  props.DialogsData.map( d => <DialogItem name={d.name} id={d.id} avatar={d.avatar} /> )
    let MessagesElements = props.MessagesData.map( m => <MessageItem message={m.message}/>)
    return(
        <div className={c.dialogs}>
        <div className={c.dialogs_item}>

            {DialogsElements}

        </div>
            <div className={c.messages}>

                {MessagesElements}

            </div>
        </div>
    )
}
export default Dialogs;