import {
  createTheme,
  makeStyles,
  Pagination,
  ThemeProvider,
} from '@mui/material'
import { MagnifyingGlass } from 'phosphor-react'
import { useEffect, useState } from 'react'
import { getCharacters } from '../../api/rickAndMortyApi'
import { CharacterCard } from '../../components/CharacterCard'
import { ResultPage } from '../../models/ResultPage'
import {
  CharactersContainer,
  EmptyContainer,
  FilterContainer,
  FilterInput,
  PageContainer,
  PaginationContainer,
  SearchContainer,
} from './styles'
import glootie from '../../assets/images/Glootie.png'

export function Characters() {
  const [characters, setCharacters] = useState<ResultPage>()
  const [page, setPage] = useState(1)
  const [filterName, setFilterName] = useState('')

  useEffect(() => {
    getCharacters({ page, name: filterName }).then((response) => {
      setCharacters(response?.data)
    })
  }, [page, filterName])

  const theme = createTheme({
    palette: {
      primary: {
        main: '#97ce4c',
      },
    },
  })
  function handleChange(event, value: number) {
    setPage(value)
  }
  function handleOnChangeText(event) {
    setFilterName(event.target.value)
  }
  const EmptyCharacters = () => {
    return (
      <EmptyContainer>
        <img src={glootie} alt="" />
        <p>
          O Glootie acabou esquecendo de colocar o que voce pesquisou, ele
          estava desenvolvendo um app :O
        </p>
      </EmptyContainer>
    )
  }

  const Characters = () => {
    return (
      <CharactersContainer>
        {characters?.results?.map((character) => (
          <CharacterCard character={character} key={character.id} />
        ))}
      </CharactersContainer>
    )
  }

  return (
    <ThemeProvider theme={theme}>
      <PageContainer>
        <SearchContainer>
          <h2>Personagens</h2>
          <FilterContainer>
            {/* <MagnifyingGlass size={20} /> */}
            <FilterInput
              type={'text'}
              value={filterName}
              onChange={handleOnChangeText}
            />
          </FilterContainer>
        </SearchContainer>
        {characters === undefined ? <EmptyCharacters /> : <Characters />}
        <PaginationContainer>
          <Pagination
            count={characters?.info?.pages}
            page={page}
            onChange={handleChange}
            defaultPage={1}
            color="primary"
          />
        </PaginationContainer>
      </PageContainer>
    </ThemeProvider>
  )
}
