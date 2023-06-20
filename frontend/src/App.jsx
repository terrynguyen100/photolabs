import {React, useState, useEffect} from 'react';

import HomeRoute from './components/HomeRoute';
import PhotoDetailsModal from './routes/PhotoDetailsModal'
import './App.scss';
import useApplicationData from './hooks/useApplicationData';

// Note: Rendering a single component to build components in isolation
const App = () => {

  const { state, toggleModal, toggleFav } = useApplicationData();

  return (
    <div className="App">
      <HomeRoute
        likedIds={state.favouritePhotoIds}
        toggleFav={toggleFav}
        toggleModal={toggleModal}
      />
      {state.photoModalStatus && (
        <PhotoDetailsModal
          likedIds={state.favouritePhotoIds}
          liked={state.favouritePhotoIds.includes(state.photoModalStatus.id)}
          toggleFav={toggleFav}
          photoModalStatus={state.photoModalStatus}
          toggleModal={toggleModal}
        />
      )}
    </div>
  );
};
  

export default App