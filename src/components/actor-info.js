import React from 'react'
import Axios from 'axios'
import styled from 'styled-components'
import ActorMovieList from './actor-movie-list'
import moment from 'moment'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
  margin-bottom: 16px;
`

const ActorBio = styled.p`
  flex: 1;
  flex-grow: 3;
  line-height: 1.5;
  padding: 0 16px;
  margin: 0;
`

const FilmTitle = styled.h3`
  padding-left: 8px;
`

const ProfileIcon = styled.svg`
  color: #ffffff;
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

    const {name, birthday, profile_path, biography} = this.state.actor

    return (
      <ActorPage>

        <ActorPageTop>
          <h2>{this.state.actor.name}</h2>
          <ActorBirthdate>{this.getYear(this.state.actor.birthday)}</ActorBirthdate>

          <ActorDetails>
            {
              profile_path
              ? <ActorImg src={`https://image.tmdb.org/t/p/w300${this.state.actor.profile_path}`} />
              : <ProfileIcon>
                  <FontAwesomeIcon icon='portrait' size="3x"/>
                </ProfileIcon>
            }

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
