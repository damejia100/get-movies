import React from 'react'
import MovieCard from './movie-card'

const SearchResults = (props) => {
  const {results} = props.results

  return (
    <div className='search-result-list'>
      {
        results.map(movie => {
          return (
            <MovieCard key={movie.id} movie={movie}/>
          )
        })
      }
    </div>
  )

}

export default SearchResults
