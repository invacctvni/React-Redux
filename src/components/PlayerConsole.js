//control playlist
import {useDispatch, useSelector} from "react-redux";
import {fetchAllSongs} from "../actions/songAction";

export const PlayerConsole = () => {
    //pick state from store
    const songList = useSelector(state => state?.songReducer?.songList)
    //pick actions from store
    const dispatch = useDispatch()

    return <div>
        <button
        onClick={()=>dispatch(fetchAllSongs())}
        >Fetch</button>
        <p>{JSON.stringify(songList)}</p>
    </div>
}
