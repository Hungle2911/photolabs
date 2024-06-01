import React, {useState} from 'react';
import '../styles/HomeRoute.scss';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';
const HomeRoute = ({handleDisplay, like, toggleLike, photos, topics, getPhotosByTopic}) => {
  const isFavPhotoExist = like.length > 0
  return (
    <div className="home-route">
      <TopNavigation topics={topics} isFavPhotoExist={isFavPhotoExist} getPhotosByTopic={getPhotosByTopic}/>
      <PhotoList like={like} toggleLike={toggleLike} photos={photos} handleDisplay={handleDisplay}/>
    </div>
  );
};

export default HomeRoute;
