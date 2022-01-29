import React from "react";
import "./Post.css";

const post = () => {
  return (
    <>
      <div className='post'>
        <img
          className='postImage'
          src='https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
          alt=''
        />
        <div className='postInfo'>
          <div className='postCategories'>
            <span className='postCat'>Music</span>
            <span className='postCat'>Life</span>
          </div>
        </div>
        <div className='postTitle'>Lorem, ipsum dolor.</div>
        <hr />
        <span className='postDate'>1 hour ago</span>
        <p className='postDescription'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
          perspiciatis sed eligendi asperiores laboriosam laborum. Ipsam a
          numquam, quam, assumenda maiores est vitae, maxime beatae non nihil
          magni! Fugit, nisi? Natus id sequi amet assumenda dolor dicta illum
          ipsam accusamus. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Corrupti perspiciatis sed eligendi asperiores laboriosam
          laborum. Ipsam a numquam, quam, assumenda maiores est vitae, maxime
          beatae non nihil magni! Fugit, nisi? Natus id sequi amet assumenda
          dolor dicta illum ipsam accusamus. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Corrupti perspiciatis sed eligendi
          asperiores laboriosam laborum. Ipsam a numquam, quam, assumenda
          maiores est vitae, maxime beatae non nihil magni! Fugit, nisi? Natus
          id sequi amet assumenda dolor dicta illum ipsam accusamus.
        </p>
      </div>
    </>
  );
};

export default post;
