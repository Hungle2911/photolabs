import React from 'react'
import '../styles/Skeleton.scss'
function Skeleton() {
  return (
    <ul className="photo-list">
      {Array.from({ length: 6 }).map((_, index) => (
        <div className="photo-list__item" key={index}>
          
          <div className="photo-list__image skeleton rect"></div>
          <div className="photo-list__user-details">
            <div className="photo-list__user-profile skeleton circle"></div>
            <div className="photo-list__user-info">
              <div className="skeleton text"></div>
              <div className="photo-list__user-location skeleton text"></div>
            </div>
          </div>
        </div>
      ))}
    </ul>
  );
}

export default Skeleton