import { useReducer, useEffect } from 'react';

const INITIAL_STATE = {
  like: [],
  selectedPic: null,
  display: false,
  photoData: [],
  topicData: [],
  selectedTopic: null,
};

const ACTIONS = {
  TOGGLE_LIKE: 'TOGGLE_LIKE',
  SELECT_PHOTO: 'SELECT_PHOTO',
  CLOSE_PHOTO: 'CLOSE_PHOTO',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  SELECT_TOPIC: 'SELECT_TOPIC',
};

const reducer = (state, action) => {
  switch (action.type) {

    case ACTIONS.TOGGLE_LIKE:
      const id = action.payload;
      if (state.like.includes(id)) {
        return { ...state, like: state.like.filter(likeId => likeId !== id) };
      };
      return { ...state, like: [...state.like, id] };

    case ACTIONS.SELECT_PHOTO:
      return { ...state, display: true, selectedPic: action.payload };

    case ACTIONS.CLOSE_PHOTO:
      return { ...state, display: false, selectedPic: null };

    case ACTIONS.SET_PHOTO_DATA:
      return { ...state, photoData: action.payload };

    case ACTIONS.SET_TOPIC_DATA:
      return { ...state, topicData: action.payload };

    case ACTIONS.SELECT_TOPIC:
      return { ...state, selectedTopic: action.payload };

    default:
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
      );
  }
};
function useApplicationData() {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  const toggleLike = (id) => dispatch({ type: ACTIONS.TOGGLE_LIKE, payload: id });
  const setPhotoSelected = (photo) => dispatch({ type: ACTIONS.SELECT_PHOTO, payload: photo });
  const onClosePhotoDetailsModal = () => dispatch({ type: ACTIONS.CLOSE_PHOTO });
  const getPhotosByTopic = topicId => dispatch({ type: ACTIONS.SELECT_TOPIC, payload: topicId });
  useEffect(() => {
    fetch(`http://localhost:8001/api/photos `)
      .then(res => res.json())
      .then(photoData => dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: photoData }));
  }, []);
  useEffect(() => {
    fetch(`http://localhost:8001/api/topics`)
      .then(res => res.json())
      .then(topicData => dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: topicData }));
  }, []);

  useEffect(() => {
    if (state.selectedTopic) {
      fetch(`http://localhost:8001/api/topics/photos/${state.selectedTopic}`)
        .then(res => res.json())
        .then(photosByTopic => dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: photosByTopic }));
    }
  }, [state.selectedTopic]);
  return {
    state,
    toggleLike,
    setPhotoSelected,
    onClosePhotoDetailsModal,
    getPhotosByTopic,
  }
}

export default useApplicationData