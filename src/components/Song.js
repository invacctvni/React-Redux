import "./Song.scss"
import {selectSong} from "../actions/songAction";
import {useDispatch, useSelector} from "react-redux";
import {songReducer} from "../reducers/songReducer";

export const Song = ({v}) => {

    const selectedSongId = useSelector(state => state?.songReducer?.songId)
    console.log("the selectedSongId==>",selectedSongId)
    const dispatch = useDispatch()


     return <div className="songContainer" onClick={()=>{
         dispatch(selectSong(v.id))}
     }>

             <img src={v?.cover} className="imgClass"/>
          <div className="titleContainer">
              {v?.title}
          </div>
         <div className="artistContainer">
             {v?.artist}
         </div>
     </div>
}