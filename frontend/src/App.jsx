import React from 'react';
import topics from "mocks/topics";
import photos from "mocks/photos";
import './App.scss';
import HomeRoute from 'routes/HomeRoute';
const App = () => {
  return (
    <div className="App">
      <HomeRoute topics={topics} photos={photos}/>
    </div>
  );
};

export default App;
