import React from "react";
import PhotoFavButton from "./PhotoFavButton";
import "../styles/PhotoListItem.scss";


const PhotoListItem = ({ id, location, imageSource, username, profile, like, toggleLike, handleDisplay }) => {
  return (
    <div className="photo-list__item" key={id}>
      <PhotoFavButton like={like} toggleLike={toggleLike} id={id}/>
    <img src={imageSource} className="photo-list__image" onClick={handleDisplay}/>
    <div className="photo-list__user-details">
    <img src={profile} className="photo-list__user-profile"/>
    <div className="photo-list__user-info">
    <div >{username}</div>
    <div className="photo-list__user-location">{location.city}, {location.country}</div>
    </div>
    </div>
    </div>
  )
};

export default PhotoListItem;
