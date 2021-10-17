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

const Inbox = ({open,onClose,onOpen,name}) => {
    const icons = [ <VideocamRoundedIcon/>,<CallRoundedIcon/>,<RemoveRoundedIcon/>,<CloseRoundedIcon/> ]
    const iconInbox = [<AddCircleIcon/>,<InsertPhotoIcon/>,<InsertEmoticonRoundedIcon/>,<GifIcon/>]

    
    return open ?(
        <div className='inbox'>
            <div className='inbox__top'>
                <Avatar/>
                <div className='inboxTop__option'>
                    <h1 style={{fontSize:15,fontWeight:500}}>{name}</h1>
                    <h1 style={{fontSize:12,fontWeight:200,color:'gray'}}>Active Now</h1>
                </div>
                <div className='inboxTopOption__right'>
                    {
                        icons.map(icon => (
                         <IconButton style={{color:'#0675E6'}}>
                               {icon} 
                        </IconButton>
                        ))
                    }
                    
                </div>
            </div>

            <div className='inbox__middle'></div>
            <div className='inbox__bottom'>
                <div className='inboxBottom__left'>
                    {
                        iconInbox.map( icon_inbox => (
                            <IconButton style={{color:'#0675E6'}}>
                               {icon_inbox}
                            </IconButton>
                        ))
                    }
                     
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