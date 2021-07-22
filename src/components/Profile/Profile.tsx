import React from "react";
import './Profile.module.css'
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
  return <div className={s.content}>
      <img
          alt=''
          src="https://www.digiseller.ru/preview/917746/p1_2822191_baa2d3c2.jpg"/>
      <div>
          ava + description
      </div>
    <MyPosts />
  </div>
}

export default Profile;