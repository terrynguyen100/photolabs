import {React, useState, useEffect} from 'react';

import HomeRoute from './components/HomeRoute';
import PhotoDetailsModal from './routes/PhotoDetailsModal'
import './App.scss';

// Note: Rendering a single component to build components in isolation
const App = () => {

  //--------------------MODAL FORM------------------
  const [photoModalStatus, setPhotoModalStatus] = useState(false);

  //input can be either 'false' or a photo object 
  const toggleModal = (modalInput) => {
    setPhotoModalStatus(modalInput);
  }
  // const setPhotoModalStatus = {
  //   "id" : props.id,
  //   "fullUrl" : props.urls.full,
  // }

  //-------------------FAVORITES / LIKEd --------------------
  const [likedIds, setLikedIds] = useState(["1"]);

  const toggleFav = (id) => {
    const newLikedIds = likedIds.includes(id) ? likedIds.filter((item) => item !== id) : [...likedIds, id];
    setLikedIds(newLikedIds);
  };

  return (
    <div className="App">
      <HomeRoute
        likedIds = {likedIds} 
        toggleFav = {toggleFav}
        toggleModal = {toggleModal}
      />
      {photoModalStatus && <PhotoDetailsModal
        likedIds = {likedIds}
        liked = {likedIds.includes(photoModalStatus.id)}
        toggleFav = {toggleFav}
        photoModalStatus = {photoModalStatus}
        toggleModal = {toggleModal}
      />}
    </div>
  )
}
  

export default App