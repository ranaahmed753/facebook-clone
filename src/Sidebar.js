import React from 'react';
import './Sidebar.css';
import SidebarRow from './SidebarRow';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import PeopleIcon from '@material-ui/icons/People';
import ChatIcon from '@material-ui/icons/Chat';
import StorefrontIcon from '@material-ui/icons/Storefront';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import SupervisedUserCircleOutlinedIcon from '@material-ui/icons/SupervisedUserCircleOutlined';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,NavLink
  } from "react-router-dom";

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <SidebarRow src='https://miro.medium.com/max/14285/1*5TRuG7tG0KrZJXKoFtHlSg.jpeg' title='Coding Hero'/>
            <SidebarRow Icon={LocalHospitalIcon} title='COVID-19 information center'/>
            <SidebarRow Icon={EmojiFlagsIcon} title='Pages'/>
            <NavLink to='/friend' style={{textDecoration:'none',color:'black'}}><SidebarRow Icon={PeopleIcon} title='Friends'/></NavLink>
            <SidebarRow Icon={ChatIcon} title='Messenger'/>
           <NavLink to='/marketplace' style={{textDecoration:'none',color:'black'}}><SidebarRow Icon={StorefrontIcon} title='Marketplace'/></NavLink>
           <NavLink to='/video' style={{textDecoration:'none',color:'black'}}><SidebarRow Icon={VideoLibraryIcon} title='Videos'/></NavLink>
           <NavLink to='/group' style={{textDecoration:'none',color:'black'}}><SidebarRow Icon={SupervisedUserCircleOutlinedIcon} title='Group'/></NavLink>
            <SidebarRow Icon={ExpandMoreIcon} title='See More'/>
            <div className='sidebar__bottom'>
                <h1>Your Shortcuts</h1>
                <div className='sidebarBottom__option'>
                    <img src='https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-128.png'/>
                    <h1>React Native</h1>
                </div>

                <div className='sidebarBottom__option'>
                    <img src='https://cdn.pixabay.com/photo/2015/04/23/17/41/javascript-736400_960_720.png'/>
                    <h1>Javascript</h1>
                </div>

                <div className='sidebarBottom__option'>
                    <img src='https://hackernoon.com/images/z2xg2bpo.jpg'/>
                    <h1>ReactJs</h1>
                </div>

                <div className='sidebarBottom__option'>
                    <img src='https://seeklogo.com/images/F/firebase-logo-402F407EE0-seeklogo.com.png'/>
                    <h1>Firebase</h1>
                </div>

                <div className='sidebarBottom__option'>
                    <img src='https://seeklogo.com/images/F/flutter-logo-5086DD11C5-seeklogo.com.png'/>
                    <h1>Flutter</h1>
                </div>
                
            </div>
        </div>
    );
};

export default Sidebar;