//store application states, it is obect.
//application state
//reducer rules:
//immutability
// reducer can only calculate the new state based on previous state & payload.
//reducer is not allowed to change current state. Therefore, you should make immutable updates.
// you should not use asy method to update the state. Because itself is asyc.


//add fav song..
// 1. create obj array.
// 2. modify each obj by adding one boolean element with initial value false.
// 3. once click any song, the corresponding obj initial value change to true and others' to false.
// 4. loop through each obj and retrieve all objs with "true" value.

import {ADD_FAV_SONG, CHANGE_FAV_STATUS, FETCH_ALL_SONGS, FETCH_ONE_SONG, SELECT_SONG} from "../helper";

const initState = {
    songList: [],
    songId:1,
    songSingleObj: null, //fetched song id
    songIdFav: [] //add fav song array.
}

export const songReducer = (state =  initState, action) => {
    switch (action.type) {
        case FETCH_ALL_SONGS:
            console.log("song reducer is printing ===>", action?.payload)
            //data treatment here..
            return {...state,songList: action.payload}
        case SELECT_SONG:
            console.log("select song reducer started working. action?.payload is", action?.payload)
            return {...state, songId: action?.payload}
        //add fav song reducer
        case ADD_FAV_SONG:
            //copy the initial array
            let songIdFav2 = [...state.songIdFav]
            if (!songIdFav2.includes(action?.payload)) {
                //, means append a new item to the songIdFav2 array.
                songIdFav2 = [...songIdFav2,action?.payload]
            }
            else {
                //... means copy existing array to the new array.
                songIdFav2=[...songIdFav2.filter(value => value!==action?.payload)]
            }
            //this is an object, so inherit the initial property, and change certain property.
            return {...state, songIdFav: songIdFav2}
        case CHANGE_FAV_STATUS:
            // let songList2 = [...state.songList]
            // songList2.forEach((v,i)=>{
            //     if(i+1===action?.payload) v.fav=true
            // })
            // console.log("print recent songlist", songList2)
            state.songList[action?.payload-1].fav = !state.songList[action?.payload-1].fav
            console.log(state?.songList)
            return {...state}
        case FETCH_ONE_SONG:
            console.log(action?.payload)
            return {...state, songSingleObj: action?.payload}
        default:
            return state
    }
}