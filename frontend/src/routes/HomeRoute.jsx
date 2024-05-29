import React, {useState} from 'react';
import topics from "mocks/topics";
import photos from "mocks/photos";
import '../styles/HomeRoute.scss';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';
const HomeRoute = ({handleDisplay, like, toggleLike}) => {
  const isFavPhotoExist = like.length > 0
  return (
    <div className="home-route">
      <TopNavigation topics={topics} isFavPhotoExist={isFavPhotoExist}/>
      <PhotoList like={like} toggleLike={toggleLike} photos={photos} handleDisplay={handleDisplay}/>
    </div>
  );
};

export default HomeRoute;
