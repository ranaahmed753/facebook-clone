import { Avatar } from '@material-ui/core';
import React from 'react';
import './GroupFeed.css';
import GroupFeedCard from './GroupFeedCard';


const GroupFeed = () => {
    return (
        <div className='group__feed'>
            <div className='groupFeed__top'>
                <div className='groupFeedTop__option'>
                    <h1 style={{fontSize:15,fontWeight:400}}>New for You</h1>
                    <h1 style={{fontSize:15,fontWeight:400,color:'#1770E6',marginLeft:'auto',cursor:'pointer'}}>See All(9)</h1>
                </div>
                <div className='groupFeedBottom__option'>
                    <Avatar style={{height:60,width:60}} src='https://miro.medium.com/max/14285/1*5TRuG7tG0KrZJXKoFtHlSg.jpeg'/>
                    <div className='groupFeedBottomOption__row'>
                        <h1 style={{fontSize:15,fontWeight:400}}> Elite Web Design posted on React Native</h1>
                        <h1 style={{fontSize:15,fontWeight:400,color:'#1770E6'}}>22 hours ago</h1>
                    </div>
                    
                </div>
            </div>

            <h1 style={{alignSelf:'flex-start',fontSize:16,fontWeight:400,marginTop:10}}>RECENT ACTIVITY</h1>

            <div className='groupFeed__bottom'>
                
                <GroupFeedCard/>
                <GroupFeedCard/>
                <GroupFeedCard/>
                <GroupFeedCard/>
                <GroupFeedCard/>
                <GroupFeedCard/>
                <GroupFeedCard/>
                <GroupFeedCard/>
                <GroupFeedCard/>
                
            </div>
        </div>
    );
};

export default GroupFeed;