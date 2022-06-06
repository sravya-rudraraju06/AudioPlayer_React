import React, { useContext } from 'react'
import playerContext from '../../context/playerContext'

let Header=()=> {
  const { currentSong, songs } = useContext(playerContext)

  return (
    <header className="draggable">
      <h3>React</h3>
    </header>
  )
}

export default Header;


// reactWave -{We need to place CURRENT PLAYING SONG HERE}