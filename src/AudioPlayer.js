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
  return (                             // so wrap this with PLaYErState
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


// one is for modifying the inputs(input.css)
// this is for whole application(input.css)
// HEADER < ACTIONS < PLAYLIST ( this ARe the COMPONENTS )
    // outside the Context-text DIv place CONTROLS is the more complecated of all component of them
    // CREATE Floder called CompoNENT 
