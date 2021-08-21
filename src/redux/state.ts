// import {rerenderEntireTree} from "../render";
// import {rerenderEntireTree} from "../index";

let rerenderTreeChange = () => {
    // alert('rerenderTreeChange')
}

export type DialogsTextType = {
    dialogs: Array<DialogsType>
}
export type MessagesTextType ={
    messages: Array<MessagesType>
}
export type MyPostsTextType = {
    posts: Array<MyPostsType>
    newPostText: string
}

export type DialogsType = {
    id: number
    name: string
}
export type MessagesType = {
    id:number
    message: string
}
export type MyPostsType = {
    id: number
    message: string | undefined
    likesCount: number
}

export type StateType = {
    profilePostPage: MyPostsTextType
    dialogsPage: DialogsTextType
    messagePage: MessagesTextType
}

export let state:StateType = {
    profilePostPage: {
        posts: [
            {id: 1, message: 'Hi, how are you?', likesCount: 12},
            {id: 2, message: 'It\'s my first post!!!', likesCount: 11},
            {id: 3, message: 'Blabla', likesCount: 11},
            {id: 4, message: 'Dada', likesCount: 11}
        ],
        newPostText: ''
    },
    dialogsPage: {
    dialogs: [
        {id: 1, name: 'Alex'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Victor'},
        {id: 6, name: 'Valera'}
    ]
    },
    messagePage: {
        messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How is your it-kamasutra?'},
            {id: 3, message: 'Yo'},
            {id: 4, message: 'Yo'},
            {id: 5, message: 'Yo'}
        ]
    }
}

export let addPost = (postText: string) => {
    const newPost: MyPostsType = {
        id: new Date().getTime(),
        message: postText,
        likesCount: 0
    }
    state.profilePostPage.posts.push(newPost);
    // rerenderEntireTree()
    // rerenderTreeChange(state)
    rerenderTreeChange()
}

export let updateNewPostText = (newText: string) => {
        state.profilePostPage.newPostText = newText;
    // rerenderEntireTree()
    rerenderTreeChange()
}




export const subscribe = (observer: () => void) => {
    // alert('subscribe')
    rerenderTreeChange = observer;
}

export default state