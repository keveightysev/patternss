import React from 'react';
import { CSS } from '../../GlobalStyles';

const StripesCSS = props => {
    const css = props.newCSS();
    return (
        <CSS>
            {css}
        </CSS>
    );
}

export default StripesCSS;