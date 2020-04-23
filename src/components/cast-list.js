import React from 'react'
import Axios from 'axios'
import {Link} from 'react-router-dom'
import styled from 'styled-components'

const Cast = styled.div`
  display: inline-flex;
  flex-direction: row;
  border: 1px solid #f9a824;
  padding: 8px;
  margin: 8px;
  border-radius: 4px;
  &:hover {
    border: 1px solid #9475ea;
  }
`

const ActorLink = styled(Link)`
  text-decoration: none;
  color: #ffffff;
`;

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
            <Cast key={actor.id}>
              <ActorLink to={linkTo} actor={actor}>
                <div key={actor.id}>
                  {actor.name}
                </div>
              </ActorLink>
            </Cast>
          )
        })
      }
      </div>
    )
  }
}

export default CastList
