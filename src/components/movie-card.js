import React from 'react'

const MovieCard = (props) => {
  const {title, overview, poster_path} = props.movie

  return (
    <div className='movie-card'>
      <h3>{title}</h3>
      <img src={`https://image.tmdb.org/t/p/w300${poster_path}`} />
    </div>
  )
}

export default MovieCard
