import React from 'react';
import { CSS } from '../../GlobalStyles';

const ZigZagCSS = props => {
    const css = props.newCSS();
    return (
        <CSS>
            {css}
        </CSS>
    );
}

export default ZigZagCSS;