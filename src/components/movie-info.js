import React from 'react'
import Axios from 'axios'
import CastList from './cast-list'
import styled from 'styled-components'

const MoviePage = styled.div`
  display: flex;
  flex-direction: row;
`

const MovieInfoLeft = styled.div`
  flex: 1;
`

const MovieInfoRight = styled.div`
  flex: 1;
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
    const {title, overview, poster_path, release_date, id} = this.state.movie

    return (
      <MoviePage>
        <MovieInfoLeft>
          <h2>{title}</h2>
          <img src={`https://image.tmdb.org/t/p/w300${poster_path}`} />
          <p>{this.getYear(release_date)}</p>
          <p>{overview}</p>
          </MovieInfoLeft>
          <MovieInfoRight>
            <CastList movieId={this.props.match.params.movieId}/>
          </MovieInfoRight>
      </MoviePage>
    )
  }
}

export default MovieInfo

