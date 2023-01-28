import styled from 'styled-components'

export const PageContainer = styled.div`
  padding: 2rem;
  background-color: #121214;
  font-family: 'Poppins', sans-serif;
  min-height: calc(100vh - 82px - 65px);
`
export const CharactersContainer = styled.div`
  margin-top: 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  row-gap: 1rem;
  justify-content: center;
  align-items: center;
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
    outline: none;
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
  .MuiPaginationItem-root {
    color: white;
  }
  margin-top: 2rem;
`
export const EmptyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
  img {
    width: 160px;
    border-radius: 32px;
  }
  color: white;
`
