import React, {useState} from 'react';

import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
const App = () => {
  const [display, setDisplay] = useState(false)
  const [selectedPic, setSelectedPic] = useState()
  const [like, setLike] = useState([]);
  const toggleLike = (id) => like.includes(id) ? setLike(like.filter(e => e !== id)) : setLike([...like, id]);
  const handleDisplay = (photo) => {
    setDisplay(!display)
    setSelectedPic(photo)
  }
  return (
    <div className="App">
      <HomeRoute handleDisplay={handleDisplay} like={like} toggleLike={toggleLike}/>
      {display && <PhotoDetailsModal handleDisplay={handleDisplay} selectedPic={selectedPic} like={like} toggleLike={toggleLike}/>}
    </div>
  );
};

export default App;
