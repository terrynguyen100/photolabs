import {React, useState} from 'react';
import PhotoList from './PhotoList';
import TopNavigationBar from './TopNavigationBar';
import '../styles/HomeRoute.scss';

const HomeRoute = (props) => {
  

  return (
  <div className="home-route">
    <TopNavigationBar
      topics = {props.topics}
      likedIds = {props.likedIds} 
    />
    <PhotoList 
      photos = {props.photos} 
      likedIds = {props.likedIds} 
      toggleFav = {props.toggleFav}

      toggleModal = {props.toggleModal}
    />
  </div>
  )
}

export default HomeRoute