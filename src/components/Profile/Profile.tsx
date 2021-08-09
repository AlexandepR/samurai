import React from "react";
import './Profile.module.css'
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {DialogsTextType, MessagesTextType, MyPostsTextType, MyPostsType, StateType} from "../../redux/state";

type AppPropsType = {
    state: StateType
}


const Profile = (props:AppPropsType) => {

    return <div>
        <ProfileInfo/>
        {/*<MyPosts posts={props.posts} dialogs={props.dialogs} messages={props.messages}/>*/}
        <MyPosts state={props.state}/>
    </div>
}

export default Profile;