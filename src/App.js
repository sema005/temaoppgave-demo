import React from 'react';
import './App.css';
import { Router, Link } from "@reach/router"
import Checklist from './components/Checklist'
import FilterMovies from './components/FilterMovies';

const App = () => {

  return(
    <div className="main">
      <FilterMovies />
    </div>
  )
}

export default App;
