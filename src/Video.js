import React from 'react';
import './Video.css';
import SettingsIcon from '@material-ui/icons/Settings';
import { IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import OndemandVideoOutlinedIcon from '@material-ui/icons/OndemandVideoOutlined';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import SwitchVideoOutlinedIcon from '@material-ui/icons/SwitchVideoOutlined';
import MovieCreationIcon from '@material-ui/icons/MovieCreation';
import VideoSidebarBottomOption from './VideoSidebarBottomOption';
import VideoRight from './VideoRight';

const Video = () => {
    const videoRight = [
                <VideoRight/>,
                <VideoRight/>,
                <VideoRight/>,
                <VideoRight/>,
                <VideoRight/>,
                <VideoRight/>,
                <VideoRight/>,
                <VideoRight/>,
                <VideoRight/>,
                <VideoRight/>,
                <VideoRight/>,
                <VideoRight/>,
                <VideoRight/>,
                <VideoRight/>,
    ]
    const videoSidebarBottomOption = [
                        <VideoSidebarBottomOption/>,
                        <VideoSidebarBottomOption/>,
                        <VideoSidebarBottomOption/>,
                        <VideoSidebarBottomOption/>,
                        <VideoSidebarBottomOption/>,
                        <VideoSidebarBottomOption/>,
                        <VideoSidebarBottomOption/>,
                        <VideoSidebarBottomOption/>,
                        <VideoSidebarBottomOption/>,
                        <VideoSidebarBottomOption/>,
                        <VideoSidebarBottomOption/>,
                        <VideoSidebarBottomOption/>,
                        <VideoSidebarBottomOption/>,
                        <VideoSidebarBottomOption/>,
                        <VideoSidebarBottomOption/>
    ]
    const videoSidebarMiddleOption = [
        {
            name : 'Home',
            icon : <OndemandVideoOutlinedIcon/>
        },
        {
            name : 'Shows',
            icon : <MovieCreationIcon/>
        },
        {
            name : 'Live',
            icon : <SwitchVideoOutlinedIcon/>
        },
        {
            name : 'Saved Videos',
            icon : <BookmarkIcon/>
        },
    ]
    return (
        <div className='video'>
            <div className='video__sidebar'>
                <div className='videoSidebar__top'>
                    
                    <div className='videoSidebarTop__top'>
                        <h1 style={{fontSize:25}}>Watch</h1>
                        <IconButton>
                        <SettingsIcon/>
                        </IconButton>
                        
                    </div>
                    <div className='videoSidebarTop__bottom'>
                        <SearchIcon style={{color:'gray'}}/>
                        <input placeholder='Search videos'/>
                    </div>
                </div>
                <div className='videoSidebar__middle'>
                    {
                        videoSidebarMiddleOption.map( videoSidebarMiddleOptions => (
                            <div className='videoSidebarMiddle__option'>
                                {videoSidebarMiddleOptions.icon}
                                <h1>{videoSidebarMiddleOptions.name}</h1>
                            </div>
                        ))
                    }
                    
                </div>
                <div className='videoSidebar__bottom'>
                    
                    <div className='videoSidebarBottom__top'>
                        <h1 style={{fontSize:18,fontWeight:500}}>Your Watchlist</h1>
                        <h1 className='manage' style={{fontSize:13,fontWeight:400,cursor:'pointer',color:'#3D87E8'}}>Manage</h1>
                    </div>
                    <div className='videoSidebarBottom__option'>
                        {
                            videoSidebarBottomOption.map( videoSidebarBottomOptions => (
                                videoSidebarBottomOptions
                            ))
                        }
                        
                    </div>
                </div>
            </div>
            <div className='video__right'>
                {
                    videoRight.map( videoRights => (
                        videoRights
                    ))
                }
                
            </div>
        </div>
    );
};

export default Video;