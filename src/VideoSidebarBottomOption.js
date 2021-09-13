import React from 'react';
import './VideoSidebarBottomOption.css';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';

const VideoSidebarBottomOption = () => {
    return (
        <div className='videoSidebarBottomOption'>
            <PlayCircleFilledIcon/>
            <h1>Latest Videos</h1>
        </div>
    );
};

export default VideoSidebarBottomOption;