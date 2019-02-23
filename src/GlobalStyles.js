import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
    body {
        ${props => props.pattern}
    }
`;

export default GlobalStyle;