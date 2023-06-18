
import React from 'react';

import '../styles/PhotoListItem.scss';
import PhotoFavButton from './PhotoFavButton';


const PhotoListItem = (props) => {
  const modalInput = {
    "id" : props.id,
    "fullUrl" : props.urls.full,
    "liked" : props.liked,
    "toggleFav" : props.toggleFav
  }

  return (
    <div className = 'photo-list__item'>
      <PhotoFavButton
        id = {props.id}
        liked = {props.liked}
        toggleFav = {props.toggleFav}
      />
      <img className = "photo-list__image" src={props.urls.regular} onClick={() => {props.toggleModal(modalInput)}}></img>
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