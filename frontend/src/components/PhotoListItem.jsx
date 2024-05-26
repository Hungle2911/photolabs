import React from "react";

import "../styles/PhotoListItem.scss";


const PhotoListItem = ({props}) => {
  return (
    <>
    <img src={props.imageSource}  />
    <img src={props.profile} />
    <div>{props.username}</div>
    <div>{props.location.city}, {props.location.country}</div>
    </>
  )
};

export default PhotoListItem;
