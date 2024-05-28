import React, {useState} from 'react';
import photos from 'mocks/photos';
import '../styles/HomeRoute.scss';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';
const HomeRoute = ({topics, photos}) => {
  const [like, setLike] = useState([]);
  const toggleLike = (id) => like.includes(id) ? setLike(like.filter(e => e !== id)) : setLike([...like, id]);
  return (
    <div className="home-route">
      <TopNavigation topics={topics}/>
      <PhotoList like={like} toggleLike={toggleLike} photos={photos} />
    </div>
  );
};

export default HomeRoute;
