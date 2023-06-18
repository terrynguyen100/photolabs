import React from 'react';

import '../styles/PhotoDetailsModal.scss'
//temporary photolist
import photos from '../mocks/photos';
import PhotoList from '../components/PhotoList';
import PhotoFavButton from '../components/PhotoFavButton';

export const PhotoDetailsModal = (props) => {
  //filter out photos
  const filteredPhotos = photos.filter((item) => item.id !== props.photoModalStatus.id);
  console.log(props);
  return (
    <div className='photo-details-modal'>
      <div className='temp'>
        <button className='photo-details-modal__close-button' onClick={() => {props.toggleModal(false)}}>
          <svg width="24" height="24" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_428_287)">
              <path d="M14.0625 3.9375L3.9375 14.0625" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M14.0625 14.0625L3.9375 3.9375" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
            </g>
            <defs>
              <clipPath id="clip0_428_287">
              <rect width="18" height="18" fill="white"/>
              </clipPath>
            </defs>
          </svg>
        </button>
      </div>
      <div className='photo-details-modal__body'>
        <div>
          <PhotoFavButton
            id = {props.photoModalStatus.id}
            liked = {props.photoModalStatus.liked}
            toggleFav = {props.photoModalStatus.toggleFav}
          />
          <img className='photo-details-modal__image' src={props.photoModalStatus.fullUrl}></img>
        </div>
        <div className='photo-details-modal__top-bar'>
          <label className='photo-details-modal__header'>Similar Photos</label>
          <div></div>
        </div>
        <div className='photo-details-modal__images'>
          <PhotoList 
            photos = {filteredPhotos}
            likedIds = {props.likedIds}
            toggleFav = {props.toggleFav}

            toggleModal = {null}
           />
        </div>
      </div>
    </div>
  )
}

export default PhotoDetailsModal;