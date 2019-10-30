import React,{useState, createContext} from 'react'

export const MovieContext = createContext();

export const MovieProvider = (props) => {

    const [movies, setMovies] = useState(
        [
            {
                name : "God of war",
                price: "#1500",
                id: 001
            },
            {
                name : "SING",
                price: "#2500",
                id: 002
            },
            {
                name : "Charlie and the Chocolate Factory",
                price: "#2000",
                id: 002
            }
        ]
    )

    return(
        
            <MovieContext.Provider value={[movies, setMovies]}>
                {props.children}
            </MovieContext.Provider>
    )

}