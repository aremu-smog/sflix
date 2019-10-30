import React,{useState} from 'react'
import Movie from './Movie'
const Movies = () =>{

    const [movies, setMovies] = useState([
        {
            title : 'How to get away with murder',
            description : 'This is an intriguing movie about law, supense and some other things and PS: I will copy this over and over again to fill up the empty space except I am able to fill this up with enough content that will not require additional content',
            id: 1
        },
        {
            title : 'Game of Thrones: Season 2(Episode 1)',
            description : 'This is an intriguing movie about law, supense and some other things and PS: I will copy this over and over again to fill up the empty space except I am able to fill this up with enough content that will not require additional content',
            id: 2
        },
        
    ])

    const moviesComponent = movies.map(movie => {
        return(

            <Movie key={movie.id} title={movie.title} description={movie.description} />
        )
    })
    return(
        <section className="movies">
            {moviesComponent}
        </section>
    )
}

export default Movies