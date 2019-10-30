import React,{useState, createContext} from 'react'

export const WatchlistContext = createContext()


export const WatchlistProvider = (props) =>{

    const [watchlist, setWatchlist] = useState([])

    return(
        <WatchlistContext.Provider value={[watchlist,setWatchlist]}>
            {props.children}
        </WatchlistContext.Provider>
    )

}