import React from 'react';
import './MarketplaceFeed.css';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import FeedCard from './FeedCard';

const MarketplaceFeed = () => {
    return (
        <div className='marketplace__feed'>
            <div className='marketplaceFeed__top'>
                <h1 style={{color:'white',fontSize:22,fontWeight:700}}>COVID-19:Buyers and Sellers</h1>
                <h1 style={{color:'white',fontSize:18,fontWeight:400}}>Please follow local guidelines about physical distancing and staying home</h1>
                <button>Learn More</button>
            </div>

            <div className='marketplaceFeed__middle'>
                <h1>Today's Picks for You</h1>
                <div className='marketplaceFeed__option'>
                    <LocationOnIcon/>
                    <h1>Rajshahi.60km</h1>
                </div>
            </div>

            <div className='marketplaceFeed__bottom'>
                <div className='marketplacceFeedBottom__option'>
                  <FeedCard 
                     src='https://www.drivespark.com/bikes-photos/models/400x230/bajaj-pulsar-125_1565178353.jpg/3/' 
                     price='1000$'
                     location='pabna,bangladesh'
                  />
                  <FeedCard 
                     src='https://media.zigcdn.com/media/model/2020/Feb/mt-15-bs6_360x240.jpg' 
                     price='3000$'
                     location='rajshahi,bangladesh'
                    />
                 <FeedCard 
                    src='https://www.heromotocorp.com/en-in/uploads/bike/bike_pic_main/20191107074502-bike-273.png'
                    price='1020$'
                    location='natore,bangladesh'
                  />
                  <FeedCard 
                     src='https://imgd.aeplcdn.com/310x174/bw/models/suzuki-v-strom-250.jpg?20190103151915&q=75' 
                     price='2000$'
                     location='bogra,bangladesh'
                 />
                </div>

                <div className='marketplacceFeedBottom__option'>
                  <FeedCard 
                     src='https://media.zigcdn.com/media/model/2020/Apr/rtr-160-bs6_360x240.jpg' 
                     price='1020$'
                     location='shylhet,bangladesh'
                 />
                  <FeedCard 
                     src='https://media.zigcdn.com/media/model/2020/Apr/tvs-apache-rtr-160-4v-new-right-side-view_360x240.jpg' 
                     price='1080$'
                     location='khulna,bangladesh'
                 />
                 <FeedCard 
                     src='https://www.motorcyclespecifications.com/wp-content/uploads/2019/03/Kawasaki-Ninja-250RR-Mono-14.jpg' 
                     price='5000$'
                     location='comilla,bangladesh'
                 />
                  <FeedCard 
                    src='https://www.drivespark.com/bikes-photos/models/450x350/xtreme-200s_1557153269.jpg/3/x.pagespeed.ic.VfWD98jR1z.jpg' 
                    price='3000$'
                    location='pabna,bangladesh'
                />
                </div>

                <div className='marketplacceFeedBottom__option'>
                  <FeedCard 
                     src='https://media.zigcdn.com/media/model/2020/Apr/rtr-160-bs6_360x240.jpg' 
                     price='1020$'
                     location='shylhet,bangladesh'
                 />
                  <FeedCard 
                     src='https://media.zigcdn.com/media/model/2020/Apr/tvs-apache-rtr-160-4v-new-right-side-view_360x240.jpg' 
                     price='1080$'
                     location='khulna,bangladesh'
                 />
                 <FeedCard 
                     src='https://www.motorcyclespecifications.com/wp-content/uploads/2019/03/Kawasaki-Ninja-250RR-Mono-14.jpg' 
                     price='5000$'
                     location='comilla,bangladesh'
                 />
                  <FeedCard 
                    src='https://www.drivespark.com/bikes-photos/models/450x350/xtreme-200s_1557153269.jpg/3/x.pagespeed.ic.VfWD98jR1z.jpg' 
                    price='3000$'
                    location='pabna,bangladesh'
                />
                </div>
                
                <div className='marketplacceFeedBottom__option'>
                  <FeedCard 
                     src='https://media.zigcdn.com/media/model/2020/Apr/rtr-160-bs6_360x240.jpg' 
                     price='1020$'
                     location='shylhet,bangladesh'
                 />
                  <FeedCard 
                     src='https://media.zigcdn.com/media/model/2020/Apr/tvs-apache-rtr-160-4v-new-right-side-view_360x240.jpg' 
                     price='1080$'
                     location='khulna,bangladesh'
                 />
                 <FeedCard 
                     src='https://www.motorcyclespecifications.com/wp-content/uploads/2019/03/Kawasaki-Ninja-250RR-Mono-14.jpg' 
                     price='5000$'
                     location='comilla,bangladesh'
                 />
                  <FeedCard 
                    src='https://www.drivespark.com/bikes-photos/models/450x350/xtreme-200s_1557153269.jpg/3/x.pagespeed.ic.VfWD98jR1z.jpg' 
                    price='3000$'
                    location='pabna,bangladesh'
                />
                </div>
                

                
                
            </div>
            
            
        </div>
    );
};

export default MarketplaceFeed;