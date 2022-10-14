import styled from "styled-components";

export const HeaderContainer = styled.header`
    height: 4.375rem;
    background-color: #121214;
    padding: 1rem;
    font-family: 'Get-Schwifty';
`
export const NavigationContainer = styled.nav`
    display: flex;
    justify-content: space-between;
    font-size:18px;
    color: white;
    text-decoration: none;

    img {
        width: 50px;
    }
    a {
        margin: 0 5px;
        color: white;
        text-decoration: none;
    }
`;