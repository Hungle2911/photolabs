import React, {useState} from 'react';

import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useApplicationData from 'hooks/useApplicationData';
const App = () => {
  const {
    state: { like, selectedPic, display },
    toggleLike,
    setSelectedPic,
    handleDisplay} = useApplicationData()
  return (
    <div className="App">
      <HomeRoute handleDisplay={handleDisplay} like={like} toggleLike={toggleLike}/>
      {display && <PhotoDetailsModal handleDisplay={handleDisplay} selectedPic={selectedPic} like={like} toggleLike={toggleLike}/>}
    </div>
  );
};

export default App;
