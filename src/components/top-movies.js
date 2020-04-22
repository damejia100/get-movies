import React from 'react'
import Axios from 'axios'
import MovieCard from './movie-card'
import styled from 'styled-components'

const SectionTitle = styled.h2`
  font-size: 36px;
`
const TopMoviesList = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
`


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
        <SectionTitle>Top Movies</SectionTitle>
        <TopMoviesList>
          {this.state.topTwenty.map(movie => {
            return (
              <MovieCard key={movie.id} movie={movie}/>
            )
          })}
        </TopMoviesList>

      </div>
    )

  }

}


export default TopMovies
