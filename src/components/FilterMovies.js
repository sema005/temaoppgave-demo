import React, {useState} from 'react'
import Movies from '../files/movie'
import Localmovies from './Localmovies'
import './filtermovies.css'

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
            <input type="text" placeholder="Søk etter film" onInput={filtermovie} className="input"/>
            <div className="movies">
                {
                    movies.map(
                        (movie, i) =>
                        <Localmovies 
                            key={i}
                            title={movie.title}
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