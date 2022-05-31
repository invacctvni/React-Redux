//action creators:
// 1. action is an object, returns plain javascript object.
// 2. action contains type (which action? click button A action, button B action, easy to search), payload(optional)

//redux thunk can return function in action. think can use action.
import {ERROR, FETCH_ALL_SONGS, SELECT_SONG, songs, URL} from "../helper";
import axios from "axios";

// const fetchAllSongs = () => {
//     console.log('fetch all songs from action')
//     return {
//         type: FETCH_ALL_SONGS,
//         payload: songs
//     }
// }

// const fetchAllSongs = () => dispatch => {
//     console.log('fetch all songs from action')
//     //return function dispatch.
//     // return dispatch => {}
//     return function (dispatch) {
//         //axios..
//         dispatch(
//             {
//                 type: FETCH_ALL_SONGS,
//                 payload:songs
//             }
//         )
//     }
// }

const fetchAllSongs = () => async dispatch => {
    console.log('fetch all songs from action')
    //return function dispatch.
    // return dispatch => {}
        //axios..
    try {
        await axios.get(URL).then(r => {
            console.log(r.data.data)
            dispatch(
                {
                    type: FETCH_ALL_SONGS,
                    payload: r.data.data
                }
            )
        }).catch(e => console.log(e))
    }catch (e) {
        dispatch (
            {
                type: ERROR,
                payload: e
            }
        )
    }
}


const selectSong = songID => dispatch => {
   console.log("fetch Id action started")
   dispatch({
       type: SELECT_SONG,
       payload: songID
   })
}

export {fetchAllSongs, selectSong}