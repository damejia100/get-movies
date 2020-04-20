import React from 'react'
import Axios from 'axios'

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
              <div key={movie.id}>{movie.title}</div>
            )
          })}
        </div>

      </div>
    )

  }

}


export default TopMovies
