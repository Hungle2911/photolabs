import React from "react";
import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

const PhotoList = ({photos, like, toggleLike}) => {
  return (
    <ul className="photo-list">
      {photos.map((item) => (<PhotoListItem 
          key={item.id}
          id={item.id}
          like={like} 
          toggleLike={toggleLike}
          location={item.location}
          imageSource={item.urls.regular}
          username={item.user.name}
          profile={item.user.profile}/>))}
    </ul>
  );
};

export default PhotoList;
