import Header from "../../components/Header";
import portal from "../../assets/images/portal.png";
import { CharacterImage, CharactersContainer, Divider, MainContainer, TextContainer, TrailerContainer } from "./styles";
import { useEffect, useState } from "react";
import { Character } from "../../models/Character";
import { getCharacter, getCharacters } from "../../api/rickAndMortyApi";
import { ResultPage } from "../../models/ResultPage";
import { useKeenSlider } from "keen-slider/react"

export function Home() {
    const [rick, setRick] = useState<Character>();
    const [morty, setMorty] = useState<Character>();
    const [characters, setCharacters] = useState<ResultPage>();

    useEffect(() => {
        getCharacter(1).then((response) => {
            setRick(response?.data)
        });
        getCharacter(2).then((response) => {
            setMorty(response?.data)
        });
        const rick = 'rick'
        getCharacters({name: 'morty'}).then((response) => {
            setCharacters(response?.data)
        });
    }, []);

    return (
        <MainContainer>
            <Header />
            <div>
                <Divider>
                    <img src={portal} alt="" />
                    <TextContainer>
                        <h1>Feito de um fã <br /> para fans </h1>
                        <p>
                            Explore mais o mundo de Rick and Morty,
                            vendo onde seus personagens moram, quantos anos tem ou até mesmo se estão vivos ou mortos...
                        </p>
                    </TextContainer>
                </Divider>
            </div>
            <TrailerContainer>
                <h2>A sexta tempoarada está no ar, se ainda não viu, veja o trailer :D</h2>
            <iframe width="800" height="500" 
            src="https://www.youtube.com/embed/6Zt15L7Gy3U" 
            title="YouTube video player" frameorder="0" 
            allow="accelerometer; autoplay; clipboard-write; 
            encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen/>
            </TrailerContainer>
            <CharactersContainer >
                {characters?.results?.map((it, key) => (
                    <CharacterImage src={it.image} />
                ))}
            </CharactersContainer>
        </MainContainer>
    )
}