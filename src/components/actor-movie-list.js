import React from 'react'
import Axios from 'axios'
import styled from 'styled-components'
import MovieCard from './movie-card'


class ActorMovieList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      movies: []
    }
  }

  async componentDidMount() {
    // console.log('this.props>>', this.props)
    try {
      const { data } = await Axios.get(`/api/cast/${this.props.actorId}/movies`)
      this.setState({
        movies: data.cast
      })
      // console.log('data returned to front>>', data)
      // console.log('this.state in ActorMovieList>>', this.state)
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    return (
      <div>

        <h2>
          Filmography
        </h2>
          {this.state.movies.map(movie => {
            return (
              <div key={movie.id}>
                <MovieCard movie={movie}/>
              </div>
            )
          })}
      </div>
    )
  }

}

export default ActorMovieList




