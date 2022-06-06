import React from 'react'
import Header from './components/graphics/Header'
import Graphics from './components/graphics/Graphics'
import Playlist from './components/playlist/Playlist'
import Actions from './components/playlist/Actions'
import Controls from './components/Controls'

import PlayerState from './context/PlayerState'

import './main.css'
import './input.css'

const close = () => {
  console.log('Closing the app')
}

let AudioPlayer=()=> {
  return (                           
    <PlayerState>
      <div className="audioplayer">
        <div className="inside_content">
          <Header />
          <Actions />
          <Playlist />
        </div>
        <Controls />
      </div>
    </PlayerState>
  )
}

export default AudioPlayer;


