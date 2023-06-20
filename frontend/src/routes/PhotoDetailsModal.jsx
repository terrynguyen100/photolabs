import React, { useEffect } from 'react';
import '../styles/PhotoDetailsModal.scss';
import PhotoList from '../components/PhotoList';
import PhotoFavButton from '../components/PhotoFavButton';

const PhotoDetailsModal = (props) => {
  //disable clicking outside of the modal form
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!event.target.closest('.photo-details-modal')) {
        event.preventDefault();
        event.stopPropagation();
      }
    };

    const disableOutsideClick = () => {
      document.addEventListener('click', handleOutsideClick, true);
    };

    const enableOutsideClick = () => {
      document.removeEventListener('click', handleOutsideClick, true);
    };

    disableOutsideClick();

    return () => {
      enableOutsideClick();
    };
  }, []);

  return (
    <div className='photo-details-modal'>
      <button className='photo-details-modal__close-button' onClick={() => { props.toggleModal(false) }}>
        <svg width="24" height="24" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_428_287)">
            <path d="M14.0625 3.9375L3.9375 14.0625" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M14.0625 14.0625L3.9375 3.9375" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
          </g>
          <defs>
            <clipPath id="clip0_428_287">
              <rect width="18" height="18" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </button>
      <div className='photo-details-modal__body'>
        <div className='photo-details-modal__main-img'>
          <PhotoFavButton
            id={props.photoModalStatus.id}
            liked={props.liked}
            toggleFav={props.toggleFav}
          />
          <img className='photo-details-modal__image' src={props.photoModalStatus.fullUrl} alt="" />
        </div>
        <div className='photo-details-modal__main-img-user'>
          <img className='photo-details-modal__main-img-user-img' src={props.photoModalStatus.user.profile} alt="" />
          <div className='photo-details-modal__main-img-user-info'>
            <div className='photo-details-modal__main-img-user-name'>{props.photoModalStatus.user.name}</div>
            <div className='photo-details-modal__main-img-user-location'>{props.photoModalStatus.location.city}, {props.photoModalStatus.location.country}</div>
          </div>
        </div>
        <div className='photo-details-modal__top-bar'>
          <label className='photo-details-modal__header'>Similar Photos</label>
          <div></div>
        </div>
        <div className='photo-details-modal__images'>
          <PhotoList
            photos={props.photoModalStatus.similar_photos}
            likedIds={props.likedIds}
            toggleFav={props.toggleFav}
            toggleModal={null}
          />
        </div>
      </div>
    </div>
  );
};

export default PhotoDetailsModal;
