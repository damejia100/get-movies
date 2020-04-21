import React from 'react'
import { Link } from 'react-router-dom'

const MovieCard = (props) => {
  console.log('props in movieCard>>', props)
  const {id, title, poster_path} = props.movie
  const linkTo = `/${id}`

  return (
    <div className='movie-card'>
      <Link to={linkTo} movie={props.movie}>
        <h3>{title}</h3>
        <img src={`https://image.tmdb.org/t/p/w300${poster_path}`} />
      </Link>
    </div>
  )
}

export default MovieCard
