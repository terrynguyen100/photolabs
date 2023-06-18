import {React} from 'react';

import HomeRoute from './components/HomeRoute';
import PhotoDetailsModal from './routes/PhotoDetailsModal'
import './App.scss';

// Note: Rendering a single component to build components in isolation
const App = () => {

  // const [photoModal, setPhotoModal] = useState();

  // const openModal = (photoItem) => {
  //   setPhotoModal(photoItem);
  // };

  return (
    <div className="App">
      <HomeRoute
        // openModal = {openModal}
      />
      {photoModal && <PhotoDetailsModal/>}
    </div>
  )
}

export default App