import React from "react";
import './Profile.module.css'
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {
    MyPostsTextType, store,
    StoreType,
} from "../../redux/state";

type ProfilePropsType = {
    store: StoreType
    addPost: (postText: string) => void
    profilePostPage: MyPostsTextType
    updateNewPostText: (newText:string) => void
}


const Profile = (props:ProfilePropsType) => {
    // const state = props.store.getState()
    return <div>
        <ProfileInfo/>
        {/*<MyPosts posts={props.posts} dialogs={props.dialogs} messages={props.messages}/>*/}
        <MyPosts
            store={props.store}
            addPost={props.addPost}
            newPostText={props.profilePostPage.newPostText}
            updateNewPostText={props.store.updateNewPostText.bind(store)}
        />
    </div>
}

export default Profile;