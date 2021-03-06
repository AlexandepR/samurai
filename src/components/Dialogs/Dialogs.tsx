import React, {ChangeEvent, createRef} from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from './Message/Message';
// import {DialogArrayType} from "../../index";
// import {dialogsPage} from "../../redux";
import {ActionsTypes, DialogsTextType, DialogsType, MessagesType,} from "../../redux/store";
import {sendMessageActionCreator} from "../../redux/dialogs-reducer";


type DialogsMessageType = {

    updateNewMessageBody: (text: string) => void
    sendMessage: () => void
    dialogsPage: DialogsTextType
}

const Dialogs = (props: DialogsMessageType) => {
    let state = props.dialogsPage

    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElements = state.messages.map(m => <Message message={m.message}/>);
    let newMessageBody = state.newMessageBody;

    const onSendMessageClick = () => {
        props.sendMessage();
    }

    const onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const body = e.currentTarget.value
        props.updateNewMessageBody(body)
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
                        placeholder='Enter you message'> </textarea></div>
                    <div>
                        <button onClick={onSendMessageClick}>Send</button>
                    </div>
                </div>
            </div>
            {/*<textarea ref={addMessageRef}>+++</textarea><br></br>*/}
        </div>
    )
}

export default Dialogs;
