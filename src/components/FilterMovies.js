import React, {useState} from 'react'
import Movies from '../files/Movies'
import Localmovies from './Localmovies'
import './FilterMovies.css'

const FilterMovies = () => {
    const [movies, setMovies] =useState(Movies.movies)
    const filtermovie = (e) => {
        setMovies(
            Movies.movies.filter(
                movie => movie.titel.toLocaleLowerCase().includes(e.target.value)
            )
        )
    }

    return(
        <div className="filtermovies">
            <div className="movies">
            <input type="text" placeholder="Søk etter film" onInput={filtermovie} className="input"/>
                {
                    movies.map(
                        (movie, i) =>
                        <Localmovies 
                            key={i}
                            titel={movie.titel}
                            releaseYear={movie.releaseYear}
                            img={movie.img}
                        />
                    )
                }
            </div>
        </div>
    )
}

export default FilterMovies