import React, { useEffect, useState } from 'react'
import { getEpisodes } from '../../api/rickAndMortyApi'
import { ResultPageEpisode } from '../../models/ResultPage'

export function Episodes() {
  const [episodes, setEpisodes] = useState<ResultPageEpisode>()

  useEffect(() => {
    getEpisodes().then((response) => setEpisodes(response?.data))
  }, [])

  return (
    <>
      {episodes?.results?.map((episode) => (
        <p key={`episode-${episode?.id}`}>{episode.name}</p>
      ))}
    </>
  )
}
