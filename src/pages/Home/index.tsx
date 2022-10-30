import portal from '../../assets/images/portal.png'
import pickle from '../../assets/images/pickle.png'
import {
  Divider,
  FooterContainer,
  MainContainer,
  TextContainer,
  TrailerContainer,
} from './styles'

export function Home() {
  return (
    <MainContainer>
      <div>
        <Divider>
          <img src={portal} alt="" />
          <TextContainer>
            <h1>
              Feito de um fã <br /> para fans{' '}
            </h1>
            <p>
              Explore mais o mundo de Rick and Morty, vendo onde seus
              personagens moram, quantos anos tem ou até mesmo se estão vivos ou
              mortos...
            </p>
          </TextContainer>
        </Divider>
      </div>
    </MainContainer>
  )
}
