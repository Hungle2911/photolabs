import React, {useState} from 'react'

function useApplicationData() {
  const [display, setDisplay] = useState(false)
  const [selectedPic, setSelectedPic] = useState()
  const [like, setLike] = useState([]);
  const toggleLike = (id) => like.includes(id) ? setLike(like.filter(e => e !== id)) : setLike([...like, id]);
  const handleDisplay = (photo) => {
    setDisplay(!display)
    setSelectedPic(photo)
  }
  return {
    state: { like, selectedPic, display },
    toggleLike,
    setSelectedPic,
    handleDisplay
  }
}

export default useApplicationData