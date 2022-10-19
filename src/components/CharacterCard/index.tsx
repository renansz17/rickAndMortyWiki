import { Character } from '../../models/Character'
import { CharacterContainer, CharacterImage, InfoContainer } from './styles'

interface CharacterCardProps {
  character?: Character
}

export function CharacterCard({ character }: CharacterCardProps) {
  return (
    <CharacterContainer>
      <CharacterImage src={character?.image} />
      <InfoContainer>
        <h4>{character?.name}</h4>
        <p>{character?.status}</p>
        <p>{character?.location.name}</p>
      </InfoContainer>
    </CharacterContainer>
  )
}
