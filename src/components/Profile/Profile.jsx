import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './MyPosts/ProfileInfo/ProfileInfo';

const Profile = (props) => {
   
  return (
    <div className={s.content}>
     <ProfileInfo />
      <MyPosts  posts={props.state.posts} dispatch={props.dispatch} />
    </div>
  )
}

export default Profile;