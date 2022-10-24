import { makeStyles, Pagination } from '@mui/material'
import { MagnifyingGlass } from 'phosphor-react'
import { useEffect, useState } from 'react'
import { getCharacters } from '../../api/rickAndMortyApi'
import { CharacterCard } from '../../components/CharacterCard'
import { ResultPage } from '../../models/ResultPage'
import {
  CharactersContainer,
  FilterContainer,
  FilterInput,
  PageContainer,
  PaginationContainer,
  SearchContainer,
} from './styles'

export function Characters() {
  const [characters, setCharacters] = useState<ResultPage>()
  const [page, setPage] = useState(1)

  function handleChange(event, value: number) {
    setPage(value)
  }

  useEffect(() => {
    getCharacters({ page }).then((response) => {
      setCharacters(response?.data)
    })
  }, [page])

  return (
    <PageContainer>
      <SearchContainer>
        <h2>Personagens</h2>
        <FilterContainer>
          <MagnifyingGlass size={20} />
          <FilterInput type={'text'} />
        </FilterContainer>
      </SearchContainer>
      <CharactersContainer>
        {characters?.results?.map((character, index) => (
          <CharacterCard character={character} key={index} />
        ))}
      </CharactersContainer>
      <PaginationContainer>
        <Pagination
          count={characters?.info?.pages}
          page={page}
          onChange={handleChange}
          defaultPage={1}
        />
      </PaginationContainer>
    </PageContainer>
  )
}
