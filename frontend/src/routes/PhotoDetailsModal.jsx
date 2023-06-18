import React from 'react';

import '../styles/PhotoDetailsModal.scss'

//temporary photolist
import photos from '../mocks/photos';
import PhotoList from '../components/PhotoList';

// const modalInput = {
//   "id" : props.id,
//   "fullUrl" : props.urls.full
// }


export const PhotoDetailsModal = (props) => {
  console.log(props)  ;
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
        <img className='photo-details-modal__image' src={props.photoModalStatus.fullUrl}></img>
        <div className='photo-details-modal__top-bar'>
          <label className='photo-details-modal__header'>Similar Photos</label>
          <div></div>
        </div>
        <div className='photo-details-modal__images'>

        </div>
      </div>
    </div>
  )
}

export default PhotoDetailsModal;