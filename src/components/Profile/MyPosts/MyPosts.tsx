import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import Profile from "../Profile";
// import {PostsType} from "../../../index";
// import {DialogArrayType} from "../../../index";
// import {MyPostsType} from "../Profile";
import {StateType} from '../../../redux/state'

type AppPropsType = {
    state: StateType

}

const MyPosts = (props: AppPropsType) => {

    let postsElements = props.state.profilePostPage.posts.map( p =>
        <Post message={p.message} likesCount={p.likesCount}/>)

    return (
        <div className={s.postsBlock}>
            <h3> My posts </h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;