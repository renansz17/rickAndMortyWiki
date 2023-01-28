import React, { useEffect, useState } from 'react'
import { getEpisodes } from '../../api/rickAndMortyApi'
import { ResultPageEpisode } from '../../models/ResultPage'

export function Episodes() {
  const [episodes, setEpisodes] = useState<ResultPageEpisode>()
  const params = {}
  useEffect(() => {
    getEpisodes(params).then((response) => setEpisodes(response?.data))
  }, [params])

  return (
    <>
      {episodes?.results?.map((episode) => (
        <p key={`episode-${episode?.id}`}>{episode.name}</p>
      ))}
    </>
  )
}
