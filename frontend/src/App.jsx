import React, {useState} from 'react';

import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
const App = () => {
  const [display, setDisplay] = useState(false)
  const handleDisplay = () => {setDisplay(!display)}
  return (
    <div className="App">
      <HomeRoute handleDisplay={handleDisplay}/>
      {display && <PhotoDetailsModal />}
    </div>
  );
};

export default App;
