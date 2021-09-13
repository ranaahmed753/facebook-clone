import React, { useContext, useState } from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Widgets from './Widgets';
import Video from './Video';
import Friend from './Friend';
import Group from './Group';
import Marketplace from './Marketplace';
import Inbox from './Inbox';
import {WidgetContext} from './Widgets';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,NavLink, BrowserRouter
} from "react-router-dom";

const App = () => {
  const [open,setOpen] = useState(false);

  const person = [
    {
      name:'William',
      image:'https://nypost.com/wp-content/uploads/sites/2/2017/08/boys.jpg?quality=80&strip=all&w=618&h=410&crop=1'
    },
    {
      name:'Â Elijah',
      image:'https://static.toiimg.com/thumb/msid-69591643,width-1200,height-900,resizemode-4/.jpg'
    },
    {
      name:'James',
      image:'https://static.toiimg.com/thumb/msid-69591643,width-1200,height-900,resizemode-4/.jpg'
    },
    {
      name:'Â Benjamin',
      image:'https://media.istockphoto.com/photos/little-asian-boy-picture-id497000834?k=6&m=497000834&s=612x612&w=0&h=CLdnZwoo_G4oUH0_KPLBAEeiXlUmY9c06PPD4wVcznk='
    },
    {
      name:'Lucas',
      image:'https://st2.depositphotos.com/1010683/8939/i/950/depositphotos_89390622-stock-photo-cute-asian-little-boy.jpg'
    },
    {
      name:'Mason',
      image:'https://www.nydailynews.com/resizer/sTIHkKTQBbYlni688aJ2UbTici8=/415x276/top/arc-anglerfish-arc2-prod-tronc.s3.amazonaws.com/public/2HEIJTINHFDITPS7GL7OHQZAKY.jpg'
    },
    {
      name:'Ethan',
      image:'https://st3.depositphotos.com/5728612/13394/i/1600/depositphotos_133947570-stock-photo-the-older-brother-played-with.jpg'
    },
    {
      name:'Alexander',
      image:'https://c0.wallpaperflare.com/preview/196/465/299/fashion-style-boys-fashion-pose.jpg'
    },
    {
      name:'Henry',
      image:'https://cdn.pixabay.com/photo/2018/08/18/09/51/fashion-3614477_960_720.jpg'
    },
    {
      name:'Jackson',
      image:'https://cdn.pixabay.com/photo/2017/07/31/22/47/fashion-2561768_1280.jpg'
    },
    {
      name:'Sebastian',
      image:'https://netstorage-legit.akamaized.net/images/bd00d9358adfe705.jpg'
    },
    {
      name:'Matthew',
      image:'https://18ogess18pg1ptgub1nm316t-wpengine.netdna-ssl.com/wp-content/uploads/2020/08/22489954_web1_200821-CPL-BoyKilledbyTreeIdentified_1.jpg'
    },
    {
      name:'Joseph',
      image:'https://images.unsplash.com/photo-1604695753685-20e756f4aa61?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1000&q=80'
    }
  ]
  
  
  return (
    <div className='app'>
      <BrowserRouter>
        <Header/>
        <Switch>
          <Route exact path='/'>
            <div className='app__body'>
              <Sidebar/>
              <Feed/>
              
            <div className='app__widgets'>

              {
                person.map((persons)=> {
                  return (
                  <Widgets name={persons.name} personImage={persons.image} onResponse={()=> setOpen(true)}/>
                  
                  )
                  
                })
                
              }

            </div>
               <Inbox open={open} onClose={()=> setOpen(false)} onOpen={()=> setOpen(true)}/>
            </div>
          </Route>

          <Route exact path='/video'>
            <Video/>
          </Route>

          <Route exact path='/friend'>
            <Friend/>
          </Route>

          <Route exact path='/marketplace'>
            <Marketplace/>
          </Route>
          <Route exact path='/group'>
            <Group/>
          </Route>
        </Switch>
      </BrowserRouter>

      
      
    </div>
  );
};

export default App;