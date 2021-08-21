import React from "react";
import './Profile.module.css'
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {
    DialogsTextType,
    MessagesTextType,
    MyPostsTextType,
    MyPostsType, state,
    StateType,
    updateNewPostText
} from "../../redux/state";

type ProfilePropsType = {
    state: StateType
    addPost: (postText: string) => void
    profilePostPage: MyPostsTextType
}


const Profile = (props:ProfilePropsType) => {

    return <div>
        <ProfileInfo/>
        {/*<MyPosts posts={props.posts} dialogs={props.dialogs} messages={props.messages}/>*/}
        <MyPosts
            state={props.state}
            addPost={props.addPost}
            newPostText={props.profilePostPage.newPostText}
            updateNewPostText={updateNewPostText}
        />
    </div>
}

export default Profile;