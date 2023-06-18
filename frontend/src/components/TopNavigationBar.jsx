import React from 'react';

import '../styles/TopNavigationBar.scss'
import TopicList from './TopicList';
import FavBadge from './FavBadge';
import topics from '../mocks/topics'

const TopNavigationBar = (props) => {
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <div className="top-nav-bar__right">
        <TopicList topics = {topics}/>
        <FavBadge isFavPhotoExist = {props.likedIds.length !== 0}/>
      </div>
    </div>
  )
}

export default TopNavigationBar;