//control playlist
import {useSelector} from "react-redux";

export const PlayerConsole = () => {

    const songList = useSelector(state => state?.songReducer?.songList)

    return <div>
        <button>Fetch</button>
        <p>{JSON.stringify(songList)}</p>
    </div>
}