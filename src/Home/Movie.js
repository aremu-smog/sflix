import React,{useContext} from 'react'
import {WatchlistContext} from '../Contexts/WatchlistContext'




const Movie = ({title, description}) =>{


    const [watchlist, setwatchList] = useContext(WatchlistContext)

    const addToWatchList = (listTitle, listDescription) =>{
    
        setwatchList([...watchlist, {
            title:listTitle, description: listDescription
        }])
    }

    return(
        <div class='container'>
            <div className="movie">
                    <div class="poster"></div>
                    <div class="info">
                        <div class="title">
                            <h2>{title}</h2>
                        </div>
                        <div class="description">
                            <p>{description}</p>

                        </div>
                        <div class="action">
                            <button onClick={()=>addToWatchList(title,description)}>Add to Watchlist</button>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default Movie