import React, {useState} from 'react'
import Movies from '../files/movie'
import Localmovies from './Localmovies'
import './filtermovies.css'
import GenreButton from './GenreButton'

const FilterMovies = () => {
    const [movies,
        setMovies] = useState(Movies.movie)
    const filtermovie = (e) => {
        setMovies(Movies.movie.filter(movie => movie.title.toLowerCase().includes(e.target.value.toLowerCase())))
    }

    const genres = [
        "Comedy",
        "Thriller",
        "Adventure",
        "Action",
        "Crime",
        "Fantasy",
        "Romance",
        "Family",
        "Sci-Fi"
    ]

    const filterSjangre = (val) => {
        setMovies(Movies.movie.filter(movie => movie.sjanger.includes(val), console.log(val)))
    }

    return (
        <div className="filtermovies">
            <div className="search-sjangere">
                <div className="input-search">
                    <input
                        type="text"
                        placeholder="Søk etter film"
                        onInput={filtermovie}
                        className="input"/>
                </div>
                <div className="sjangere">
                    {genres.map(genre => <GenreButton filterSjangre={filterSjangre} genre={genre}/>)}
                </div>
            </div>
            <div className="movies">
                {movies.map((movie, i) => <Localmovies
                    key={i}
                    title={movie.title}
                    releaseYear={movie.releaseYear}
                    img={movie.img}
                    sjanger={movie.sjanger}/>)
}
            </div>
        </div>
    )
}

export default FilterMovies