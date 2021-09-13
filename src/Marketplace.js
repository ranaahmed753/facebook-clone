import React from 'react';
import './Marketplace.css';
import SettingsIcon from '@material-ui/icons/Settings';
import SearchIcon from '@material-ui/icons/Search';
import { IconButton } from '@material-ui/core';
import StorefrontOutlinedIcon from '@material-ui/icons/StorefrontOutlined';
import NotificationsRoundedIcon from '@material-ui/icons/NotificationsRounded';
import MoveToInboxOutlinedIcon from '@material-ui/icons/MoveToInboxOutlined';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PersonIcon from '@material-ui/icons/Person';
import DriveEtaOutlinedIcon from '@material-ui/icons/DriveEtaOutlined';
import FavoriteOutlinedIcon from '@material-ui/icons/FavoriteOutlined';
import SmartphoneIcon from '@material-ui/icons/Smartphone';
import HomeWorkRoundedIcon from '@material-ui/icons/HomeWorkRounded';
import SportsBasketballIcon from '@material-ui/icons/SportsBasketball';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import GroupOutlinedIcon from '@material-ui/icons/GroupOutlined';
import CloudIcon from '@material-ui/icons/Cloud';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import MarketplaceFeed from './MarketplaceFeed';

const Marketplace = () => {
    return (
        <div className='marketplace'>
           
           <div className='marketplace__sidebar'>
           <div className='marketplaceSidebar__top'>
               <div className='marketplaceSidebarTop__option'>
                    <h1 style={{fontSize:22}}>Marketplace</h1>
                    <IconButton style={{cursor:'pointer',marginLeft:'auto'}}>
                    <SettingsIcon />
                    </IconButton>
                    
               </div>
               <div className='inputSearch'>
                    <SearchIcon/>
                    <input placeholder='Search Marketplace'/>
               </div>
           </div>

           <div className='marketplaceSidebar__bottom'>
             <div className='marketplaceSidebarBottom__option'>
                 <StorefrontOutlinedIcon/>
                 <h1>Browse All</h1>
             </div>
             <div className='marketplaceSidebarBottom__option'>
                 <NotificationsRoundedIcon/>
                 <h1>Notifications</h1>
             </div>
             <div className='marketplaceSidebarBottom__option'>
                 <MoveToInboxOutlinedIcon/>
                 <h1>Inbox</h1>
             </div>
             <div className='marketplaceSidebarBottom__option'>
                 <ShoppingCartIcon/>
                 <h1>Cart</h1>
             </div>
             <div className='marketplaceSidebarBottom__option'>
                 <PersonIcon/>
                 <h1>Your Account</h1>
             </div>
             <button>+ Create New Listing</button>
           </div>

             <div className='marketplaceSidebarBottom__middle'>
               <h1>Filters</h1>
               <p>Rajshahi.Within 60 kilometers</p>
             </div>

             <div className='marketplaceSidebarBottom__bottom'>
                 <h1>Categories</h1>
                 <div className='marketplaceSidebarBottombottom__option'>
                     <DriveEtaOutlinedIcon/>
                     <h1>Vehicles</h1>
                 </div>
                 <div className='marketplaceSidebarBottombottom__option'>
                     <FavoriteOutlinedIcon/>
                     <h1>Family</h1>
                 </div>
                 <div className='marketplaceSidebarBottombottom__option'>
                     <SmartphoneIcon/>
                     <h1>Electronics</h1>
                 </div>
                 <div className='marketplaceSidebarBottombottom__option'>
                     <HomeWorkRoundedIcon/>
                     <h1>Home Goods</h1>
                 </div>
                 <div className='marketplaceSidebarBottombottom__option'>
                     <SportsBasketballIcon/>
                     <h1>Sporting Goods</h1>
                 </div>
                 <div className='marketplaceSidebarBottombottom__option'>
                     <SportsEsportsIcon/>
                     <h1>Toy & Games</h1>
                 </div>
                 <div className='marketplaceSidebarBottombottom__option'>
                     <LocalOfferIcon/>
                     <h1>Office Supplies</h1>
                 </div>
                 <div className='marketplaceSidebarBottombottom__option'>
                     <GroupOutlinedIcon/>
                     <h1>Groups</h1>
                 </div>
                 <div className='marketplaceSidebarBottombottom__option'>
                     <CloudIcon/>
                     <h1>Pet Supplies</h1>
                 </div>
                 <div className='marketplaceSidebarBottombottom__option'>
                     <HomeRoundedIcon/>
                     <h1>Home Supplies</h1>
                 </div>

             </div>

           </div>

           <div className='marketplace__feed'>
               <MarketplaceFeed/>
           </div>
        </div>
    );
};

export default Marketplace;