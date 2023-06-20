import { useState } from 'react';

const useApplicationData = () => {
  const [state, setState] = useState({
    favouritePhotoIds: ["1"], // Initial liked IDs
    photoModalStatus: false, // Initial modal status
  });

  // Action to toggle the photo modal
  const toggleModal = (modalInput) => {
    setState((prev) => ({ ...prev, photoModalStatus: modalInput }));
  };

  // Action to toggle liked IDs
  const toggleFav = (id) => {
    const newLikedIds = state.favouritePhotoIds.includes(id)
      ? state.favouritePhotoIds.filter((item) => item !== id)
      : [...state.favouritePhotoIds, id];

    //this will take the previous state, copy all properties, then update 1 property
    setState((prev) => ({ ...prev, favouritePhotoIds: newLikedIds }));
  };

  return {
    state,
    toggleModal,
    toggleFav,
  };
};

export default useApplicationData;