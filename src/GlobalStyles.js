import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *, *:before, *:after {
        box-sizing: border-box;
    }

    @import url('https://fonts.googleapis.com/css?family=Roboto+Slab');

    html {
        font-size: 62.5%;
    }

    body {
        ${props => props.pattern}
    }
`;

export const Main = styled.div`
    width: 50%;
    margin: 20px auto;
    background: white;
    padding: 40px;
    border-radius: 30px;
`;

export const Heading = styled.header`
    font-family: 'Roboto Slab', serif;
    font-size: 3rem;
    font-weight: 600;
    text-align: center;
`;

export const Box = styled.section`
    display: flex;
    justify-content: space-between;
`;

export default GlobalStyle;