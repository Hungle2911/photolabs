import React from 'react';
import PhotoFavButton from 'components/PhotoFavButton';
import PhotoList from 'components/PhotoList';
import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';

const PhotoDetailsModal = ({handleDisplay, selectedPic, like, toggleLike}) => {
  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={handleDisplay}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
      <div className="photo-details-modal__images">
      <PhotoFavButton like={like} toggleLike={toggleLike} id={selectedPic.id}/>
        <img className="photo-details-modal__image" src={selectedPic.imageSource} alt="Image"/>
        <div className="photo-details-modal__photographer-details">
          <img className="photo-list__user-profile" src={selectedPic.profile}/>
          <div className="photo-list__user-info">
            <div>{selectedPic.username}</div>
            <div className="photo-list__user-location">
              {selectedPic.location.city}, {selectedPic.location.country}
            </div>
          </div>
        </div>
        <p className='photo-details-modal__header'>Similar Photos</p>
      </div>
      <PhotoList like={like} toggleLike={toggleLike} photos={selectedPic.similarPhotos} />
    </div>
  )
};

export default PhotoDetailsModal;
