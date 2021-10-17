import React from 'react';
import './Friend.css';
import SettingsRoundedIcon from '@material-ui/icons/SettingsRounded';
import FriendRequest from './FriendRequest';

const Friend = () => {
    const friendRequest = [
                        <FriendRequest/>,
                         <FriendRequest/>,
                         <FriendRequest/>,
                         <FriendRequest/>,
                         <FriendRequest/>,
                         <FriendRequest/>,
                         <FriendRequest/>,
                         <FriendRequest/>,
                         <FriendRequest/>,
                         <FriendRequest/>,
                         <FriendRequest/>,
                         <FriendRequest/>,
                         <FriendRequest/>,
                         <FriendRequest/>,
                         <FriendRequest/>,
                         <FriendRequest/>,
                         <FriendRequest/>,
                         <FriendRequest/>,
    ]
    return (
        <div className='friend'>
            <div className='friend__sidebar'>
                
                <div className='friendSidebar__top'>
                    <h1>Friend</h1>
                    <SettingsRoundedIcon/>
                </div>
                <div className='friendSidebar__bottom'>
            
                     <div className='friendSidebarBottom__top'>
                         <div className='friendSidebarBottomTop__option'>
                             <h1 style={{fontSize:16,fontWeight:500}}>Friend Requests</h1>
                             <h1 className='seeAll' style={{fontSize:16,fontWeight:400,marginLeft:'auto',color:'#1770E6',padding:5}}>See All</h1>
                         </div>
                         <h1 style={{fontSize:16,fontWeight:300,alignSelf:'center',marginTop:10}}>No new requests</h1>
                     </div>
                     <div className='friendSidebarBottom__bottom'>
                         <h1 style={{fontSize:18,fontWeight:500}}>People You May Know</h1>
                        {
                            friendRequest.map( request => (
                                request
                            ))
                        }
                         
                     </div>
                </div>
            </div>
            <div className='friend__feed'>
                
                <img 
                 src='https://www.facebook.com/images/comet/empty_states_icons/people/null_states_people_gray_wash.svg'
                 style={{height:150}}
                />
                <h1 style={{fontSize:18,fontWeight:500,color:'gray'}}>Select people's names to preview their profile</h1>
            </div>
        </div>
    );
};

export default Friend;