import React from 'react'
import MovieCard from './movie-card'
import styled from 'styled-components'

const SearchResultsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-top: 32px;
`

const SearchResults = (props) => {
  const { results } = props.results

  return (
    <SearchResultsList>
      { results.map(movie => {
          return (
            <MovieCard key={movie.id} movie={movie}/>
          )
        })
      }
    </SearchResultsList>
  )

}

export default SearchResults
