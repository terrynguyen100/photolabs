import {React, useState} from 'react';
import PhotoList from './PhotoList';
import TopNavigationBar from './TopNavigationBar';
import photos from '../mocks/photos';
import '../styles/HomeRoute.scss';

const HomeRoute = (props) => {
  

  return (
  <div className="home-route">
    <TopNavigationBar
      likedIds = {props.likedIds} 
    />
    <PhotoList 
      photos = {photos} 
      likedIds = {props.likedIds} 
      toggleFav = {props.toggleFav}

      toggleModal = {props.toggleModal}
    />
  </div>
  )
}

export default HomeRoute