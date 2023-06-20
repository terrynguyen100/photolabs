import React, { useState, useEffect } from 'react';
import axios from 'axios';
import HomeRoute from './components/HomeRoute';
import PhotoDetailsModal from './routes/PhotoDetailsModal';
import './App.scss';
import useApplicationData from './hooks/useApplicationData';

const App = () => {
  const [photos, setPhotos] = useState([]);
  const [topics, setTopics] = useState([]);
  const [photosEndPoint, setPhotosEndPoint] = useState('/api/photos');
  const { state, toggleModal, toggleFav } = useApplicationData();


  useEffect(() => {
    const photosPromise = axios.get(photosEndPoint);
    const topicsPromise = axios.get('/api/topics');
    const promises = [photosPromise, topicsPromise];

    Promise.all(promises)
      .then((arrayOfResponse) => {
        setPhotos(arrayOfResponse[0].data);
        setTopics(arrayOfResponse[1].data);
      });
  }, [photosEndPoint]);

  return (
    <div className="App">
      <HomeRoute
        likedIds={state.favouritePhotoIds}
        toggleFav={toggleFav}
        toggleModal={toggleModal}
        photos={photos}
        topics={topics}
        setPhotosEndPoint = {setPhotosEndPoint}
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

export default App;
