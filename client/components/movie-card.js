import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Card = styled.div`
  background-color: #1e1e1e;
  border-radius: 4px;
  text-decoration: none;
  padding: 16px;
  margin: 8px;
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  box-shadow: 0 8px 6px -6px black;
`

const MovieTitle = styled.h3`
  margin-top: 12px;
  margin-bottom: 12px;
  color: #ffffff;
`

const MovieLink = styled(Link)`
  text-decoration: none;
`;

const MovieReleaseDate = styled.p`
  color: #9475ea;
`

const MovieImage = styled.img`
  border-radius: 4px;
`

const FilmIcon = styled.svg`
  color: #ffffff;
`


class MovieCard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      movie: props.movie,
      movieReleaseDate: props.movie.release_date
    }
    this.getYear = this.getYear.bind(this)
  }

  componentDidMount() {
    this.setState({
      movieReleaseDate: this.getYear(this.state.movieReleaseDate)
    })
  }

  getYear(date) {
    return new Date(date).getFullYear()
  }

  render() {
    const {id, title, poster_path} = this.state.movie
    const linkTo = `/${id}`

    return (
      <Card>
        <MovieLink to={linkTo}>
          <MovieTitle>{title}</MovieTitle>
          <MovieReleaseDate>{this.state.movieReleaseDate}</MovieReleaseDate>
          { poster_path
            ? <MovieImage src={`https://image.tmdb.org/t/p/w300${poster_path}`} />
            : <FilmIcon>
                <FontAwesomeIcon icon='film' size="3x"/>
              </FilmIcon>
          }
        </MovieLink>
      </Card>
    )
  }
}

export default MovieCard
