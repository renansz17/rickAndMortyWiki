import React, { useEffect, useState } from 'react'
import { getLocations } from '../../api/rickAndMortyApi'
import { ResultPageLocation } from '../../models/ResultPage'

export function Locals() {
  const [locations, setLocations] = useState<ResultPageLocation>()

  useEffect(() => {
    getLocations().then((response) => setLocations(response?.data))
  }, [])

  return (
    <>
      {locations?.results?.map((location) => (
        <p key={`location-${location?.id}`}>{location?.name}</p>
      ))}
    </>
  )
}
