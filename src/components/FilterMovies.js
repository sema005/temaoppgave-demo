import React, {useState} from 'react'
import Movies from '../files/movie'
import Localmovies from './Localmovies'
import './filtermovies.css'

const FilterMovies = () => {
    const [movies,
        setMovies] = useState(Movies.movie)
    const filtermovie = (e) => {
        setMovies(Movies.movie.filter(movie => movie.title.toLowerCase().includes(e.target.value.toLowerCase())))
    }
   
    return (
        <div className="filtermovies">
            <div className="input-search">
                <input
                    type="text"
                    placeholder="Søk etter film"
                    onInput={filtermovie}
                    className="input"/>
                <div className="sjangere">
                    <button className="sjanger" value="Action">Action</button>
                    <button className="sjanger" value="Adventure">Adventure</button>
                    <button className="sjanger" value="Comedy">Comedy</button>
                    <button className="sjanger" value="Thriller">Thriller</button>
                    <button className="sjanger" value="Crime">Crime</button>
                    <button className="sjanger" value="Drama">Drama</button>
                    <button className="sjanger" value="Fantasy">Fantasy</button>
                    <button className="sjanger" value="Romance">Romance</button>
                    <button className="sjanger" value="Sci-Fi">Sci-Fi</button>
                    <button className="sjanger" value="Family">Family</button>
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