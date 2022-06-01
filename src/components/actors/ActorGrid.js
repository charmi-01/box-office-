/* eslint-disable react/function-component-definition */
import React from 'react'
import ActorCard from './ActorCard'
import IMAGE_NOT_FOUND from '../../image/not-found.png'

const ActorGrid = ({data}) => {
  return (
    <div>
      {data.map(({person})=><ActorCard key={person.id} name={person.name} 
      country={person.country? person.country.name: null}
      deathday={person.deathday}
      birthday={person.birthday}
      gender={person.gender}
      image={person.image ? person.image.medium : IMAGE_NOT_FOUND}/>)}
    </div> 
  )
}

export default ActorGrid