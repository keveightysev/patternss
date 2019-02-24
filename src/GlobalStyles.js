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
        font-family: 'Roboto Slab', serif;
    }
`;

export const Main = styled.div`
    width: 50%;
    margin: 20px auto;
    background: white;
    padding: 40px 40px 10px;
    border-radius: 30px;
    box-shadow: 0 0 10px #888888;
`;

export const Heading = styled.header`
    font-size: 3rem;
    font-weight: 600;
    text-align: center;
`;

export const Choose = styled.div`
    text-align: center;
`;

export const Box = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    margin: 40px 0;
`;

export const Form = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    input[type="range"] {
        -webkit-appearance: none;
        width: 100%;
        height: 10px;
        border-radius: 5px;   
        background: #d3d3d3;
        outline: none;
        opacity: 0.7;
        transition: opacity .2s;

        &::-webkit-slider-thumb {
            -webkit-appearance: none;
            appearance: none;
            width: 15px;
            height: 15px;
            border-radius: 50%; 
            background: #818181;
            cursor: ew-resize;
        }
    }
`;

export const CSS = styled.p`
    white-space: pre-wrap;
    background: #d3d3d3;
    width: 100%;
    padding: 10px;
    font-family: monospace;
    font-size: 2rem;
    border-radius: 5px;
`;

export const Footer = styled.p`
    text-align: center;
    font-size: 1.5rem;
    font-weight: 600;
    margin-top: 50px 0 20px;
    color: #d3d3d3

    a {
        color: #818181;
        text-decoration: none;
        transition: .15s ease;

        &:hover {
            color: #000;
            text-decoration: underline;
        }
    }
`;

export default GlobalStyle;