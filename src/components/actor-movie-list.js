import React from 'react'
import Axios from 'axios'
import styled from 'styled-components'
import MovieCard from './movie-card'

const MovieList = styled.div`
  display: flex;
  flex-wrap: wrap;
`
const Movie = styled.div`
  display: flex;
  align-items: stretch;
`

class ActorMovieList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      movies: []
    }
  }

  async componentDidMount() {
    try {
      const { data } = await Axios.get(`/api/cast/${this.props.actorId}/movies`)
      this.setState({
        movies: data.cast
      })
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    return (
      <MovieList>
          {this.state.movies.map(movie => {
            return (
              <Movie key={movie.id}>
                <MovieCard movie={movie}/>
              </Movie>
            )
          })}
      </MovieList>
    )
  }

}

export default ActorMovieList




