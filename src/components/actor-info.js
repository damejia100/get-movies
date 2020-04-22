import React from 'react'
import Axios from 'axios'
import styled from 'styled-components'
import ActorMovieList from './actor-movie-list'


class ActorInfo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      actorId: this.props.match.params.actorId,
      actor: {}
    }
  }

  async componentDidMount() {
    try {
      const { data } = await Axios.get(`/api/cast/${this.state.actorId}`)
      this.setState({
        actor: data
      })
      // console.log('this.state in ActorInfo>>', this.state)
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    return (
      <div>
        <h2>{this.state.actor.name}</h2>
        <p>{this.state.actor.birthday}</p>
        <p>{this.state.actor.biography}</p>
        <ActorMovieList actorId={this.state.actorId}/>
      </div>
    )
  }
}

export default ActorInfo
