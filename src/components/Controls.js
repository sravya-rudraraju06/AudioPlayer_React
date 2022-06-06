// POSTIONS Are FIxed TO the BOtTOM ANd LEFT(we will get in the inspect Elements,Styles)

import React, { useState, useEffect, useRef, useContext } from 'react'
import playerContext from '../context/playerContext'

let Controls=()=> {
  // Global State
  const {
    currentSong,
    songs,
    nextSong,
    prevSong,
    repeat,
    random,
    playing,
    toggleRandom,
    toggleRepeat,
    togglePlaying,
    handleEnd,
    songslist,
  } = useContext(playerContext)

  const audio = useRef('audio_tag')      // with this reference we can change the audio

  // self State
  const [statevolum, setStateVolum] = useState(0.3)
  const [dur, setDur] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)

  const fmtMSS = (s) => {
    return (s - (s %= 60)) / 60 + (9 < s ? ':' : ':0') + ~~s
  }

  const toggleAudio = () =>
    audio.current.paused ? audio.current.play() : audio.current.pause()        // audio is paused (play or pause, BLUe color in output)

  const handleVolume = (q) => {
    setStateVolum(q)                               // Above statevolum(this is to handle)
    audio.current.volume = q     // so in picture at the bottom edge we can see volume button , It will cahnge the volume in audio tag
  }

  const handleProgress = (e) => {
    let compute = (e.target.value * dur) / 100
    setCurrentTime(compute)
    audio.current.currentTime = compute
  }

  useEffect(() => {
    audio.current.volume = statevolum
    if (playing) {
      toggleAudio()
    }
  }, [currentSong])

  return (
    <div className="controls">
      <audio
      
        onTimeUpdate={(e) => setCurrentTime(e.target.currentTime)}     // onTimeUpdate-> when the player change the time grab the evnet and set current time
        onCanPlay={(e) => setDur(e.target.duration)}     // loaded with the song (duration of song)
        onEnded={handleEnd}
        ref={audio}
        type="audio/mpeg"
        preload="true"
        src={songslist[currentSong].fileUrl}
      />
      <div className="vlme">
        <span className="volum">
          <i className="fas fa-volume-down"></i>
        </span>
        <input
          value={Math.round(statevolum * 100)}
          type="range"
          name="volBar"
          id="volBar"
          onChange={(e) => handleVolume(e.target.value / 100)}              // create HANDLE volume function above
        />
      </div>
      <div className="musicControls">
        <span className="prev" onClick={prevSong}>
          <i className="fas fa-step-backward"></i>         
        </span>

        <span
          className="play"
          onClick={() => {
            togglePlaying()              // above we have created const toggle audio
            toggleAudio()
          }}
        >
          <span className={!playing ? '' : 'hide'}>
            <i className="fas fa-play"></i>
          </span>
          <span className={!playing ? 'hide' : ''}>
            <i className="fas fa-pause"></i>
          </span>
        </span>

        <span className="next" onClick={nextSong}>
          <i className="fas fa-step-forward"></i>
        </span>
      </div>

      <div className="progressb">
        <div className="songMeta">
          <span className="songtitle">{songslist[currentSong].title}</span>
          <span className="songartistName">
            {songslist[currentSong].artistName}
          </span>
        </div>
        <input
          onChange={handleProgress}
          value={dur ? (currentTime * 100) / dur : 0}
          type="range"
          name="progresBar"
          id="prgbar"
        />
        {/* fmtMSS used to give totalSEC, and down ONe will give nice format */}
        <span className="currentT">{fmtMSS(currentTime)}</span>   
        <span className="totalT">{fmtMSS(dur)}</span>
      </div>
     
      <div className="plsoptions">
        <span
          onClick={toggleRandom}
          className={'random ' + (random ? 'active' : '')}
        >
          {/* RANDOM SYMBOL from FONt Awsome */}
          <i className="fas fa-random fa-lg"></i>
        </span>
        <span
          onClick={toggleRepeat}
          className={'repeat ' + (repeat ? 'active' : '')}
        >
          {/* symnols we get it from font awsome  -> repeat symbol  */}  
          <i className="fas fa-redo-alt fa-lg"></i>        
        </span>
      </div>
    </div>
  )
}

export default Controls
