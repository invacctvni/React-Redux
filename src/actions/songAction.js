//action creators:
// 1. action is an object, returns plain javascript object.
// 2. action contains type (which action? click button A action, button B action, easy to search), payload(optional)

//redux thunk can return function in action. think can use action.
import {ADD_FAV_SONG, ERROR, FETCH_ALL_SONGS, FETCH_ONE_SONG, SELECT_SONG, songs, URL} from "../helper";
import axios from "axios";
import {useParams} from "react-router-dom";

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
    console.log("select song payload", songID)
}

const addFavSong = songID => dispatch => {
    dispatch({
        type: ADD_FAV_SONG,
        payload: songID
    })
}

const fetchOneSong = songID => async dispatch => {
    try {
        await axios.get(`${URL}/${songID}`).then(r => {
            console.log(r.data.data)
            dispatch(
                {
                    type: FETCH_ONE_SONG,
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

export {fetchAllSongs, selectSong, fetchOneSong, addFavSong}