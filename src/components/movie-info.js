import React from 'react'
import Axios from 'axios'

class MovieInfo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      movie: {}
    }
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

  render() {
    const {title, overview, poster_path, release_date, genres} = this.state.movie

    return (
      <div>
        <h2>{title}</h2>
        <img src={`https://image.tmdb.org/t/p/w300${poster_path}`} />
        <p>{release_date}</p>
        <p>{overview}</p>

        {/* {genres.map((genre, idx) => {
            return (
              <p>{genre.name}</p>
            )
          })
        } */}
      </div>
    )
  }
}

export default MovieInfo

