import React from 'react'
// import playerContext from '../../context/playerContext'

// // Hooks
const fav = () => {
  console.log('I like this one dummyyy one')
}

// Component
function Actions() {
  return (
    <div className="actions">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa_Chk8Po0p0FqJHgGvL_ucHcbAXywqUYInA&usqp=CAU"></img>
      <div className="album_meta">
        <span className="alb_label">ALBUM</span>
        <h1>One Direction</h1>
      </div>

      <div className="action_btns">
        <button onClick={() => fav()} className="fav_btn">
          <i className="far fa-heart fa-2x"></i>
        </button>

        <button onClick={() => fav()} className="fav_btn">
          <i className="far fa-arrow-alt-circle-down fa-2x"></i>
        </button>
        
        <button onClick={() => fav()} className="fav_btn">
          <i className="fas fa-ellipsis-h fa-2x"></i>
        </button>
      </div>
    </div>
  )
}

export default Actions;
