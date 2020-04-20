import React from 'react'
import Axios from 'axios'
import MovieCard from './movie-card'

class TopMovies extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      topTwenty: []
    }
  }

  async componentDidMount() {
    try {
      const {data} = await Axios.get('/api/movies')
      this.setState({
        topTwenty: data.results
      })
      // console.log('this.state.topTwenty>>', this.state.topTwenty)
    }
    catch (err) {
      console.log(err)
    }
  }
  render() {

    return (
      <div>
        <h2>Top Movies</h2>
        <div className='top-movies-list'>
          {this.state.topTwenty.map(movie => {
            return (
              <MovieCard key={movie.id} movie={movie}/>
            )
          })}
        </div>

      </div>
    )

  }

}


export default TopMovies
