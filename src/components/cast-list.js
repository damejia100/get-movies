import React from 'react'
import Axios from 'axios'
import {Link} from 'react-router-dom'

class CastList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      cast: []
    }
  }

  async componentDidMount() {
    try {
      const { data } = await Axios.get(`/api/movies/${this.props.movieId}/cast`)
      this.setState({
        cast: data.cast
      })
    } catch (error) {
      console.log(error)
    }
  }

  render() {

    return (
      <div>
        <h2>
          Cast List
        </h2>
        {this.state.cast.map(actor => {
          const linkTo = `/cast/${actor.id}`

          return (
            <div className='cast-list' key={actor.id}>
              <Link to={linkTo} actor={actor}>
                <div key={actor.id}>
                  {actor.name}
                </div>
              </Link>
            </div>
          )
        })
      }
      </div>
    )
  }
}

export default CastList
