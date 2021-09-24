import React from 'react';
import {DialogsTextType, StoreType} from "../../redux/store";
import {sendMessageActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";


type DialogsMessageType = {
    dialogsPage: DialogsTextType
    store: StoreType
}

const DialogsContainer = (props: DialogsMessageType) => {
    const state = props.store.getState().dialogsPage


    const onSendMessageClick = () => {
        props.store.dispatch(sendMessageActionCreator(state.newMessageBody))
    }

    const onNewMessageChange = (text: string) => {
        props.store.dispatch({type: 'CHANGE-NEW-MESSAGE-TEXT', newTextMessage: text})
    }

    return (
        <Dialogs
            updateNewMessageBody={onNewMessageChange}
            sendMessage={onSendMessageClick}
            dialogsPage={state}
        />
    )
}

export default DialogsContainer;
