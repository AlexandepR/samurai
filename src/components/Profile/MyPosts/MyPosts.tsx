import React, {ChangeEvent} from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import Profile from "../Profile";
// import {PostsType} from "../../../index";
// import {DialogArrayType} from "../../../index";
// import {MyPostsType} from "../Profile";
import {StateType, updateNewPostText} from '../../../redux/state'

type MyPostType = {
    state: StateType
    addPost: (postText: string) => void
    updateNewPostText: (newText: string) => void
    newPostText: string
}

const MyPosts = (props: MyPostType) => {

    let postsElements = props.state.profilePostPage.posts.map(p =>
        <Post message={p.message} likesCount={p.likesCount}/>)

    // let newPostElement = React.createRef<HTMLTextAreaElement>();
    // let addPost = () => {
    //     if (newPostElement.current) {
    //         const text = (newPostElement.current.value);
    //         props.addPost(text);
    //         props.updateNewPostText('');
    //     }
    // }
    let newPostElement = React.createRef<HTMLTextAreaElement>();
    let addPost = () => {
            props.addPost(props.newPostText)
    }



    const onPostChange = (e : ChangeEvent<HTMLTextAreaElement>) => {
        props.updateNewPostText(e.currentTarget.value)
        // const text = newPostElement.current.value;
        // props.updateNewPostText(text);

    }

    return (
        <div className={s.postsBlock}>
            <h3> My posts </h3>
            <div>
                <div>
                    {/*<hr/>*/}
                    {/*{props.state.profilePostPage.posts.map(p =>*/}
                    {/*    <div key={p.id}>*/}
                    {/*        <b>{p.message}</b></div>)}*/}
                    {/*    <hr/>*/}
                    <textarea
                        onChange={onPostChange}
                        value={props.newPostText}
                        // ref={newPostElement}
                    ></textarea>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;