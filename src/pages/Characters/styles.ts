import styled from 'styled-components'

export const PageContainer = styled.div`
  padding: 2rem;
  background-color: #121214;
`
export const CharactersContainer = styled.div`
  margin-top: 2rem;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 2.5rem;
`
export const SearchContainer = styled.div`
  display: flex;
  justify-content: space-between;
  color: white;
`
export const FilterContainer = styled.div`
  margin-right: 10px;
  display: flex;

  svg {
    margin-right: 5px;
  }
`

export const FilterInput = styled.input`
  background-color: white;
  border: none;
  border-radius: 20px;
  padding-left: 1rem;
  height: 1.5rem;
  &:focus {
    outline: 2px solid #97ce4c;
  }
`
export const FilterButton = styled.button`
  background-color: #97ce4c;
  color: white;
  border: none;
  border-radius: 20px;
  width: 50px;
`
export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
