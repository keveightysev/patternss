import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
    body {
        background-image: linear-gradient(
            45deg, 
            #98CD8D 25%, 
            #F6F0CF 25%, 
            #F6F0CF 50%, 
            #98CD8D 50%, 
            #98CD8D 75%, 
            #F6F0CF 75%, 
            #F6F0CF 100%
            );
        background-size: 56.57px 56.57px;
    }
`;

export default GlobalStyle;