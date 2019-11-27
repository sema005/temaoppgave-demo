import React from 'react';
import './App.css';
import { Router, Link } from "@reach/router"
import Checklist from './components/Checklist'
import FilterMovies from './components/FilterMovies';

const App = () => {

  return(
    <div>
      <header>
        <nav className="top-nav">
          <Link to="/">Checklist</Link>
          <Link to="movies">Movies</Link>
        </nav>
      </header>
      <Router>
        <Checklist path="/" /> 
        <FilterMovies path="movies" />
      </Router>
    </div>
  )
}

export default App;
