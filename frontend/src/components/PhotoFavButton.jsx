import React from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton({ like, toggleLike, id }) {
  
  return (
    <div className="photo-list__fav-icon" onClick={() => toggleLike(id)}>
      <div className="photo-list__fav-icon-svg">
      <FavIcon selected={like.includes(id)} />
      </div>
    </div>
  );
}

export default PhotoFavButton;