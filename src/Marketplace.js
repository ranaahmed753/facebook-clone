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
    const catagory = [
        {
            catagoryName : 'Vehicles',
            catagoryIcon : <DriveEtaOutlinedIcon/>
        },
        {
            catagoryName : 'Family',
            catagoryIcon : <FavoriteOutlinedIcon/>
        },
        {
            catagoryName : 'Electronics',
            catagoryIcon : <SmartphoneIcon/>
        },
        {
            catagoryName : 'Home Goods',
            catagoryIcon : <HomeWorkRoundedIcon/>
        },
        {
            catagoryName : 'Sporting Goods',
            catagoryIcon : <SportsBasketballIcon/>
        },
        {
            catagoryName : 'Toy & Games',
            catagoryIcon : <SportsEsportsIcon/>
        },
        {
            catagoryName : 'Office Supplies',
            catagoryIcon : <LocalOfferIcon/>
        },
        {
            catagoryName : 'Groups',
            catagoryIcon : <GroupOutlinedIcon/>
        },
        {
            catagoryName : 'Pet Supplies',
            catagoryIcon : <CloudIcon/>
        },
        {
            catagoryName : 'Home Supplies',
            catagoryIcon : <HomeRoundedIcon/>
        },
    ]
    const marketplace = [
        {
            marketplaceName : 'Browse All',
            marketplaceIcon : <StorefrontOutlinedIcon/>
        },
        {
            marketplaceName : 'Notifications',
            marketplaceIcon : <NotificationsRoundedIcon/>
        },
        {
            marketplaceName : 'Inbox',
            marketplaceIcon : <MoveToInboxOutlinedIcon/>
        },
        {
            marketplaceName : 'Cart',
            marketplaceIcon : <ShoppingCartIcon/>
        },
        {
            marketplaceName : 'Your Account',
            marketplaceIcon : <PersonIcon/>
        },
    ]
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
               {
                   marketplace.map( marketplaces => (
                        <div className='marketplaceSidebarBottom__option'>
                            {marketplaces.marketplaceIcon}
                            <h1>{marketplaces.marketplaceName}</h1>
                        </div>
                   ))
               }
             
             <button>+ Create New Listing</button>
           </div>

             <div className='marketplaceSidebarBottom__middle'>
               <h1>Filters</h1>
               <p>Rajshahi.Within 60 kilometers</p>
             </div>

             <div className='marketplaceSidebarBottom__bottom'>
                 <h1>Categories</h1>
                 {
                     catagory.map( catagories => (
                        <div className='marketplaceSidebarBottombottom__option'>
                            {catagories.catagoryIcon}
                            <h1>{catagories.catagoryName}</h1>
                        </div>
                     ))
                 }
                 

             </div>

           </div>

           <div className='marketplace__feed'>
               <MarketplaceFeed/>
           </div>
        </div>
    );
};

export default Marketplace;