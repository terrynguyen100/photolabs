import {React, useState} from 'react';
import PhotoList from './PhotoList';
import TopNavigationBar from './TopNavigationBar';
import photos from '../mocks/photos';
import '../styles/HomeRoute.scss';
import { ProgressPlugin } from 'webpack';

const HomeRoute = (props) => {
  //temporarily set up the liked Ids as 1
  const [likedIds, setLikedIds] = useState(["1"]);

  const toggleFav = (id) => {
    const newLikedIds = likedIds.includes(id) ? likedIds.filter((item) => item !== id) : [...likedIds, id];
    setLikedIds(newLikedIds);
    console.log(newLikedIds);
  };

  return (
  <div className="home-route">
    <TopNavigationBar
      likedIds = {likedIds} 
    />
    <PhotoList 
      photos = {photos} 
      likedIds = {likedIds} 
      toggleFav = {toggleFav}

      openModal = {props.openModal}
    />
  </div>
  )
}

export default HomeRoute