// import {rerenderEntireTree} from "../render";
// import {rerenderEntireTree} from "../index";
import {v1} from "uuid";
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {sidebarReducer} from "./sidebar-reducer";


export type RootStateType = {
    profilePostPage: MyPostsTextType
    dialogsPage: DialogsTextType
    // messagePage: MessagesTextType
    sidebar: SidebarType
}
export type SidebarType = {

}

export type DialogsTextType = {
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
    // newMessageBody: Array<newMessage>
    newMessageBody: string
}

export type MyPostsTextType = {
    posts: Array<MyPostsType>
    newPostText: string
}

export type DialogsType = {
    id: number
    name: string
}
// export type newMessage = {
//     id: number
//     message: string
// }

export type MessagesType = {
    id: number
    message: string
}

export type MyPostsType = {
    id: number
    message: string | undefined
    likesCount: number
}


export type StoreType = {
    _state: RootStateType
    _rerenderTreeChange: () => void
    subscribe: (observer: () => void) => void
    getState: () => RootStateType
    dispatch: (action: ActionsTypes) => void
}



export type ActionsTypes =
    ReturnType<typeof addPostActionCreator> |
    ReturnType<typeof chnageNewTextActionCreator> |
    ReturnType<typeof addNewMessageBodyActionCreator> |
    ReturnType<typeof sendMessageActionCreator>

export const addPostActionCreator = (newPostText:string) => {
    return {
        type: 'ADD-POST',
        postText: newPostText
    } as const
}
export const chnageNewTextActionCreator = (newText:string) => {
    return {
        type: 'CHANGE-NEW-TEXT',
        newText: newText
    } as const
}
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


// const ADD_POST = 'ADD-POST';
// const CHANGE_NEW_TEXT = 'CHANGE-NEW-TEXT'
// const CHANGE_NEW_MESSAGE_TEXT = 'CHANGE-NEW-MESSAGE-TEXT'
// const SEND_MESSAGE = 'SEND-MESSAGE';

export const store: StoreType = {
    _state: {
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
            ],
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How is your it-kamasutra?'},
                {id: 3, message: 'Yo'},
                {id: 4, message: 'Yo'},
                {id: 5, message: 'Yo'}
            ],
            newMessageBody: ''
        },
        sidebar: {}
    },
    _rerenderTreeChange() {
        console.log('state changed')
    },
    getState() {
        return this._state
    },
    subscribe(observer) {
        this._rerenderTreeChange = observer;
    },
    // updateNewPostText(newText: string) {
    //     this._state.profilePostPage.newPostText = newText;
    //     this._rerenderTreeChange()
    //     // rerenderTreeChange()
    // },
    // addPost(postText: string) {
    //     const newPost: MyPostsType = {
    //         id: new Date().getTime(),
    //         message: postText,
    //         // message: this._state.profilePostPage.newPostText,
    //         likesCount: 0
    //     }
    //     this._state.profilePostPage.posts.push(newPost);
    //     this._state.profilePostPage.newPostText = ''
    //     this._rerenderTreeChange()
    // },

    dispatch(action) {

       this._state.profilePostPage =  profileReducer(this._state.profilePostPage, action);
       this._state.dialogsPage =  dialogsReducer(this._state.dialogsPage, action);
       this._state.sidebar =  sidebarReducer(this._state.sidebar, action);

        this._rerenderTreeChange()

        // if(action.type === 'ADD-POST') {
        //     const newPost: MyPostsType = {
        //         id: new Date().getTime(),
        //         message: action.postText,
        //         likesCount: 0
        //     }
        //     this._state.profilePostPage.posts.push(newPost);
        //     this._state.profilePostPage.newPostText = ''
        //     this._rerenderTreeChange()
        // } else if (action.type === 'CHANGE-NEW-TEXT') {
        //     this._state.profilePostPage.newPostText = action.newText;
        //     this._rerenderTreeChange();
        // } else if (action.type === 'CHANGE-NEW-MESSAGE-TEXT') {
        //     this._state.dialogsPage.newMessageBody = action.newTextMessage;
        //     this._rerenderTreeChange()
        // } else if (action.type === 'SEND-MESSAGE') {
        //     let body = this._state.dialogsPage.newMessageBody;
        //     this._state.dialogsPage.newMessageBody = '';
        //     this._state.dialogsPage.messages.push({id: 6, message: body});
        //     this._rerenderTreeChange()
        // }
    }
}


// let rerenderTreeChange = () => {
//     // alert('rerenderTreeChange')
// }


// export type StateType = {
//     profilePostPage: MyPostsTextType
//     dialogsPage: DialogsTextType
//     messagePage: MessagesTextType
// }

// export let state:StateType = {
//     profilePostPage: {
//         posts: [
//             {id: 1, message: 'Hi, how are you?', likesCount: 12},
//             {id: 2, message: 'It\'s my first post!!!', likesCount: 11},
//             {id: 3, message: 'Blabla', likesCount: 11},
//             {id: 4, message: 'Dada', likesCount: 11}
//         ],
//         newPostText: ''
//     },
//     dialogsPage: {
//     dialogs: [
//         {id: 1, name: 'Alex'},
//         {id: 2, name: 'Andrey'},
//         {id: 3, name: 'Sveta'},
//         {id: 4, name: 'Sasha'},
//         {id: 5, name: 'Victor'},
//         {id: 6, name: 'Valera'}
//     ]
//     },
//     messagePage: {
//         messages: [
//             {id: 1, message: 'Hi'},
//             {id: 2, message: 'How is your it-kamasutra?'},
//             {id: 3, message: 'Yo'},
//             {id: 4, message: 'Yo'},
//             {id: 5, message: 'Yo'}
//         ]
//     }
// }

// export let addPost = (postText: string) => {
//     const newPost: MyPostsType = {
//         id: new Date().getTime(),
//         message: postText,
//         likesCount: 0
//     }
//     state.profilePostPage.posts.push(newPost);
//     // rerenderEntireTree()
//     // rerenderTreeChange(state)
//     rerenderTreeChange()
// }

// export let updateNewPostText = (newText: string) => {
//         state.profilePostPage.newPostText = newText;
//     // rerenderEntireTree()
//     rerenderTreeChange()
// }


// export const subscribe = (observer: () => void) => {
//     // alert('subscribe')
//     rerenderTreeChange = observer;
// }


//
// let man = {
//     name: 'Dmitry',
//     age: 31,
//     sayName() {
//         alert("My name is " + this.name);
//     }
// }
//
// man.age = 27;
// console.log(man.age);
// console.log(man.name);
// man.sayName();
//
//
//
//
//
// let content = 'sds';
//
// let page = {
//     title: 'samuraiJS',
//     content: ``,
//
//     render() {
//         if (this.content === '') {
//             alert('Content is unavaiable');
//         } else {
//             document.title = this.title;
//             document.write(this.content);
//         }
//     }
// }
//
// page.content = `<div>Content about React JS</div>`;
// page.render();
//
// let page2 = {
//     title: 'samuraiJS',
//     _content: ``,
//     setContent(value) {
//         //if (value is ok??)
//         this._content = value;
//     },
//     getContent() {
//         return this._content;
//     },
//     render: function () {
//         document.write(this._content);
//     }
// }
//
// // page2._content = `<div>Content about React JS</div>`;
// page2.setContent(`<div>Content about React JS</div>`);
// // console.log( page2._content );
// console.log(page2.getContent());
// page2.render();
//
// let renderPage = (state) => {
//     console.log(state);
// };
//
// let store = {
//     _subscriber() {
//         console.log('no subscribers (observers)')
//     },
//     _state: {
//         firstName: 'it-incubator.by',
//         lastName: 'it-kamasutra.com'
//     },
//     getState() {
//         return this._state;
//     },
//     subscribe(observer) {
//         this._subscriber = observer;
//     },
//     setFirstName(value) {
//         // send ajax to server
//         this._state.firstName = value;
//         this._subscriber();
//     }
// }
// // store._state
//
//
// let state = store.getState();
// store.setFirstName('samuraiJS.com');
// state = store.getState();
//
// let subscriber = () => {
//     let state = store.getState();
//     renderPage(state);
// };
//
// store.subscribe(subscriber);
//
// store.setFirstName('youtube.com');
//
//
//
// </script><script>
//
// // plain object   // POCO\POJO
//
// let man = {
//     name: 'Dmitry',
//     age: 31,
//     sayName() {
//         alert("My name is " + this.name);
//     }
// }
//
// man.age = 27;
// console.log(man.age);
// console.log(man.name);
// man.sayName();
//
//
//
//
//
// let content = 'sds';
//
// let page = {
//     title: 'samuraiJS',
//     content: ``,
//
//     render() {
//         if (this.content === '') {
//             alert('Content is unavaiable');
//         } else {
//             document.title = this.title;
//             document.write(this.content);
//         }
//     }
// }
//
// page.content = `<div>Content about React JS</div>`;
// page.render();
//
// let page2 = {
//     title: 'samuraiJS',
//     _content: ``,
//     setContent(value) {
//         //if (value is ok??)
//         this._content = value;
//     },
//     getContent() {
//         return this._content;
//     },
//     render: function () {
//         document.write(this._content);
//     }
// }
//
// // page2._content = `<div>Content about React JS</div>`;
// page2.setContent(`<div>Content about React JS</div>`);
// // console.log( page2._content );
// console.log(page2.getContent());
// page2.render();
//
// let renderPage = (state) => {
//     console.log(state);
// };
//
// let store = {
//     _subscriber() {
//         console.log('no subscribers (observers)')
//     },
//     _state: {
//         firstName: 'it-incubator.by',
//         lastName: 'it-kamasutra.com'
//     },
//     getState() {
//         return this._state;
//     },
//     subscribe(observer) {
//         this._subscriber = observer;
//     },
//     setFirstName(value) {
//         // send ajax to server
//         this._state.firstName = value;
//         this._subscriber();
//     }
// }
// // store._state
//
//
// let state = store.getState();
// store.setFirstName('samuraiJS.com');
// state = store.getState();
//
// let subscriber = () => {
//     let state = store.getState();
//     renderPage(state);
// };
//
// store.subscribe(subscriber);
//
// store.setFirstName('youtube.com');
//
//













