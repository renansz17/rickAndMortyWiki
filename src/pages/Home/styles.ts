import styled from 'styled-components'
export const MainContainer = styled.main`
  background-color: #121214;
  font-family: 'Poppins', sans-serif;
  min-height: calc(100vh - 82px - 65px);
`

export const Divider = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 50%;
  }
`

export const TextContainer = styled.div`
  margin-left: 2rem;

  h1 {
    align-self: flex-start;
    color: white;
    font-size: 50px;
  }

  p {
    color: #97ce4c;
    font-size: 18px;
    font-weight: normal;
  }
`

export const CharactersContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
`
export const CharacterImage = styled.img`
  width: 90px;
  border-radius: 30px;
`

export const TrailerContainer = styled.div`
  color: white;
  display: flex;
  justify-content: space-around;
  align-items: center;
  iframe {
    padding: 0.2rem;
    border-radius: 22px;
    border: 2px solid #97ce4c;
    margin-right: 20px;
  }

  p {
    color: white;
    font-size: 22px;
  }
  span {
    color: #97ce4c;
  }
`
