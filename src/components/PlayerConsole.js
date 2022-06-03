//control playlist
import {useDispatch, useSelector} from "react-redux";
import {fetchAllSongs, selectSong} from "../actions/songAction";
import {Song} from "./Song";
import "./PlayerConsole.scss";
import {useEffect} from "react";
export const PlayerConsole = () => {
    //pick state from store
    const songList = useSelector(state => state?.songReducer?.songList)
    const selectedSongId = useSelector(state => state?.songReducer?.songId)

    //pick actions from store
    const dispatch = useDispatch()
    //fetch work immediately after components mounts. componentDid mount.
    useEffect(()=>{dispatch(fetchAllSongs())}, [])
    const favSong = useSelector(state => state?.songReducer?.songIdFav)
    return <div>
        <p>The selected id is: {selectedSongId}</p>
        {/*<p>{JSON.stringify(songList)}</p>*/}
        {/*map song*/}
        <section className="sectionSong">{songList?.map((v,i)=>
                <Song v={v}
                 key={i} />)
        }</section>
        <div>{JSON.stringify(favSong)}</div>
            <div className="sectionSong">
                {/*{console.log("song id is ", favSong)}*/}
                {/*//naming convention favSongArr*/}
                {songList.filter(value => favSong.includes(value?.id)).map((v,i)=>
                <Song v={v} key={i} />)
                }
            </div>
        <div className="sectionSong">
            {/*{console.log("song id is ", favSong)}*/}
            {/*//naming convention favSongArr*/}
            {songList.filter(value => value?.fav).map((v,i)=>
                <Song v={v} key={i} />)
            }
        </div>
    </div>
}
