import React from "react";
import Axios from 'axios'

class SearchBar extends React.Component {
  constructor() {
    super();
    this.state = {
      query: '',
      results: [],
      loading: true
    };
    this.onChange = this.onChange.bind(this);
    this.search = this.search.bind(this);
  }

  onChange(event) {
    console.log('event.target.value>>', event.target.value)
    this.setState({
      query: event.target.value
    })
    this.search(this.state.query)
  }

  async search(query) {
    console.log('query in search function>>', query)
    try {
      const {data} = await Axios.get(`/api/movies/${query}`)
      console.log('data returned in search function>>', data)
      this.setState({
        results: data
      })
      console.log('this.state.results in search>>', this.state.results)
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
          {/* <i className="fa fa-search search-icon"/> */}
        </label>
        </form>
      </div>
    );
  }
}

export default SearchBar
