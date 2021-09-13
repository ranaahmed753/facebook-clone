import { Avatar } from '@material-ui/core';
import React, { useState } from 'react';
import './Widgets.css';
import Inbox from './Inbox';


const Widgets = ({name,personImage,onResponse}) => {
   
    return (
        
     <div className='widgets' onClick={onResponse}>
        <Avatar src={personImage}/>
         <h4>{name}</h4>
     </div>  
     
       
    ) 
};

export default Widgets;