import {useDispatch, useSelector} from "react-redux";
import {useLocation, useParams} from "react-router-dom";
import "./Song.scss"
import {useEffect, useState} from "react";
import {fetchOneSong} from "../actions/songAction";
export const Player = () => {
    //use it to get id.
    const params = useParams()
    //call the function in action.
    const dispatch = useDispatch()

    const [play,setPlay] = useState(true)

    const selectedSongObj = useSelector(state => state?.songReducer?.songSingleObj)

    useEffect(()=>{
        dispatch(fetchOneSong(params?.id))
    },[])

    return <div>
        <h1>Player: {params?.id}</h1>
        <audio id="myAudio" src={selectedSongObj?.stream} autoPlay={true}></audio>
        <div className="songContainer">
            <img src={selectedSongObj?.cover} className="imgClass"/>
            <div className="titleContainer">
                {selectedSongObj?.title}
            </div>
            <div className="artistContainer">
                {selectedSongObj?.artist}
            </div>
            <button style={{display: play? 'none':'inline-block'}} onClick={()=>{
                document.getElementById("myAudio").play()
            }}>Play</button>
            <button style={{display: play? 'inline-block':'none'}} onClick={()=>{
                document.getElementById("myAudio").pause()
            }}>Stop</button>
        </div>
    </div>
}