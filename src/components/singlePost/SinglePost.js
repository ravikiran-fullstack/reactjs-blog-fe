import React from "react";
import "./SinglePost.css";

const SinglePost = () => {
  return (
    <div className='singlePost'>
      <div className='singlePostWrapper'>
        <img
          src='https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
          alt=''
          className='singlePostImage'
        />
        <h1 className='singlePostTitle'>
          Lorem ipsum dolor sit.
          <div className='singlePostEdit'>
            <i class='singlePostIcon far fa-edit'></i>
            <i class='singlePostIcon far fa-trash-alt'></i>
          </div>
        </h1>
        <div className='singlePostInfo'>
          <span className='singlePostAuthor'>
            Author: <b>Ravikiran</b>
          </span>
          <span className='singlePostDate'>1 Hour ago</span>
        </div>
        <p className='singlePostDescription'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio quos
          animi temporibus nihil ipsa consequuntur repellat hic ab atque sed et
          eaque, magnam quidem quam rem suscipit quae aut vero quis voluptate
          nisi autem nostrum est? Cumque cum vitae ad officiis obcaecati, nobis
          eligendi autem possimus saepe minus repudiandae qui. Lorem ipsum dolor
          sit amet consectetur adipisicing elit. Quasi quod reiciendis sequi
          optio. Qui saepe optio laudantium ut illo quaerat natus modi at, aut
          laboriosam, perferendis blanditiis exercitationem mollitia. Quas
          veritatis illum sapiente eaque ex. Repellendus necessitatibus
          quibusdam, tenetur delectus possimus quia iste quisquam vitae fugiat
          accusamus nihil ullam. Numquam, consequuntur sequi? Labore, architecto
          placeat debitis temporibus corrupti quia. Ducimus culpa sunt impedit
          cumque, explicabo animi molestias doloribus possimus nostrum harum
          facere voluptatibus omnis perferendis dicta laborum unde, velit magni
          temporibus optio, soluta corrupti excepturi numquam. Saepe temporibus
          aliquid similique dolorem omnis optio nesciunt earum blanditiis, ipsum
          officiis, natus libero.
        </p>
      </div>
    </div>
  );
};

export default SinglePost;
