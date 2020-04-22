import React from 'react'
import Axios from 'axios'

class ActorInfo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      movies: []
    }
  }

  async componentDidMount() {
    console.log('this.state in ActorInfo>>', this.state)
    try {
      const { data } = await Axios.get(`/api/cast/${actor.id}`)
      this.setState({
        movies: data.cast
      })
    } catch (error) {
      console.log(error)
    }
  }

  render() {

    return (
      <div>
        <h2>
          Filmography
        </h2>
        {/* {
          this.state.cast.map(actor => {
          return (
            <div key={actor.id}> {actor.name} </div>
          )
          })
        } */}
      </div>
    )
  }
}

export default ActorInfo
