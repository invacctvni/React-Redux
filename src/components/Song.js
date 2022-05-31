import "./Song.scss"

export const Song = ({v}) => {
     return <div className="songContainer">
         <img src={v?.cover}/>
          <div>
              {v?.title}
          </div>
         <div>
             {v?.artist}
         </div>
     </div>
}