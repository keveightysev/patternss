import React from 'react';
import styled from 'styled-components';

const CSS = styled.code`
    white-space: pre;
`;

const StripesCSS = props => {
    const css = props.newCSS();
    return (
        <CSS>
            {css}
        </CSS>
    );
}

export default StripesCSS;