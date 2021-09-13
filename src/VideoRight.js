import { Avatar, IconButton } from '@material-ui/core';
import React from 'react';
import './VideoRight.css';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import NearMeIcon from '@material-ui/icons/NearMe';

const VideoRight = () => {
    return (
        <div className='videoRight'>
            <div className='videoRight__top'>
                <Avatar style={{cursor:'pointer'}}/>
                <div className='videoRight__option'>
                    <h1 style={{fontSize:16,fontWeight:500,cursor:'pointer'}}>PrankBuzz</h1>
                    <h1 style={{fontSize:12,fontWeight:200,color:'gray',cursor:'pointer'}}>Today at 2,2021</h1>
                </div>
                <IconButton style={{marginLeft:'auto'}}>
                <MoreHorizIcon/>
                </IconButton>
            </div>
            <div className='videoRight__middle'>
                <h1 style={{fontSize:14,fontWeight:200}}>Wow!! this works</h1>
                <img 
                 src='https://content.fortune.com/wp-content/uploads/2019/03/ven04.-42-software-school.jpg'
                 style={{height:500,backgroundSize:'cover'}}

                />
            </div>
            <div className='videoRight__bottom'>
            
                <div className='videoRightBottom__left'>
                    <div className='videoRightBottomLeft__option'>
                        <ThumbUpIcon style={{color:'gray'}}/>
                        <p style={{color:'gray',marginLeft:10,fontSize:13}}>Like</p>
                    </div>
                    <div className='videoRightBottomLeft__option'>
                        <ChatBubbleOutlineIcon style={{color:'gray'}}/>
                        <p style={{color:'gray',marginLeft:10,fontSize:13}}>Comment</p>
                    </div>
                    <div className='videoRightBottomLeft__option'>
                        <NearMeIcon style={{color:'gray'}}/>
                        <p style={{color:'gray',marginLeft:10,fontSize:13}}>Share</p>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default VideoRight;