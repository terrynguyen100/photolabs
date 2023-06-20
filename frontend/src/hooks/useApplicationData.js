import { useReducer } from 'react';

const initialState = {
  favouritePhotoIds: [],
  photoModalStatus: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_MODAL':
      return { ...state, photoModalStatus: action.payload };
    case 'TOGGLE_FAV':
      const newLikedIds = state.favouritePhotoIds.includes(action.payload)
        ? state.favouritePhotoIds.filter((item) => item !== action.payload)
        : [...state.favouritePhotoIds, action.payload];
      return { ...state, favouritePhotoIds: newLikedIds };
    default:
      return state;
  }
};

const useApplicationData = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const toggleModal = (modalInput) => {
    dispatch({ type: 'TOGGLE_MODAL', payload: modalInput });
  };

  const toggleFav = (id) => {
    dispatch({ type: 'TOGGLE_FAV', payload: id });
  };

  return {
    state,
    toggleModal,
    toggleFav,
  };
};

export default useApplicationData;
