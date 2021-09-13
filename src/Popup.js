import { Avatar, IconButton } from '@material-ui/core';
import React from 'react';
import './Popup.css';
import FeedbackIcon from '@material-ui/icons/Feedback';
import SettingsIcon from '@material-ui/icons/Settings';
import HelpIcon from '@material-ui/icons/Help';
import NightsStayIcon from '@material-ui/icons/NightsStay';
import BookIcon from '@material-ui/icons/Book';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

const Popup = ({open,onClose,onOpen}) => {
    return open ? (
        <div className='popup' onClick={onClose}>
            
            <div className='popup__top'>
                <Avatar/>
                <div className='popupTop__right'>
                    <h1 style={{fontSize:15,fontWeight:400}}>Rana Ahmed</h1>
                    <h1 style={{fontSize:12,fontWeight:200}}>See your profile</h1>
                </div>
            </div>
            <div className='popup__middle'>
                <IconButton>
                    <FeedbackIcon/>
                </IconButton>
                <div className='popupMiddle__right'>
                <h1 style={{fontSize:15,fontWeight:400}}>Give Feedback</h1>
                    <h1 style={{fontSize:12,fontWeight:200}}>Help us improve the new facebook</h1>
                </div>
            </div>
            <div className='popup__bottom'>
                <div className='popupBottom__option'>
                    <IconButton>
                    <SettingsIcon/>
                    </IconButton>
                    <h1 style={{fontSize:15,fontWeight:400}}>Setting & Privacy</h1>
                    <NavigateNextIcon style={{marginLeft:'auto',color:'gray'}}/>
                </div>

                <div className='popupBottom__option'>
                    <IconButton>
                    <HelpIcon/>
                    </IconButton>
                    <h1 style={{fontSize:15,fontWeight:400}}>Help & Support</h1>
                    <NavigateNextIcon style={{marginLeft:'auto',color:'gray'}}/>
                </div>

                <div className='popupBottom__option'>
                    <IconButton>
                    <NightsStayIcon/>
                    </IconButton>
                    <h1 style={{fontSize:15,fontWeight:400}}>Display & Accessibility</h1>
                    <NavigateNextIcon style={{marginLeft:'auto',color:'gray'}}/>
                </div>

                <div className='popupBottom__option'>
                    <IconButton>
                    <BookIcon/>
                    </IconButton>
                    <h1 style={{fontSize:15,fontWeight:400}}>Logout</h1>
                    <NavigateNextIcon style={{marginLeft:'auto',color:'gray'}}/>
                </div>

            </div>
        </div>
    ) : null;
};

export default Popup;