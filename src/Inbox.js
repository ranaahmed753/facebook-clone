import { Avatar, IconButton } from '@material-ui/core';
import React, { useState } from 'react';
import './Inbox.css';
import VideocamRoundedIcon from '@material-ui/icons/VideocamRounded';
import CallRoundedIcon from '@material-ui/icons/CallRounded';
import RemoveRoundedIcon from '@material-ui/icons/RemoveRounded';
import CloseRoundedIcon from '@material-ui/icons/CloseRounded';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import InsertPhotoIcon from '@material-ui/icons/InsertPhoto';
import InsertEmoticonRoundedIcon from '@material-ui/icons/InsertEmoticonRounded';
import GifIcon from '@material-ui/icons/Gif';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';

const Inbox = ({open,onClose,onOpen}) => {
    
    
    return open ?(
        <div className='inbox'>
            <div className='inbox__top'>
                <Avatar/>
                <div className='inboxTop__option'>
                    <h1 style={{fontSize:15,fontWeight:500}}>Clever Programmer</h1>
                    <h1 style={{fontSize:12,fontWeight:200,color:'gray'}}>Active Now</h1>
                </div>
                <div className='inboxTopOption__right'>
                    <IconButton style={{color:'#0675E6'}}>
                        <VideocamRoundedIcon/>
                    </IconButton>
                    <IconButton style={{color:'#0675E6'}}>
                        <CallRoundedIcon/>
                    </IconButton>
                    <IconButton style={{color:'#0675E6'}}>
                        <RemoveRoundedIcon/>
                    </IconButton>
                    <IconButton style={{color:'#0675E6'}} onClick={onClose}>
                        <CloseRoundedIcon/>
                    </IconButton>
                </div>
            </div>

            <div className='inbox__middle'></div>
            <div className='inbox__bottom'>
                <div className='inboxBottom__left'>
                     <IconButton style={{color:'#0675E6'}}>
                        <AddCircleIcon/>
                    </IconButton>
                    <IconButton style={{color:'#0675E6'}}>
                        <InsertPhotoIcon/>
                    </IconButton>
                    <IconButton style={{color:'#0675E6'}}>
                        <InsertEmoticonRoundedIcon/>
                    </IconButton>
                    <IconButton style={{color:'#0675E6'}}>
                        <GifIcon/>
                    </IconButton>
                </div>
                <div className='inboxBottom__middle'>
                    <input placeholder='type...'/>
                    
                </div>
                <div className='inboxBottom__right'>
                    <IconButton>
                        <ThumbUpAltIcon style={{color:'#0675E6'}}/>
                    </IconButton>
                </div>
            </div>
            
        </div>       
    ) : null;
};

export default Inbox;