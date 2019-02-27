import React from 'react';
import GinghamForm from './GinghamForm';
import CSSBox from '../CSSBox';
import { Box } from '../../GlobalStyles.js';

class Gingham extends React.Component {
    constructor() {
        super();
        this.state = {
            angle: 45,
            colors: ['#FFFFFF', '#006708'],
            width: 50,
            height: 50,
        }
    }

    componentDidMount() {
        const css = this.newCSS();
        this.props.updateCSS(css);
    }

    hexToRgb = hex => {
        const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16)
        } : null;
    }

    newCSS = () => {
        const rgbColor = this.hexToRgb(this.state.colors[1]);

        return `position: relative;overflow: hidden;
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
            background-color:${this.state.colors[0]};
background-image: linear-gradient(90deg, rgba(${rgbColor.r},${rgbColor.g},${rgbColor.b},.6) 50%, transparent 50%),linear-gradient(rgba(${rgbColor.r},${rgbColor.g},${rgbColor.b},.4) 50%, transparent 50%);
background-size:${this.state.width}px ${this.state.height}px;
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
            height: e.target.value
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
        const rgbColor = this.hexToRgb(this.state.colors[1]);
        const css = `div {
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 100%;
}

div:before {
    content: '';
    position: absolute;
    width: 200%;
    height: 200%;
    top: -50%;
    left: -50%
    z-index: -100;
    background-color:${this.state.colors[0]};
    background-image: 
        linear-gradient(90deg, rgba(${rgbColor.r},${rgbColor.g},${rgbColor.b},.6) 50%, transparent 50%),
        linear-gradient(rgba(${rgbColor.r},${rgbColor.g},${rgbColor.b},.4) 50%, transparent 50%);
    background-size:${this.state.width}px ${this.state.height}px;
    transform: rotate(${this.state.angle}deg);
}`
        return (
            <Box>
                <GinghamForm {...this.state} 
                    handleColorChange={this.handleColorChange}
                    handleSlider={this.handleSlider}
                    handleAngleChange={this.handleAngleChange}
                    updateCSS={this.props.updateCSS}
                    />
                <CSSBox css={css} />
            </Box>
        );
    }
}

export default Gingham;