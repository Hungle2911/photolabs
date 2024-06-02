import React from 'react';

import '../styles/TopNavigationBar.scss'
import TopicList from './TopicList';
import FavBadge from './FavBadge';
import DarkModeButton from './DarkModeButton';
const TopNavigation = ({topics, isFavPhotoExist, getPhotosByTopic, setDarkMode, darkMode}) => {
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList topics={topics} getPhotosByTopic={getPhotosByTopic}/>
      <div className='icons'>
      <FavBadge isFavPhotoExist={isFavPhotoExist}/>
      <DarkModeButton setDarkMode={setDarkMode} darkMode={darkMode}/>
      </div>
    </div>
  )
}

export default TopNavigation;