import {MyPostsType} from "./state";


export const dialogsReducer = (state, action) => {
    switch (action.type) {
        case 'CHANGE-NEW-MESSAGE-TEXT':
            state.dialogsPage.newMessageBody = action.newTextMessage
            return state;
        case 'Send-MESSAGE':
            let body = state.newMessageBody;
            state.newMessageBody = '';
            state.messages.push({id: 6, message: body});
            return state;
        default:
            return state;
    }


}