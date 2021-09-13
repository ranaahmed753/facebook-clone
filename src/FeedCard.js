import React from 'react';
import './FeedCard.css';

const FeedCard = ({src,price,location}) => {
    return (
        <div className='feed__card'>
            <div className='image__card'>
             <img src={src}/>
            </div>
            <h1 style={{fontSize:13,fontWeight:500}}>{price}</h1>
            <h1 style={{fontSize:13,fontWeight:500}}>Bike</h1>
            <h1 style={{fontSize:13,fontWeight:500}}>{location}</h1>
        </div>
    );
};

export default FeedCard;