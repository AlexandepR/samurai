import React from "react";
import './Profile.module.css'
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {DialogsTextType, MessagesTextType, MyPostsTextType, MyPostsType, StateType} from "../../redux/state";

type AppPropsType = {
    state: StateType
    addPost: (postText: string) => void
}


const Profile = (props:AppPropsType) => {

    return <div>
        <ProfileInfo/>
        {/*<MyPosts posts={props.posts} dialogs={props.dialogs} messages={props.messages}/>*/}
        <MyPosts state={props.state} addPost={props.addPost}/>
    </div>
}

export default Profile;