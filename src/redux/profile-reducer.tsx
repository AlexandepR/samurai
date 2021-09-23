import {DialogsTextType, MyPostsTextType, MyPostsType, RootStateType, SidebarType} from "./store";


let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'It\'s my first post!!!', likesCount: 11},
        {id: 3, message: 'Blabla', likesCount: 11},
        {id: 4, message: 'Dada', likesCount: 11}
    ],
        newPostText: ''
}


export const addPostActionCreator = (newPostText:string) => {
    return {
        type: 'ADD-POST',
        postText: newPostText
    } as const
}
export const changeNewTextActionCreator = (newText:string) => {
    return {
        type: 'CHANGE-NEW-TEXT',
        newText: newText
    } as const
}

export const profileReducer = (state: any = initialState, action: any) => {
    switch (action.type) {
        case 'ADD-POST':
            const newPost: MyPostsType = {
                id: new Date().getTime(),
                message: action.postText,
                likesCount: 0
            };
            state.posts.push(newPost)
            state.newPostText = '';
            return state;

        case 'CHANGE-NEW-TEXT':
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }
}