import React, { useReducer } from 'react'
import playerContext from './playerContext'
import playerReducer from './playerReducer'
import  { song_list } from './songs'

import {
  SET_CURRENT_SONG,
  TOGGLE_RANDOM,
  TOGGLE_REPEAT,
  TOGGLE_PLAYING,
  SET_SONGS_ARRAY,
} from './types'

const PlayerState = (props) => {
  const initialState = {
    currentSong: 0,
    songslist: song_list,               // list of ARRAY of songs
    repeat: false,
    random: false,
    playing: false,
    audio: null,
  }
  const [state, dispatch] = useReducer(playerReducer, initialState) // dispatch-useREdecer to excecute to playreducer & update the state

  // Set songs array

  const songsSet = (songArr) =>
    dispatch({ type: SET_SONGS_ARRAY, data: songArr })

  // Set playing state     -> btw playing and paused state of the player  , state.playing is true it goes to false if it is false it will go to true
  // in reducer WE have playing: action.data so keeping that playing here(state.playing)

  const togglePlaying = () =>
    dispatch({ type: TOGGLE_PLAYING, data: state.playing ? false : true })

  // Set current song   after     , so keep setcuRRENT below in PlayerCONTEXT.PROVIDER

  const SetCurrent = (id) => dispatch({ type: SET_CURRENT_SONG, data: id })

  // Prev song
  const prevSong = () => {
    if (state.currentSong === 0) {
      SetCurrent(state.songs.length - 1)
    } else {
      SetCurrent(state.currentSong - 1)
    }
  }
  // Next song
  const nextSong = () => {
    if (state.currentSong === state.songs.length - 1) {
      SetCurrent(0)
    } else {
      SetCurrent(state.currentSong + 1)
    }
  }

  // Repeat and Random
  const toggleRepeat = (id) =>
    dispatch({ type: TOGGLE_REPEAT, data: state.repeat ? false : true })
  const toggleRandom = (id) =>
    dispatch({ type: TOGGLE_RANDOM, data: state.random ? false : true })

  // End of Song
  const handleEnd = () => {
    // Check for random and repeat options
    if (state.random) {
      return dispatch({
        type: SET_CURRENT_SONG,
        data: ~~(Math.random() * state.songs.length),     // ~~ this indicates integer,(we are going to give random no b/w the songsLength)
      })
    } else {
      if (state.repeat) {
        nextSong()
      } else if (state.currentSong === state.songs.length - 1) {
        return
      } else {
        nextSong()
      }
    }
  }

  return (
    <playerContext.Provider
      value={{   // in the value  all  the ACCESABLE state apllication is here, // PLAyerCONTExt>PRovider only we have value attribute
        // if it not in value is dosent  accessiin the  other parts of application
        currentSong: state.currentSong,
        songslist: state.songslist,
        repeat: state.repeat,
        random: state.random,
        playing: state.playing,
        audio: state.audio,
        nextSong,
        prevSong,
        SetCurrent,
        toggleRandom,
        toggleRepeat,
        togglePlaying,
        handleEnd,
        songsSet,
      }}
    >
      {props.children}
    </playerContext.Provider>
  )
}

export default PlayerState