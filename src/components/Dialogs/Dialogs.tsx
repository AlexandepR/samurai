import React, {createRef} from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from './Message/Message';
// import {DialogArrayType} from "../../index";
// import {dialogsPage} from "../../redux";
import {DialogsType, MessagesType} from "../../redux/state";


type DialogsMessageType = {
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
}

const Dialogs = (props:DialogsMessageType) => {

    let dialogsElements = props.dialogs.map(d => <DialogItem name={d.name} id={d.id} /> );
    let messagesElements = props.messages.map( m => <Message message={m.message}/> );

    let addMessageRef = createRef<HTMLTextAreaElement>()

    const addMessage = () => {
           if (addMessageRef.current){
             alert  (addMessageRef.current.value)
           }
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
            <textarea ref={addMessageRef}>+++</textarea><br></br>
            <button onClick={ addMessage }>AddMessage</button>
        </div>
    )
}

export default Dialogs;
