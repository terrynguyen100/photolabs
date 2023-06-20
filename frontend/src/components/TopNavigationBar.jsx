import React from 'react';

import '../styles/TopNavigationBar.scss'
import TopicList from './TopicList';
import FavBadge from './FavBadge';


const TopNavigationBar = (props) => {
  return (
    <div className="top-nav-bar">
      <div className="top-nav-bar__logo" onClick={() => {props.setPhotosEndPoint('/api/photos')}}>PhotoLabs</div>
      <div className="top-nav-bar__right">
        <TopicList 
          topics = {props.topics}
          setPhotosEndPoint = {props.setPhotosEndPoint}
        />
        <FavBadge 
          likedIds = {props.likedIds}
        />
      </div>
    </div>
  )
}

export default TopNavigationBar;