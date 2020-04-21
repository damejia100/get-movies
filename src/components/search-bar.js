import React from "react"
import Axios from 'axios'
import SearchResults from './search-results'
import TopMovies from "./top-movies";

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
    this.search(this.state.query)
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
      <div>
        <form>
          <label className="search-label">
          <input
            type="text"
            name="query"
            id="search-input"
            placeholder="Search..."
            value={this.state.query}
            onChange={this.onChange}
          />
        </label>
        {this.state.results.length !== 0 &&
          <SearchResults results={this.state.results}/>
        }

        {/* {
          this.state.results.length === 0 ? (
            <TopMovies/>
          ) : (
            <SearchResults results={this.state.results}/>
          )
        } */}

        </form>
      </div>
    );
  }
}

export default SearchBar
