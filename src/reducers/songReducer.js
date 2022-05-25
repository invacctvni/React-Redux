//store application states, it is obect.
//application state
//reducer rules:
//immutability
// reducer can only calculate the new state based on previous state & payload.
//reducer is not allowed to change current state. Therefore, you should make immutable updates.
// you should not use asy method to update the state. Because itself is asyc.

import {FETCH_ALL_SONGS, SELECT_SONG} from "../helper";

const initState = {
    songList: [],
    songId:1
}

export const songReducer = (state =  initState, action) => {
    switch (action.type) {
        case FETCH_ALL_SONGS:
            console.log("song reducer is printing ===>", action?.payload)
            return {...state,songList: action.payload}
        case SELECT_SONG:
            return {...state, songId: action?.payload}
        default:
            console.log('song reducer state', state)
            return state
    }
}