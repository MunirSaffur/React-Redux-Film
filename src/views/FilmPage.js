import React, { useEffect, useState } from 'react'
import { useLocation } from "react-router-dom";
import api from '../api';

export default function FilmPage() {
    const location = useLocation();
    const filmID = location.state.imdbID;
    const [filmData, setFilmData] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    useEffect(()=>{
        api.get(`/?i=${filmID}&apikey=32e9d15`)
        .then(res=>{
            setFilmData(res.data)
            setIsLoading(false)
        })
        .catch(err=>console.error(err))

    }, [])
  return (
    
<div id="content_hero" class="center-content hero-ontop" style={{ backgroundImage: `url(${filmData.Poster})` }}>
  <div style={{ backgroundImage: `url(${filmData.Poster})` }}></div>

  <div class="container">
    <div class="row blurb scrollme animateme" data-when="exit" data-from="0" data-to="1" data-opacity="0" data-translatey="100">
      <div class="col-md-9">
        <span class="title">{filmData.Year}</span>
        <h1>{filmData.Title}</h1>
        <p>{filmData.Plot}</p>
        <p>Actors: {filmData.Actors}</p>
        <p>Director: {filmData.Director}</p>
        <p>Writer: {filmData.Writer}</p>
        <p>Released: {filmData.Released}</p>
        <p>Runtime: {filmData.Runtime}</p>
        <p>Type: {filmData.Type}</p>
        <p>Imdb Rating: {filmData.imdbRating}</p>
      </div>
    </div>
  </div>
</div>
  )
}
