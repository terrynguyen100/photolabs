import {React, useState} from 'react';

import HomeRoute from './components/HomeRoute';
import PhotoDetailsModal from './routes/PhotoDetailsModal'
import './App.scss';

// Note: Rendering a single component to build components in isolation
const App = () => {
  const [photoModalStatus, setPhotoModalStatus] = useState(false);

  //input can be either 'false' or a photo object 
  const toggleModal = (input) => {
    setPhotoModalStatus(input);
  }

  return (
    <div className="App">
      <HomeRoute
        toggleModal = {toggleModal}
      />
      {photoModalStatus && <PhotoDetailsModal
        toggleModal = {toggleModal}
        photoModalStatus = {photoModalStatus}
      />}
    </div>
  )
}
  

export default App