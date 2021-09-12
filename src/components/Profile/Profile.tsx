import React from "react";
import './Profile.module.css'
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {
    ActionsTypes,
    MyPostsTextType, store,
    StoreType,
} from "../../redux/store";

type ProfilePropsType = {
    store: StoreType
    profilePostPage: MyPostsTextType
    // addPost: (postText: string) => void
    // updateNewPostText: (newText:string) => void
    dispatch: (action: ActionsTypes) => void
}


const Profile = (props:ProfilePropsType) => {
    // const state = props.store.getState()
    return <div>
        <ProfileInfo/>
        <MyPosts
            store={props.store}
            dispatch={props.dispatch}
            newPostText={props.profilePostPage.newPostText}
            // updateNewPostText={props.store.updateNewPostText.bind(store)}
        />
    </div>
}

export default Profile;