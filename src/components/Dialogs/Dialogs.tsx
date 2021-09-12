import React, {ChangeEvent, createRef} from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from './Message/Message';
// import {DialogArrayType} from "../../index";
// import {dialogsPage} from "../../redux";
import {ActionsTypes, DialogsType, MessagesType,} from "../../redux/store";
import {sendMessageActionCreator} from "../../redux/dialogs-reducer";


type DialogsMessageType = {
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
    newMessageBody: string
    dispatch: (action: ActionsTypes) => void
}

const Dialogs = (props:DialogsMessageType) => {

    let dialogsElements = props.dialogs.map(d => <DialogItem name={d.name} id={d.id} /> );
    let messagesElements = props.messages.map( m => <Message message={m.message}/> );
    let newMessageBody = props.newMessageBody;

    // let addMessageRef = createRef<HTMLTextAreaElement>()


    const onSendMessageClick = () => {
        props.dispatch(sendMessageActionCreator(props.newMessageBody) )
    }

    const onNewMessageChange = (e:ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch ({type: 'CHANGE-NEW-MESSAGE-TEXT', newTextMessage: e.currentTarget.value})
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div><textarea
                        value={newMessageBody}
                        onChange={onNewMessageChange}
                        placeholder='Enter you message'></textarea></div>
                    <div><button onClick={onSendMessageClick}>Send</button></div>
                </div>
            </div>
            {/*<textarea ref={addMessageRef}>+++</textarea><br></br>*/}
        </div>
    )
}

export default Dialogs;
