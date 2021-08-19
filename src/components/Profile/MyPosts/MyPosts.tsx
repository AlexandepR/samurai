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
    addPost: (postText: string) => void
}

const MyPosts = (props: AppPropsType) => {

    let postsElements = props.state.profilePostPage.posts.map( p =>
        <Post message={p.message} likesCount={p.likesCount}/>)

    let newPostElement = React.createRef<HTMLTextAreaElement>();

    let addPost = () => {
        if (newPostElement.current) {
        const text = (newPostElement.current.value)
        props.addPost(text)
        }
    }

    return (
        <div className={s.postsBlock}>
            <h3> My posts </h3>
            <div>
                <div>
                    <textarea ref={newPostElement}></textarea>
                </div>
                <div>
                    <button onClick={ addPost }>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;