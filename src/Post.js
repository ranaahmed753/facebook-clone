import { Avatar, IconButton } from '@material-ui/core';
import React, { useState } from 'react';
import './Post.css';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import NearMeIcon from '@material-ui/icons/NearMe';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import Inbox from './Inbox';

const Post = ({profilePic,image,username,timestamp,message}) => {
  const [like,setLike] = useState(false);

  const handleLike = () => {
      like ? setLike(false) : setLike(true);
  }

    return (
        <div className='post'>
            <div className='post__top'>
                <Avatar className='post__avatar' src={profilePic}/>
                <div className='post__topInfo'>
                    <h3>{username}</h3>
                    <p>{timestamp}</p>
                </div>
                <IconButton style={{marginLeft:'auto'}}>
                <MoreHorizIcon/>
                </IconButton>
            </div>
            
            <div className='post__bottom'>
                <p>{message}</p>
            </div>

            <div className='post__image'>
                <img src={image} alt=''/>
            </div>

            <div className='post__options'>
                <div className='post__option' onClick={()=> handleLike()}>
                    <ThumbUpIcon className={like ? 'post_like' : 'post_notlike'}/>
                    <p className={like ? 'post_like' : 'post_notlike'}>{like ? 'Liked' : 'Like'}</p>
                </div>
                <div className='post__option'>
                    <ChatBubbleOutlineIcon/>
                    <p>Comment</p>
                </div>
                <div className='post__option'>
                    <NearMeIcon/>
                    <p>Share</p>
                </div>
                <div className='post__option'>
                    <AccountCircleIcon/>
                    <ExpandMoreIcon/>
                </div>
            </div>
        </div>
    );
};

export default Post;