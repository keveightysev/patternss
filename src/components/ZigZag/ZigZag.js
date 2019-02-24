import React from 'react';
import ZigZagForm from './ZigZagForm';
import { Box } from '../../GlobalStyles.js';
import CSSBox from '../CSSBox';

class ZigZag extends React.Component {
    constructor() {
        super();
        this.state = {
            degrees: 45,
            colors: ['#A50002', '#243B75'],
            width: 100,
        }
    }

    componentDidMount() {
        const css = this.newCSS();
        this.props.updateCSS(css);
    }

    newCSS = () => {
        return `background: 
        linear-gradient(135deg, ${this.state.colors[0]} 25%, transparent 25%) -${this.state.width / 2}px 0,
        linear-gradient(225deg, ${this.state.colors[0]} 25%, transparent 25%) -${this.state.width / 2}px 0,
        linear-gradient(315deg, ${this.state.colors[0]} 25%, transparent 25%),
        linear-gradient(45deg, ${this.state.colors[0]} 25%, transparent 25%);	
background-size: ${this.state.width}px ${this.state.width}px;
background-color: ${this.state.colors[1]};`;
    }
    
    handleColorChange = (color, index) => {
        let colors = this.state.colors;
        colors[index] = color;
        this.setState({ colors: colors });
        const css = this.newCSS();
        this.props.updateCSS(css);
    };

    handleSlider = e => {
        if (e.target.value % 2 !== 0) {
            return null;
        } else {
            this.setState({
                width: e.target.value,
                height: e.target.value,
            })
        }
        const css = this.newCSS();
        this.props.updateCSS(css);
    }
    
    render() {
        const css = this.newCSS();
        return (
            <Box>
                <ZigZagForm {...this.state} 
                    handleColorChange={this.handleColorChange}
                    handleSlider={this.handleSlider}
                    updateCSS={this.props.updateCSS}
                    />
                <CSSBox css={css} />
            </Box>
        );
    }
}

export default ZigZag;