
import React from 'react';

import '../styles/PhotoListItem.scss';
import PhotoFavButton from './PhotoFavButton';


const PhotoListItem = (props) => {


  return (
    <div className = 'photo-list__item'>
      <PhotoFavButton
        id = {props.id}
        liked = {props.liked}
        toggleFav = {props.toggleFav}
      />
      <img className = "photo-list__image" src={props.imageSource}></img>
    </div>
  )
}

PhotoListItem.defaultProps = {
  "id": "1",
  "location": {
    "city": "Montreal",
    "country": "Canada"
  },
  "imageSource": `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
  "username": "Joe Example",
  "profile": `${process.env.PUBLIC_URL}/profile-1.jpg`
}

export default PhotoListItem