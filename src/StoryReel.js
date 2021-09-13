import React from 'react';
import './StoryReel.css';
import Story from './Story';

const StoryReel = () => {
    return (
        <div className='storyReel'>
            <Story
             image='https://cdn.pixabay.com/photo/2013/08/20/15/47/poppies-174276__340.jpg'
             profileSrc='https://pbs.twimg.com/profile_images/1339192504382590976/2WxMn8cm_400x400.jpg'
             title='Ruckus Marketing'
            />
             <Story
             image='https://www.fonewalls.com/wp-content/uploads/1440x2560-Background-HD-Wallpaper-525.jpg'
             profileSrc='https://avatars.githubusercontent.com/u/8461930?s=460&v=4'
             title='Lounge Lizard'
            />
             <Story
             image='https://images.iphonephotographyschool.com/22682/How-To-Blur-Background-On-iPhone.jpg'
             profileSrc='https://upload.wikimedia.org/wikipedia/commons/e/e3/Frankie_Muniz_%2817179359213%29.jpg'
             title='SPINX Digital'
            />
             <Story
             image='https://wallpapercave.com/wp/wp2462597.jpg'
             profileSrc='https://yt3.ggpht.com/ytc/AAUvwngdO3lIU3to9v76rEXmivAYRbwEx4w8g3LeljG6qQ=s900-c-k-c0x00ffffff-no-rj'
             title='Media Proper'
            />
             <Story
             image='https://i.pinimg.com/564x/97/44/fe/9744fe02ccaff84cea80276ae3830f31.jpg'
             profileSrc='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6ox1crSW1L5wF0ubly_whPKoDFG74z-t1yeQbydqIDWgV1MgXngZoXlWXDdgmlDheNfA&usqp=CAU'
             title='Bonsai Media'
            />
            
        </div>
    );
};

export default StoryReel;