import React from 'react';
import ZigZagForm from './ZigZagForm';
import { Box } from '../../GlobalStyles.js';
import CSSBox from '../CSSBox';

class ZigZag extends React.Component {
    constructor() {
        super();
        this.state = {
            angle: 0,
            colors: ['#45005F', '#752472'],
            width: 200,
            height: 200,
        }
    }

    componentDidMount() {
        const css = this.newCSS();
        this.props.updateCSS(css);
    }

    newCSS = () => {
        return `position: relative;
overflow: hidden;
width: 100%;
height: 100%;
&:before {
    content: '';
    position: absolute;
    width: 200%;
    height: 200%;
    top: -50%;
    left: -50%
    z-index: -100;
    background: 
        linear-gradient(135deg, ${this.state.colors[0]} 25%, transparent 25%) -${(this.state.width / 2) + 1}px 0px,
        linear-gradient(225deg, ${this.state.colors[0]} 25%, transparent 25%) -${(this.state.width / 2)}px 0px,
        linear-gradient(315deg, ${this.state.colors[0]} 25%, transparent 25%) 1px 1px,
        linear-gradient(45deg, ${this.state.colors[0]} 25%, transparent 25%) 0px 1px;
    background-repeat: repeat;	
    background-size: ${this.state.width}px ${this.state.height}px;
    background-color: ${this.state.colors[1]};
    background-position: cover;
    transform: rotate(${this.state.angle}deg);
}`;
    }
    
    handleColorChange = (color, index) => {
        let colors = this.state.colors;
        colors[index] = color;
        this.setState({ colors: colors });
        const css = this.newCSS();
        this.props.updateCSS(css);
    };

    handleSlider = e => {
        this.setState({
            width: e.target.value,
            height: e.target.value,
        })
        const css = this.newCSS();
        this.props.updateCSS(css);
    }

    handleAngleChange = e => {
        this.setState({
            angle: e.target.value,
        })
        const css = this.newCSS();
        this.props.updateCSS(css);
    }
    
    render() {
        const css = `div {
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 100%;

div:before {
    content: '';
    position: absolute;
    width: 200%;
    height: 200%;
    top: -50%;
    left: -50%
    z-index: -100;
    background: 
        linear-gradient(135deg, ${this.state.colors[0]} 25%, transparent 25%) -${(this.state.width / 2) + 1}px 0px,
        linear-gradient(225deg, ${this.state.colors[0]} 25%, transparent 25%) -${(this.state.width / 2)}px 0px,
        linear-gradient(315deg, ${this.state.colors[0]} 25%, transparent 25%) 1px 1px,
        linear-gradient(45deg, ${this.state.colors[0]} 25%, transparent 25%) 0px 1px;
    background-repeat: repeat;	
    background-size: ${this.state.width}px ${this.state.height}px;
    background-color: ${this.state.colors[1]};
    background-position: cover;
    transform: rotate(${this.state.angle}deg);
}`;
        return (
            <Box>
                <ZigZagForm {...this.state} 
                    handleColorChange={this.handleColorChange}
                    handleAngleChange={this.handleAngleChange}
                    handleSlider={this.handleSlider}
                    updateCSS={this.props.updateCSS}
                    />
                <CSSBox css={css} />
            </Box>
        );
    }
}

export default ZigZag;