import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Card = styled.div`
  background-color: #0B3954;
  border-radius: 8px;
  text-decoration: none;
  padding: 16px;
  margin: 16px;
  width: 325px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const MovieTitle = styled.h3`
  color: #ffffff;
`

const MovieLink = styled(Link)`
  text-decoration: none;
`;

const MovieCard = (props) => {
  const {id, title, poster_path, backdrop_path} = props.movie
  const linkTo = `/${id}`

  return (
    <Card>
      <MovieLink to={linkTo}>
        <MovieTitle>{title}</MovieTitle>
        {
          `${poster_path}`
          ? <img src={`https://image.tmdb.org/t/p/w300${poster_path}`} />
          : <img src={`https://image.tmdb.org/t/p/w300${backdrop_path}`} />
        }
      </MovieLink>
    </Card>
  )
}

export default MovieCard
