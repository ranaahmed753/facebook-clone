import { IconButton } from '@material-ui/core';
import React from 'react';
import './Group.css';
import SettingsIcon from '@material-ui/icons/Settings';
import SearchIcon from '@material-ui/icons/Search';
import StorefrontOutlinedIcon from '@material-ui/icons/StorefrontOutlined';
import NotificationsRoundedIcon from '@material-ui/icons/NotificationsRounded';
import GroupFeed from './GroupFeed';
import ExploreIcon from '@material-ui/icons/Explore';
import FeaturedPlayListIcon from '@material-ui/icons/FeaturedPlayList';
import Notification from './Notification';
import Discover from './Discover';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,NavLink, BrowserRouter
} from "react-router-dom";

const Group = () => {
    return (
        <div className='group'>
          

        <BrowserRouter>
          <div className='group__sidebar'>
            <div className='groupSidebar__top'>
              <div className='groupSidebar__option'>
                <h1 style={{fontSize:22}}>Group</h1>
                <IconButton style={{cursor:'pointer',marginLeft:'auto'}}>
                  <SettingsIcon />
                </IconButton>
              </div>
              <div className='inputSearch'>
                  <SearchIcon/>
                  <input placeholder='Search Group'/>
               </div>
            </div>

            <div className='groupSidebar__bottom'>
            <NavLink to='/feedhome' style={{textDecoration:'none',color:'black',borderBottom:'none'}}>
              <div className='groupSidebarBottom__option'>
                <FeaturedPlayListIcon/>
                 <h1>Your Feed</h1>
              </div>
            </NavLink>

              <NavLink to='/discover' style={{textDecoration:'none',color:'black',borderBottom:'none'}}>
              <div className='groupSidebarBottom__option'>
                <ExploreIcon/>
                 <h1>Discover</h1>
              </div>
              </NavLink>

              <NavLink to='/notification' style={{textDecoration:'none',color:'black',borderBottom:'none'}}>
              <div className='groupSidebarBottom__option'>
                <NotificationsRoundedIcon/>
                 <h1>Notifications</h1>
              </div>
              </NavLink>

              <button>+ Create New Group</button>

            </div>

            <div className='groupSidebarBottom__bottom'>
                 <h1>Groups You've Joined</h1>
              <div className='groupSidebarBottombottom__option'>
                 <img alt='' src='https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-128.png'/>
                 <div className='groupSidebarBottombottomOption__row'>
                   <h1 style={{fontSize:15,fontWeight:600}}>React Native</h1>
                   <h1 style={{fontSize:14,fontWeight:400}}>1 post for you</h1>
                </div>
              </div>

              <div className='groupSidebarBottombottom__option'>
                 <img alt='' src='https://cdn0.iconfinder.com/data/icons/logos-brands-in-colors/128/react-128.png'/>
                 <div className='groupSidebarBottombottomOption__row'>
                   <h1 style={{fontSize:15,fontWeight:600}}>ReactJs</h1>
                   <h1 style={{fontSize:14,fontWeight:400}}>1 post for you</h1>
                </div>
              </div>

              <div className='groupSidebarBottombottom__option'>
                 <img alt='' src='https://i.ytimg.com/vi/Do0RFjL-mM8/maxresdefault.jpg'/>
                 <div className='groupSidebarBottombottomOption__row'>
                   <h1 style={{fontSize:15,fontWeight:600}}>Flutter</h1>
                   <h1 style={{fontSize:14,fontWeight:400}}>1 post for you</h1>
                </div>
              </div>

              <div className='groupSidebarBottombottom__option'>
                 <img alt='' src='https://miro.medium.com/max/805/0*m1VOQP0FtcQufLgw.png'/>
                 <div className='groupSidebarBottombottomOption__row'>
                   <h1 style={{fontSize:15,fontWeight:600}}>ExpressJs</h1>
                   <h1 style={{fontSize:14,fontWeight:400}}>1 post for you</h1>
                </div>
              </div>

              <div className='groupSidebarBottombottom__option'>
                 <img alt='' src='https://www.tristatetechnology.com/tristate-website/blog/wp-content/uploads/2017/09/Why-AngularJS-A1.jpg'/>
                 <div className='groupSidebarBottombottomOption__row'>
                   <h1 style={{fontSize:15,fontWeight:600}}>AngularJs</h1>
                   <h1 style={{fontSize:14,fontWeight:400}}>1 post for you</h1>
                </div>
              </div>

              <div className='groupSidebarBottombottom__option'>
                 <img alt='' src='https://www.espai.es/blog/wp-content/uploads/2018/06/vue.jpg'/>
                 <div className='groupSidebarBottombottomOption__row'>
                   <h1 style={{fontSize:15,fontWeight:600}}>VueJs</h1>
                   <h1 style={{fontSize:14,fontWeight:400}}>1 post for you</h1>
                </div>
              </div>

              <div className='groupSidebarBottombottom__option'>
                 <img alt='' src='https://s3.amazonaws.com/cms-assets.tutsplus.com/uploads/users/392/profiles/19999/profileImage/envato-logo-blue-black.png'/>
                 <div className='groupSidebarBottombottomOption__row'>
                   <h1 style={{fontSize:15,fontWeight:600}}>Envato</h1>
                   <h1 style={{fontSize:14,fontWeight:400}}>1 post for you</h1>
                </div>
              </div>

              <div className='groupSidebarBottombottom__option'>
                 <img alt='' src='https://html5hive.org/wp-content/uploads/2014/06/js_800x800.jpg'/>
                 <div className='groupSidebarBottombottomOption__row'>
                   <h1 style={{fontSize:15,fontWeight:600}}>Javascript</h1>
                   <h1 style={{fontSize:14,fontWeight:400}}>1 post for you</h1>
                </div>
              </div>

              <div className='groupSidebarBottombottom__option'>
                 <img alt='' src='https://pbs.twimg.com/profile_images/1163911054788833282/AcA2LnWL_400x400.jpg'/>
                 <div className='groupSidebarBottombottomOption__row'>
                   <h1 style={{fontSize:15,fontWeight:600}}>Laravel</h1>
                   <h1 style={{fontSize:14,fontWeight:400}}>1 post for you</h1>
                </div>
              </div>

            </div>
            
          </div>
       
          <Switch>
            
            <Route exact path='/feedhome'>
              <div className='group__feed'>
                <GroupFeed/>  
              </div> 
            </Route>

            <Route exact path='/notification'>
              <Notification/>
            </Route>

            <Route exact path='/discover'>
              <Discover/>
            </Route>

          </Switch>
          </BrowserRouter>  
        </div>
    );
};

export default Group;