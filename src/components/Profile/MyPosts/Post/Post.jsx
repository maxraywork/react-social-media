import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
  return (
    <div className={s.item}>
      <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/681px-Placeholder_view_vector.svg.png' alt='blabla'/>
      {props.message}
          <div>
        <span>likes {props.likesCount}</span>
      </div>
    </div>
  )

}

export default Post;