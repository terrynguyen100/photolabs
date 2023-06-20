import React from 'react';
import '../styles/PhotoList.scss';
import PhotoListItem from './PhotoListItem';

const PhotoList = (props) => {
  const mappedPhotoList = props.photos.map((photo) => {
    return (
        <PhotoListItem 
          key = {photo.id}  
          id = {photo.id}
          location = {photo.location}
          urls = {photo.urls}
          user = {photo.user}
          similar_photos = {photo.similar_photos}
          // array LikedId is splitted here to individual liked (boolean)
          liked = {props.likedIds.includes(photo.id)}
          toggleFav = {props.toggleFav}
          //for modalality
          toggleModal = {props.toggleModal}
        />
    )
  });

  return ( 
    <ul className="photo-list">
      {mappedPhotoList}
    </ul>
  )
}

PhotoList.defaultProps = {
  photos: [
    {
      "id": "1",
      "location": {
        "city": "Montreal",
        "country": "Canada"
      },
      "urls": {
        "full": `${process.env.PUBLIC_URL}/Image-1-Full.jpeg`,
        "regular": `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`
      },
      "user": {
        "id": "1",
        "username": "exampleuser",
        "name": "Joe Example",
        "profile": `${process.env.PUBLIC_URL}/profile-1.jpg`
      }
    },
    {
      "id": "2",
      "location": {
        "city": "Toronto",
        "country": "Canada"
      },
      "urls": {
        "full": `${process.env.PUBLIC_URL}/Image-2-Full.jpeg`,
        "regular": `${process.env.PUBLIC_URL}/Image-2-Regular.jpeg`
      },
      "user": {
        "id": "2",
        "username": "exampleuser",
        "name": "Joe Example",
        "profile": `${process.env.PUBLIC_URL}/profile-1.jpg`
      }
    },
    {
      "id": "3",
      "location": {
        "city": "Ottawa",
        "country": "Canada"
      },
      "urls": {
        "full": `${process.env.PUBLIC_URL}/Image-3-Full.jpeg`,
        "regular": `${process.env.PUBLIC_URL}/Image-3-Regular.jpeg`
      },
      "user": {
        "id": "3",
        "username": "exampleuser",
        "name": "Joe Example",
        "profile": `${process.env.PUBLIC_URL}/profile-1.jpg`
      }
    }
   ]
}

export default PhotoList