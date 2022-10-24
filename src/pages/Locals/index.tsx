import React, { useEffect, useState } from 'react'
import { getLocations } from '../../api/rickAndMortyApi'
import { ResultPageLocation } from '../../models/ResultPage'
import { LocationPage } from './styles'

export function Locals() {
  const [locations, setLocations] = useState<ResultPageLocation>()

  useEffect(() => {
    getLocations().then((response) => setLocations(response?.data))
  }, [])

  return (
    <LocationPage>
      {locations?.results?.map((location) => (
        <p key={`location-${location?.id}`}>{location?.name}</p>
      ))}
    </LocationPage>
  )
}
