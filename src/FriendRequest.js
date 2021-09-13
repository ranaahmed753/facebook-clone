import { Avatar } from '@material-ui/core';
import React from 'react';
import './FriendRequest.css';

const FriendRequest = () => {
    return (
        <div className='friendRequest'>
            <Avatar style={{height:60,width:60}} src='https://images.techhive.com/images/article/2015/05/programmer-100586647-primary.idge.jpg'/>
            <div className='friendRequest__top'>
                <h1 style={{fontSize:17,fontWeight:500}}>Shakid</h1>
                <h1 style={{fontSize:14,fontWeight:400,color:'gray'}}>100mutual friends</h1>
                <div className='friendRequestTop__bottom'>
                    <button className='addFriend'>Add Friend</button>
                    <button className='remove'>Remove</button>
                </div>
            </div>
            
        </div>
    );
};

export default FriendRequest;