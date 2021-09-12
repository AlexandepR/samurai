import React, {ChangeEvent} from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import Profile from "../Profile";
// import {PostsType} from "../../../index";
// import {DialogArrayType} from "../../../index";
// import {MyPostsType} from "../Profile";
import {ActionsTypes,  StoreType} from '../../../redux/store'
import {addPostActionCreator} from "../../../redux/profile-reducer";


type MyPostType = {
    store: StoreType
    // addPost: (postText: string) => void
    // updateNewPostText: (newText: string) => void
    newPostText: string
    dispatch: (action: ActionsTypes) => void
}




const MyPosts = (props: MyPostType) => {
    const state = props.store.getState()

    let postsElements = state.profilePostPage.posts.map(p =>
        <Post message={p.message} likesCount={p.likesCount}/>)

    // let newPostElement = React.createRef<HTMLTextAreaElement>();
    // let addPost = () => {
    //     if (newPostElement.current) {
    //         const text = (newPostElement.current.value);
    //         props.addPost(text);
    //         props.updateNewPostText('');
    //     }
    // }
    // let newPostElement = React.createRef<HTMLTextAreaElement>();

    let addPost = () => {
        props.dispatch(addPostActionCreator(props.newPostText));
    }


    const onPostChange = (e : ChangeEvent<HTMLTextAreaElement>) => {
        // props.updateNewPostText(e.currentTarget.value)
        props.dispatch({type: 'CHANGE-NEW-TEXT', newText: e.currentTarget.value})
    }

    return (
        <div className={s.postsBlock}>
            <h3> My posts </h3>
            <div>
                <div>

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