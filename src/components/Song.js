import "./Song.scss"
import {addFavSong, selectSong} from "../actions/songAction";
import {useDispatch, useSelector} from "react-redux";
import {songReducer} from "../reducers/songReducer";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {AiFillHeart, AiOutlineHeart} from "react-icons/ai";
import {FaPlay} from "react-icons/fa";
//create a new object called audio
export const Song = ({v}) => {
    const audio = new Audio()
    const selectedSongId = useSelector(state => state?.songReducer?.songId)
    const dispatch = useDispatch()
    //useNavigate to get song id.
    const nav = useNavigate()
    useEffect(()=>{console.log(selectedSongId)},[selectedSongId])
     return <div className="songContainer" >
             <img src={v?.cover} className="imgClass"/>
          <div className="titleContainer">
              {v?.title}
          </div>
         <div className="artistContainer">
             {v?.artist}
         </div>
         <button className="playButton"
                 onClick={
                     ()=>{
                         //dispatch the selected action.
                         dispatch(selectSong(v?.id))
                         //navigate to the selected song id page.
                         nav(`player/${v?.id}`)
                     }
                 }
         ><FaPlay /></button>
         <button className="favButton" onClick={
             () => {
                 dispatch(addFavSong(v?.id))
             }

         }><AiFillHeart /></button>
     </div>
}