import React from 'react';
import StripesForm from './StripesForm';
import StripesCSS from './StripesCSS';
import { Box } from '../../GlobalStyles.js';

class Stripes extends React.Component {
    constructor() {
        super();
        this.state = {
            displayColor1Picker: false,
            displayColor2Picker: false,
            degrees: 45,
            color1: '#A50002',
            color2: '#243B75',
            width: 100,
            height: 100,
        }
    }

    newCSS = () => {
        return `background: linear-gradient(
            45deg,
            ${this.state.color1} 25%, 
            ${this.state.color2} 25%, 
            ${this.state.color2} 50%, 
            ${this.state.color1} 50%, 
            ${this.state.color1} 75%, 
            ${this.state.color2} 75%, 
            ${this.state.color2} 100%
            );
background-size: ${this.state.width}px ${this.state.height}px;`;
    }

    handleColor1Click = () => {
        this.setState({ displayColor1Picker: !this.state.displayColor1Picker })
    };
    
    handleColor1Close = () => {
        this.setState({ displayColor1Picker: false })
    };
    
    handleColor1Change = (color) => {
        this.setState({ color1: color.hex });
        const css = this.newCSS();
        this.props.updateCSS(css);
    };

    handleColor2Click = () => {
        this.setState({ displayColor2Picker: !this.state.displayColor2Picker })
    };
    
    handleColor2Close = () => {
        this.setState({ displayColor2Picker: false })
    };
    
    handleColor2Change = (color) => {
        this.setState({ color2: color.hex });
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
                    handleColor1Click={this.handleColor1Click}
                    handleColor1Close={this.handleColor1Close}
                    handleColor1Change={this.handleColor1Change}
                    handleColor2Click={this.handleColor2Click}
                    handleColor2Close={this.handleColor2Close}
                    handleColor2Change={this.handleColor2Change}
                    handleSlider={this.handleSlider}
                    updateCSS={this.props.updateCSS}
                    />
                <StripesCSS {...this.state} newCSS={this.newCSS}/>
            </Box>
        );
    }
}

export default Stripes;