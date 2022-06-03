import {useSelector} from "react-redux";

export const FavSong = () => {
    const favSong = useSelector(state => state?.songReducer?.songIdFav)
    const songList = useSelector(state => state?.songReducer?.songList)
    return <div>
        <h2>Fav Song Album</h2>
        <h2>{JSON.stringify(favSong)}</h2>
        <h3>Hello</h3>
        <section>

        </section>
    </div>
}