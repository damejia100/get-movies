import React from 'react'
import Axios from 'axios'
import styled from 'styled-components'
import ActorMovieList from './actor-movie-list'
import moment from 'moment'

const ActorPage = styled.div`
  display: flex;
  flex-direction: column;
`

const ActorPageTop = styled.div`
  padding: 16px;
  background-color: #1e1e1e;
  border-radius: 4px;
  margin: 8px;
  display: flex;
  flex-direction: column;
`

const ActorPageBottom = styled.div`
  padding: 16px 0;
  border-radius: 4px;
`
const ActorBirthdate = styled.p`
  color: #9475ea;
  margin-top: 0px;
`
const ActorDetails = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`

const ActorImg = styled.img`
  flex: 1;
  flex-shrink: 1;
  border-radius: 4px;
  height: min-content;
  width: min-content;
`

const ActorBio = styled.p`
  flex: 1;
  flex-grow: 3;
  line-height: 1.5;
  padding: 0 36px;
`

const FilmTitle = styled.h3`
  padding-left: 8px;
`

class ActorInfo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      actorId: this.props.match.params.actorId,
      actor: {}
    }
    this.getYear = this.getYear.bind(this)
  }

  async componentDidMount() {
    try {
      const { data } = await Axios.get(`/api/cast/${this.state.actorId}`)
      this.setState({
        actor: data
      })
    } catch (error) {
      console.log(error)
    }
  }

  getYear(date) {
    return moment(date).format('MMMM Do YYYY');
  }

  render() {
    return (
      <ActorPage>

        <ActorPageTop>
          <h2>{this.state.actor.name}</h2>
          <ActorBirthdate>{this.getYear(this.state.actor.birthday)}</ActorBirthdate>

          <ActorDetails>
            <ActorImg src={`https://image.tmdb.org/t/p/w300${this.state.actor.profile_path}`} />

            <ActorBio>{this.state.actor.biography}</ActorBio>
          </ActorDetails>

        </ActorPageTop>

        <ActorPageBottom>
          <FilmTitle>Filmography</FilmTitle>
          <ActorMovieList actorId={this.state.actorId}/>
        </ActorPageBottom>

      </ActorPage>
    )
  }
}

export default ActorInfo
