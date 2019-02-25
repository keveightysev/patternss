import React from 'react';
import StripesForm from './StripesForm';
import CSSBox from '../CSSBox';
import { Box } from '../../GlobalStyles.js';

class Stripes extends React.Component {
    constructor() {
        super();
        this.state = {
            angle: 45,
            colors: ['#00BEDD', '#006E76'],
            width: 100,
            height: '100px',
        }
    }

    componentDidMount() {
        const css = this.newCSS();
        this.props.updateCSS(css);
    }

    newCSS = () => {
        return `background: linear-gradient(
            ${this.state.angle}deg,
            ${this.state.colors[0]} 25%, 
            ${this.state.colors[1]} 25%, 
            ${this.state.colors[1]} 50%, 
            ${this.state.colors[0]} 50%, 
            ${this.state.colors[0]} 75%, 
            ${this.state.colors[1]} 75%, 
            ${this.state.colors[1]} 100%
            );
background-size: ${this.state.width}px ${this.state.height};`;
    }

    
    handleColorChange = (color, index) => {
        let colors = this.state.colors;
        colors[index] = color;
        this.setState({ colors: colors });
        const css = this.newCSS();
        this.props.updateCSS(css);
    };

    handleSlider = e => {
        if (this.state.angle <= 0) {
            this.setState({
                width: e.target.value,
                height: `${e.target.value}px`,
            })
        } else if (this.state.angle >= 90) {
            this.setState({
                width: e.target.value,
                height: `100%`,
            })
        } else {
            this.setState({
                width: e.target.value,
                height: `${e.target.value * Math.round(Math.tan(this.state.angle * Math.PI / 180) * 100) / 100 }px`
            })
        }
        const css = this.newCSS();
        this.props.updateCSS(css);
    }

    handleAngleChange = e => {
        if (e.target.value <= 0) {
            this.setState({
                angle: 0,
                height: `${this.state.width}px`,
            })
        } else if (e.target.value >= 90) {
            this.setState({
                angle: 90,
                height: `100%`,
            })
        } else {
            this.setState({
                angle: e.target.value,
                height: `${this.state.width * Math.round(Math.tan(e.target.value * Math.PI / 180) * 100) / 100 }px`,
            })
        }
        const css = this.newCSS();
        this.props.updateCSS(css);
    }

    
    render() {
        const css = this.newCSS();
        return (
            <Box>
                <StripesForm {...this.state} 
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

export default Stripes;