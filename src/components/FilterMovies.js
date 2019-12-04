import React, {useState} from 'react'
import Movies from '../files/movie'
import Localmovies from './Localmovies'
import './filtermovies.css'
import GenreButton from './GenreButton'
import favoriteMovies from '../files/favoriteMovies'

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

    const [favoriteMovie,
        setFavoriteMovie] = useState(favoriteMovies)
    const addToFavorite = (index) => {
        setFavoriteMovie([
            ...favoriteMovie,
            movies[index]
        ])
        console.log(favoriteMovie)
    }

    const filterSjangre = (val) => {
        setMovies(Movies.movie.filter(movie => movie.sjanger.includes(val), console.log(val)))
    }

    return (
        <div>
            <h1 className="test">Top 30 movies</h1>
            <div className="filtermovies">
                <div className="black"></div>
                <div>
                    <div className="search-sjangere">
                        <div class="input-search">
                            <input
                                type="text"
                                placeholder="Søk etter film. Eks: E.t"
                                onInput={filtermovie}
                                className="input"></input>
                        </div>
                        <div className="sjangere">
                            {genres.map((genre, i) => <GenreButton key={i} filterSjangre={filterSjangre} genre={genre}/>)}
                            <button className="sjanger">Alle</button>
                        </div>
                    </div>
                    <div className="movies">
                        {movies.map((movie, i) => <Localmovies
                            key={i}
                            nummer={i}
                            title={movie.title}
                            releaseYear={movie.releaseYear}
                            img={movie.img}
                            sjanger={movie.sjanger}
                            addToFavorite={addToFavorite}/>)
    }
                    </div>
                </div>
                <div className="black"></div>
            </div>
        </div>
    )
}

export default FilterMovies