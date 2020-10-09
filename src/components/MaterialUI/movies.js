import React, { useEffect, useState}  from "react";
import CircularProgress from '@material-ui/core/CircularProgress';

import axios from "axios";
import Movie from "./movie"

const API_KEY = "a64b3cbe";

export default function Movies(props) {

  const API_URL = `https://www.omdbapi.com/?apikey=${API_KEY}&s=${props.searchTerm}`;
  const [movies, setMovies] = useState([{}]);
  
  useEffect(() => {

    axios.get(API_URL)
      .then(res => res.data['Search'])
      .then(data => setMovies(data))
      //.then(data => console.log(data))

  }, [API_URL]);

  if(!movies || movies.length === 0){
    return <div className="loader"><CircularProgress /></div>
  }

  return (
    <>     
      {movies.map(movie => 
        <Movie key={movie.imdbID} Movie={movie} />
      )}   

      <br /><hr/><br />

      {JSON.stringify(movies)}

    </>
  );
}

