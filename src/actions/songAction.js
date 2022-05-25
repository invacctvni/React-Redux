//action creators:
// 1. action is an object, returns plain javascript object.
// 2. action contains type (which action? click button A action, button B action, easy to search), payload(optional)

import {FETCH_ALL_SONGS, SELECT_SONG, songs} from "../helper";

const fetchAllSongs = () => {
    console.log('fetch all songs from action')
    return {
        type: FETCH_ALL_SONGS,
        payload: songs
    }
}

const selectSong = songID => {
   return {
       type: SELECT_SONG,
       payload: songID
   }
}

export {fetchAllSongs, selectSong}