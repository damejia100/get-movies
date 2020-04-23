import React from 'react'
import Axios from 'axios'
import CastList from './cast-list'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const MoviePage = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`

const MovieInfoLeft = styled.div`
  flex: 1;
  background-color: #1e1e1e;
  padding: 16px;
  margin: 8px;
  border-radius: 4px;
  height: fit-content;
`

const MovieInfoRight = styled.div`
  flex: 1;
  background-color: #1e1e1e;
  padding: 16px;
  margin: 8px;
  border-radius: 4px;
  height: fit-content;
`

const MoviePoster = styled.img`
  border-radius: 4px;
`

const MovieReleaseDate = styled.p`
  color: #9475ea;
`

const MovieOverview = styled.p`
  line-height: 1.5;
`

class MovieInfo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      movie: {}
    }
    this.getYear = this.getYear.bind(this)
  }

  async componentDidMount() {
    try {
      const { data } = await Axios.get(`/api/movies/${this.props.match.params.movieId}`)
      this.setState({
        movie: data
      })
    } catch (error) {
      console.log(error)
    }
  }

  getYear(date) {
    return new Date(date).getFullYear()
  }

  render() {
    const {title, overview, poster_path, release_date, id, backdrop_path} = this.state.movie

    return (
      <MoviePage>
        <MovieInfoLeft>
          <h2>{title}</h2>
          <MovieReleaseDate>{this.getYear(release_date)}</MovieReleaseDate>
          { poster_path
            ? <MoviePoster src={`https://image.tmdb.org/t/p/w300${poster_path}`} />
            : <FontAwesomeIcon icon='film' size="3x" />
          }
          <MovieOverview>{overview}</MovieOverview>
        </MovieInfoLeft>

        <MovieInfoRight>
          <CastList movieId={this.props.match.params.movieId}/>
        </MovieInfoRight>
      </MoviePage>
    )
  }
}

export default MovieInfo

