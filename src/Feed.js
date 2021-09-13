import React from 'react';
import './Feed.css';
import StoryReel from './StoryReel';
import MessegeSender from './MessegeSender';
import Post from './Post';

const Feed = () => {
    const person = [
        {
            profilePic:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOE7OFJ1ycvc8pzS3YwByeW0Ot30PYO_grWQ&usqp=CAU',
            message:'o start with I thought I’d share the posts that have been most popular on Travelsewhere',
            timestamp:'5:10pm 3/13/2021',
            username:'Sonny Sangha',
            image:''
        },
        {
            profilePic:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOE7OFJ1ycvc8pzS3YwByeW0Ot30PYO_grWQ&usqp=CAU',
            message:'o start with I thought I’d share the posts that have been most popular on Travelsewhere',
            timestamp:'5:10pm 3/13/2021',
            username:'Sonny Sangha',
            image:''
        },
        {
            profilePic:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOE7OFJ1ycvc8pzS3YwByeW0Ot30PYO_grWQ&usqp=CAU',
            message:'o start with I thought I’d share the posts that have been most popular on Travelsewhere',
            timestamp:'5:10pm 3/13/2021',
            username:'Sonny Sangha',
            image:''
        },
        {
            profilePic:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOE7OFJ1ycvc8pzS3YwByeW0Ot30PYO_grWQ&usqp=CAU',
            message:'o start with I thought I’d share the posts that have been most popular on Travelsewhere',
            timestamp:'5:10pm 3/13/2021',
            username:'Sonny Sangha',
            image:''
        },
        {
            profilePic:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOE7OFJ1ycvc8pzS3YwByeW0Ot30PYO_grWQ&usqp=CAU',
            message:'o start with I thought I’d share the posts that have been most popular on Travelsewhere',
            timestamp:'5:10pm 3/13/2021',
            username:'Sonny Sangha',
            image:''
        },
        {
            profilePic:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOE7OFJ1ycvc8pzS3YwByeW0Ot30PYO_grWQ&usqp=CAU',
            message:'o start with I thought I’d share the posts that have been most popular on Travelsewhere',
            timestamp:'5:10pm 3/13/2021',
            username:'Sonny Sangha',
            image:''
        },
        {
            profilePic:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOE7OFJ1ycvc8pzS3YwByeW0Ot30PYO_grWQ&usqp=CAU',
            message:'o start with I thought I’d share the posts that have been most popular on Travelsewhere',
            timestamp:'5:10pm 3/13/2021',
            username:'Sonny Sangha',
            image:''
        },
        {
            profilePic:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOE7OFJ1ycvc8pzS3YwByeW0Ot30PYO_grWQ&usqp=CAU',
            message:'o start with I thought I’d share the posts that have been most popular on Travelsewhere',
            timestamp:'5:10pm 3/13/2021',
            username:'Sonny Sangha',
            image:''
        },
    ]
    return (
        <div className='feed'>
           <StoryReel/>
           <MessegeSender/>
           {
               person.map((persons)=> {
                   return <Post profilePic={persons.profilePic} message={persons.message} timestamp={persons.timestamp} username={persons.username} image={persons.image}/>
               })
           }
           
        </div>
    );
};

export default Feed;