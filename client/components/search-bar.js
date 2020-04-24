import React from "react"
import Axios from 'axios'
import SearchResults from './search-results'
import TopMovies from "./top-movies";
import styled from 'styled-components'

const Input = styled.input`
  padding: 8px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  width: 250px;
`;

const SearchSection = styled.div`
  display: flex;
  margin: 32px;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`

class SearchBar extends React.Component {
  constructor() {
    super();
    this.state = {
      query: '',
      results: []
    };
    this.onChange = this.onChange.bind(this);
    this.search = this.search.bind(this);
  }

  onChange(event) {
    this.setState({
      query: event.target.value
    })
    if (event.target.value) {
      this.search(this.state.query)
    }
    else {
      this.setState({
        results: []
      })
    }
  }

  async search(query) {
    try {
      const {data} = await Axios.get(`/api/movies/search/${query}`)
      this.setState({
        results: data
      })
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    return (
      <SearchSection>
        <Form>
          <label className="search-label">
          <Input
            type="text"
            name="query"
            id="search-input"
            placeholder="Search for a movie, like Cars, Parasite, etc."
            value={this.state.query}
            onChange={this.onChange}
          />
        </label>
        {this.state.results.length !== 0 &&
          <SearchResults results={this.state.results}/>
        }
        </Form>
      </SearchSection>
    );
  }
}

export default SearchBar
