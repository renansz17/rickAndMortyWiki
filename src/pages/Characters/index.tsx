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
  SearchContainer,
} from './styles'

export function Characters() {
  const [characters, setCharacters] = useState<ResultPage>()

  useEffect(() => {
    getCharacters().then((response) => {
      setCharacters(response?.data)
    })
  }, [])

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
    </PageContainer>
  )
}
