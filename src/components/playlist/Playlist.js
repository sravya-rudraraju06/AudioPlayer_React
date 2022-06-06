import React, { useContext } from "react";
import playerContext from "../../context/playerContext";

function Playlist() {
  const { SetCurrent, currentSong, songslist } = useContext(playerContext);
  return (
    <div className="playlist">
      <ul className="loi">
        {
          // How Do we RETRive the information 1st ly import PlayerContext
          // so to finish playlist component SETcuRRENT FUNCTION<
          songslist.map(
            (
              song,
              i          // song File   , className loi only u must keep soThat it will come sideBYside
            ) => (
              <li
                className={
                  "songContainer " + (currentSong === i ? "selected" : "")
                }
                // after songContainer Dont forget to give some space as WE are ADDING the STRING(addING WE NEED other string (space))
                // select currentONe if index matches the id (currentsong == i) selected or else we dont  do anything ''
                // so this wILL just select  LIke WHitE it comes WHEN WE clicK
                key={i}
                onClick={() => {
                  SetCurrent(i);
                }}
              >
                <div className="tmbn_song">
                  <i className="fas fa-play"></i>
                </div>
                {/* tmbn_song -> icon infront of image */}

                <div className="songmeta_playlist">
                  <span className="songname">{song.title}</span>
                  <span className="songauthors">{song.artistName}</span>
                </div>
                {/* each of them have a TItlle And NAME */}
                {/* In each playlist At the END we have 2 Buttons SO here it wont HAve any Function for them  */}

                <div className="playlist_btns_group">
                  <button className="fav_song playlist_btn">
                    <i className="far fa-heart fa-lg"></i>
                  </button>
                  {/* Heart button */}

                  <button className="options_song playlist_btn">
                    <i class="fas fa-ellipsis-v fa-lg"></i>
                  </button>
                  {/* 3 dots Button */}
                </div>
              </li>
            )
          )
        }
      </ul>
    </div>
  );
}

export default Playlist;
