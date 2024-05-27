import React from 'react';

import PhotoList from 'components/PhotoList';
import './App.scss';
import TopicList from 'components/TopicList';
import TopNavigation from 'components/TopNavigationBar';
const App = () => {
  return (
    <div className="App">
      <div className='home-route'>
      <TopNavigation />
      <PhotoList />
      </div>  
    </div>
  );
};

export default App;
