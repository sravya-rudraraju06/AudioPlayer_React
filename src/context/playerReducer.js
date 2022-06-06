// this is the function(Reducer FUNCTION) for updating the sytless of application

import {
  SET_CURRENT_SONG,
  TOGGLE_RANDOM,
  TOGGLE_REPEAT,
  TOGGLE_PLAYING,
  SET_SONGS_ARRAY,
} from "./types";
let playerReducer = (state, action) => {
  // it has 2 parameyers STATE, ACTION
  // state:
  // action : iT is having TYPE & data ATTRIBUTESSS....and it is having 1 function and MUltiple actions..
  switch (action.type) {
    case SET_SONGS_ARRAY:
      return {
        ...state, // it is going to REturn SIngLE OBj  , // if we want songss array we spread the state we put in songs (action.data)
        songs: action.data,
      };
    case SET_CURRENT_SONG:
      return {
        ...state,
        currentSong: action.data,
        playing: true,
      };
    case TOGGLE_RANDOM:
      return {
        ...state,
        random: action.data,
      };
    case TOGGLE_REPEAT:
      return {
        ...state,
        repeat: action.data,
      };
    case TOGGLE_PLAYING:
      return {
        ...state,
        playing: action.data,
      };
    default:
      return state;
  }
};
export default playerReducer;
