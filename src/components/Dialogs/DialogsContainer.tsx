import React from 'react';
import {DialogsTextType, RootStateType, StoreType} from "../../redux/store";
import {sendMessageActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";


type DialogsMessageType = {
    dialogsPage: DialogsTextType
    store: StoreType
}

// const DialogsContainer = (props: DialogsMessageType) => {
//     const state = props.store.getState().dialogsPage
//
//
//     // const onSendMessageClick = () => {
//     //     props.store.dispatch(sendMessageActionCreator(state.newMessageBody))
//     // }
//
//     const onNewMessageChange = (text: string) => {
//         props.store.dispatch({type: 'CHANGE-NEW-MESSAGE-TEXT', newTextMessage: text})
//     }
//
//     return (
//         <Dialogs
//             updateNewMessageBody={onNewMessageChange}
//             sendMessage={onSendMessageClick}
//             dialogsPage={state}
//         />
//     )
// }

let mapStateToProps = (state) => {
    return {
        dialogsPage: {state.dialogsPage}
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageBody: () => {
            dispatch(sendMessageActionCreator(state.newMessageBody))
        },
        sendMessage: (text: string) => {
            dispatch({type: 'CHANGE-NEW-MESSAGE-TEXT', newTextMessage: text})
        }
    }
}


const DialogsContainer = connect (mapStateToProps, mapDispatchToProps) (Dialogs);

export default DialogsContainer;
