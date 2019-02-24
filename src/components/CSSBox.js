import React from 'react';
import { CSS } from '../GlobalStyles';

const CSSBox = props => {
    return (
        <CSS>
            {props.css}
        </CSS>
    );
}

export default CSSBox;