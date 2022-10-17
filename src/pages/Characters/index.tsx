import { useEffect, useState } from "react";
import { getCharacters } from "../../api/rickAndMortyApi";
import { Character } from "../../models/Character";
import { ResultPage } from "../../models/ResultPage";
import { CharacterContainer, CharacterImage, CharactersContainer, PageContainer } from "./styles";

export function Characters() {
    const [characters, setCharacters] = useState<ResultPage>();

    useEffect(() => {
        getCharacters().then((response) => {
            setCharacters(response?.data);
        })
    }, []);
    console.log(characters);
    

    return  (
        <PageContainer>
            <CharactersContainer>
                {characters?.results?.map(character => (
                        <CharacterContainer>
                            <CharacterImage src={character.image}/>
                            <h3>{character.name}</h3>
                        </CharacterContainer>
                        )
                    )
                }
            </CharactersContainer>
        </PageContainer>
    );
}