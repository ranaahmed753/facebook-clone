import React,{useState} from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import FlagOutlinedIcon from '@material-ui/icons/FlagOutlined';
import PeopleAltRoundedIcon from '@material-ui/icons/PeopleAltRounded';
import StorefrontOutlinedIcon from '@material-ui/icons/StorefrontOutlined';
import OndemandVideoOutlinedIcon from '@material-ui/icons/OndemandVideoOutlined';
import SupervisedUserCircleOutlinedIcon from '@material-ui/icons/SupervisedUserCircleOutlined';
import AddIcon from '@material-ui/icons/Add';
import ForumIcon from '@material-ui/icons/Forum';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Avatar, IconButton } from '@material-ui/core';
import Popup from './Popup';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,NavLink
  } from "react-router-dom";

const Header = () => {
    const [open,setOpen] = useState(false);
    const route = [
        {
            routeTo : '/',
            routeIcon : <HomeOutlinedIcon style={{fontSize:35}}/>
        },
        {
            routeTo : '/video',
            routeIcon : <OndemandVideoOutlinedIcon style={{fontSize:35}}/>
        },
        {
            routeTo : '/friend',
            routeIcon : <PeopleAltRoundedIcon style={{fontSize:35}}/>
        },
        {
            routeTo : '/marketplace',
            routeIcon : <StorefrontOutlinedIcon style={{fontSize:35}}/>
        },
        {
            routeTo : '/group',
            routeIcon : <SupervisedUserCircleOutlinedIcon style={{fontSize:35}}/>
        },
       
    ]
    return (
        <div className='header'>
          <div className='header__left'>
             <img src='https://image.flaticon.com/icons/png/128/145/145802.png' alt=''/>
             <div className='header__input'>
                 <SearchIcon/>
                 <input type='text' placeholder='search facebook'/>
             </div>
          </div>
          <div className='header__center'>

              {
                  route.map( routes => (
                    <div className='header__option'>
                        <NavLink exact activeClassName='active' activeStyle={{color:'#2e81f4'}} style={{color:'gray'}} to={routes.routeTo}>
                        {routes.routeIcon}
                        </NavLink>   
                    </div>
                  ))
              }
             
              
          </div>
          <div className='header__right'>
              <div className='header__info'>
                  <Avatar src='https://miro.medium.com/max/14285/1*5TRuG7tG0KrZJXKoFtHlSg.jpeg' style={{cursor:'pointer'}} onClick={()=> setOpen(true)}/>
                  <h4>codinghero</h4>
              </div>
              <IconButton>
                  <AddIcon/>
              </IconButton>
              <IconButton>
                  <ForumIcon/>
              </IconButton>
              <IconButton>
                  <NotificationsActiveIcon/>
              </IconButton>
              <IconButton onClick={()=> setOpen(true)}>
                  <ExpandMoreIcon/>
              </IconButton>
          </div>
          <Popup 
          open={open} 
          onClose={()=> setOpen(false)} 
          onOpen={()=> setOpen(true)}
          /> 
        </div>
    );
};

export default Header;