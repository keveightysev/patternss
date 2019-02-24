import React from 'react';
import ZigZagForm from './ZigZagForm';
import ZigZagCSS from './ZigZagCSS';
import { Box } from '../../GlobalStyles.js';

class ZigZag extends React.Component {
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

    componentDidMount() {
        const css = this.newCSS();
        this.props.updateCSS(css);
    }

    newCSS = () => {
        return `background: 
        linear-gradient(135deg, ${this.state.color1} 25%, transparent 25%) -${this.state.width / 2}px 0,
        linear-gradient(225deg, ${this.state.color1} 25%, transparent 25%) -${this.state.width / 2}px 0,
        linear-gradient(315deg, ${this.state.color1} 25%, transparent 25%),
        linear-gradient(45deg, ${this.state.color1} 25%, transparent 25%);	
background-size: ${this.state.width}px ${this.state.height}px;
background-color: ${this.state.color2};`;
    }
    
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
        return (
            <Box>
                <ZigZagForm {...this.state} 
                    handleColor1Click={this.handleColor1Click}
                    handleColor1Close={this.handleColor1Close}
                    handleColor1Change={this.handleColor1Change}
                    handleColor2Click={this.handleColor2Click}
                    handleColor2Close={this.handleColor2Close}
                    handleColor2Change={this.handleColor2Change}
                    handleSlider={this.handleSlider}
                    updateCSS={this.props.updateCSS}
                    />
                <ZigZagCSS {...this.state} newCSS={this.newCSS}/>
            </Box>
        );
    }
}

export default ZigZag;