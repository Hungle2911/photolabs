import React from 'react';
import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useApplicationData from 'hooks/useApplicationData';
const App = () => {
  const {
    state: { like, selectedPic, display, photoData, topicData, darkMode },
    toggleLike,
    setPhotoSelected,
    onClosePhotoDetailsModal,
    getPhotosByTopic,
    setDarkMode,
    isLoading} = useApplicationData()
  return (
    <div className={darkMode ? 'dark-mode App' : 'App'}>
      <HomeRoute 
      handleDisplay={setPhotoSelected} 
      closeModal={onClosePhotoDetailsModal} 
      like={like} 
      photos={photoData} 
      topics={topicData}
      toggleLike={toggleLike}
      getPhotosByTopic={getPhotosByTopic}
      isLoading={isLoading}
      setDarkMode={setDarkMode}
      darkMode={darkMode}/>

      {display && 
      <PhotoDetailsModal 
      handleDisplay={setPhotoSelected} 
      closeModal={onClosePhotoDetailsModal} 
      selectedPic={selectedPic} 
      like={like} 
      toggleLike={toggleLike}
      darkMode={darkMode}/>}
    </div>
  );
};

export default App;
