import { Avatar } from '@material-ui/core';
import React from 'react';
import './Notification.css';

const Notification = () => {
    return (
        <div className='notification'>
            <h1>Earlier</h1>
            <div className='notification__options'>
                 <Avatar/>
                 <div className='notification__option'>
                     <h1>Clever Programmer posted on React-Native</h1>
                     <h2>5 hours ago</h2>
                 </div> 
            </div>

            <div className='notification__options'>
                 <Avatar/>
                 <div className='notification__option'>
                     <h1>Clever Programmer posted on React-Native</h1>
                     <h2>5 hours ago</h2>
                 </div> 
            </div>

            <div className='notification__options'>
                 <Avatar/>
                 <div className='notification__option'>
                     <h1>Clever Programmer posted on React-Native</h1>
                     <h2>5 hours ago</h2>
                 </div> 
            </div>

            <div className='notification__options'>
                 <Avatar/>
                 <div className='notification__option'>
                     <h1>Clever Programmer posted on React-Native</h1>
                     <h2>5 hours ago</h2>
                 </div> 
            </div>

            <div className='notification__options'>
                 <Avatar/>
                 <div className='notification__option'>
                     <h1>Clever Programmer posted on React-Native</h1>
                     <h2>5 hours ago</h2>
                 </div> 
            </div>

            <div className='notification__options'>
                 <Avatar/>
                 <div className='notification__option'>
                     <h1>Clever Programmer posted on React-Native</h1>
                     <h2>5 hours ago</h2>
                 </div> 
            </div>

        </div>
    );
};

export default Notification;