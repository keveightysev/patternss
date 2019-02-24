import React from 'react';
import StripesForm from './StripesForm';
import StripesCSS from './StripesCSS';
import { Box } from '../../GlobalStyles.js';

class Stripes extends React.Component {
    constructor() {
        super();
        this.state = {
            degrees: 45,
            colors: ['#00BEDD', '#006E76'],
            width: 100,
        }
    }

    componentDidMount() {
        const css = this.newCSS();
        this.props.updateCSS(css);
    }

    newCSS = () => {
        return `background: linear-gradient(
            45deg,
            ${this.state.colors[0]} 25%, 
            ${this.state.colors[1]} 25%, 
            ${this.state.colors[1]} 50%, 
            ${this.state.colors[0]} 50%, 
            ${this.state.colors[0]} 75%, 
            ${this.state.colors[1]} 75%, 
            ${this.state.colors[1]} 100%
            );
background-size: ${this.state.width}px ${this.state.width}px;`;
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
    
    render() {
        return (
            <Box>
                <StripesForm {...this.state} 
                    handleColorChange={this.handleColorChange}
                    handleSlider={this.handleSlider}
                    updateCSS={this.props.updateCSS}
                    />
                <StripesCSS {...this.state} newCSS={this.newCSS}/>
            </Box>
        );
    }
}

export default Stripes;