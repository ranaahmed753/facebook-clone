import { Avatar, IconButton } from '@material-ui/core';
import React from 'react';
import './GroupFeedCard.css';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import PanToolTwoToneIcon from '@material-ui/icons/PanToolTwoTone';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import NearMeIcon from '@material-ui/icons/NearMe';

const GroupFeedCard = () => {
    return (
        <div className='groupFeed__card'>

            <div className='groupFeedCard__top'>
                <Avatar/>
                <div className='groupFeedCardTop__option'>
                    <h1>Clever Programmer</h1>
                    <div className='groupFeedCardTopOption__bottom'>
                        <PanToolTwoToneIcon/>
                        <h1>21hr</h1>
                        <SupervisedUserCircleIcon/>
                    </div>
                </div>
                <IconButton style={{marginLeft:'auto'}}>
                    <MoreHorizIcon/>
                </IconButton>
            </div>

            

            <div className='groupFeedCard__middle'>
                <h1>hey react!! developer community</h1>
                <img src='http://blog.addthiscdn.com/wp-content/uploads/2014/11/addthis-react-flux-javascript-scaling.png'/> 
            </div>

            <div className='groupFeedCard__bottom'>
                
                <div className='groupFeedCardBottom__option'>
                  <ThumbUpIcon style={{color:'gray'}}/>
                  <p style={{color:'gray',marginLeft:10,fontSize:13}}>Like</p>
                </div>

                <div className='groupFeedCardBottom__option'>
                    <ChatBubbleOutlineIcon style={{color:'gray'}}/>
                    <p style={{color:'gray',marginLeft:10,fontSize:13}}>Comment</p>
                </div>

                <div className='groupFeedCardBottom__option'>
                    <NearMeIcon style={{color:'gray'}}/>
                    <p style={{color:'gray',marginLeft:10,fontSize:13}}>Share</p>
                </div>
            </div>

        </div>
    );
};

export default GroupFeedCard;