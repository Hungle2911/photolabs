import React, {useState} from 'react';

import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
const App = () => {
  const [display, setDisplay] = useState(false)
  const [selectedPic, setSelectedPic] = useState()
  const handleDisplay = (photo) => {
    setDisplay(!display)
    setSelectedPic(photo)
    console.log(photo);
  }
  return (
    <div className="App">
      <HomeRoute handleDisplay={handleDisplay}/>
      {display && <PhotoDetailsModal handleDisplay={handleDisplay} selectedPic={selectedPic}/>}
    </div>
  );
};

export default App;
