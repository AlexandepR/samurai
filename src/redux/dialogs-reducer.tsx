import {MyPostsType, RootStateType} from "./store";


// type ActionType = {
//     type: string
//     newTextMessage: string
// }

export const  addNewMessageBodyActionCreator = (newTextMessage: string) => {
    return {
        type: 'CHANGE-NEW-MESSAGE-TEXT',
        newTextMessage: newTextMessage
    } as const
}
export const sendMessageActionCreator = (newText:string) => {
    return {
        type: 'SEND-MESSAGE',
        newText: newText
    } as const
}

let initialState = {
    dialogs: [
        {id: 1, name: 'Alex'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Victor'},
        {id: 6, name: 'Valera'}
    ],
        messages: [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'How is your it-kamasutra?'},
    {id: 3, message: 'Yo'},
    {id: 4, message: 'Yo'},
    {id: 5, message: 'Yo'}
],
    newMessageBody: ''

}




export const dialogsReducer = (state: any = initialState, action:any) => {
    switch (action.type) {
        case 'CHANGE-NEW-MESSAGE-TEXT':
            state.newMessageBody = action.newTextMessage
            return state;
        case 'SEND-MESSAGE':
            let body = state.newMessageBody;
            state.newMessageBody = '';
            state.messages.push({id: 6, message: body});
            return state;
        default:
            return state;
    }


}