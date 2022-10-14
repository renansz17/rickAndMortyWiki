import styled from "styled-components"
export const MainContainer = styled.main`
    background-color: #121214;
`;

export const Divider = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    img {
     width: 50%;
    }
`;

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

`;

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
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 5rem;

    h2 {
        color: white;
        padding-bottom: 30px;
    }
`;