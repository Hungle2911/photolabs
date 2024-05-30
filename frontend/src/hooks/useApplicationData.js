import { useReducer } from 'react';

const INITIAL_STATE = {
  like: [],
  selectedPic: null,
  display: false
};

const ACTIONS = {
  TOGGLE_LIKE: 'TOGGLE_LIKE',
  SELECT_PHOTO: 'SELECT_PHOTO',
  CLOSE_PHOTO: 'CLOSE_PHOTO'
};

const reducer = (state, action) => {
  switch (action.type) {

    case ACTIONS.TOGGLE_LIKE:
      const id = action.payload;
      if (state.like.includes(id)) {
        return { ...state, like: state.like.filter(id => id !== id) };
      };
      return { ...state, like: [...state.like, id] };

    case ACTIONS.SELECT_PHOTO:
      return { ...state, display: true, selectedPic: action.payload };

    case ACTIONS.CLOSE_PHOTO:
      return { ...state, display: false, selectedPic: null };

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
  return {
    state,
    toggleLike,
    setPhotoSelected,
    onClosePhotoDetailsModal
  }
}

export default useApplicationData