import React, {ChangeEvent} from "react";
import {ActionsTypes, MyPostsType, StoreType} from '../../../redux/store'
import {addPostActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";


type MyPostType = {
    store: StoreType
}




const MyPostsContainer = (props: MyPostType) => {
    const state = props.store.getState()

    let addPost = () => {
        props.store.dispatch(addPostActionCreator(state.profilePostPage.newPostText));
    }

    const onPostChange = (text: string) => {
        props.store.dispatch({type: 'CHANGE-NEW-TEXT', newText: text})
    }

    return (<MyPosts
            updateNewPostText={onPostChange}
            addPost={addPost}
            posts={state.profilePostPage.posts}
            newPostText={state.profilePostPage.newPostText}
        />
    )
}

export default MyPostsContainer;