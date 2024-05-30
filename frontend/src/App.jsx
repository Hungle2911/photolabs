import React, {useState} from 'react';

import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useApplicationData from 'hooks/useApplicationData';
const App = () => {
  const {
    state: { like, selectedPic, display },
    toggleLike,
    setPhotoSelected,
    onClosePhotoDetailsModal} = useApplicationData()
  return (
    <div className="App">
      <HomeRoute handleDisplay={setPhotoSelected} closeModal={onClosePhotoDetailsModal} like={like} toggleLike={toggleLike}/>
      {display && <PhotoDetailsModal handleDisplay={setPhotoSelected} closeModal={onClosePhotoDetailsModal} selectedPic={selectedPic} like={like} toggleLike={toggleLike}/>}
    </div>
  );
};

export default App;
