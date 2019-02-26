import React from 'react';
import PolkaDotsForm from './PolkaDotsForm';
import { Box } from '../../GlobalStyles.js';
import CSSBox from '../CSSBox';

class PolkaDots extends React.Component {
    constructor() {
        super();
        this.state = {
            degrees: 45,
            colors: ['#B71002', '#FFFFFF'],
            width: 60,
        }
    }

    componentDidMount() {
        const css = this.newCSS();
        this.props.updateCSS(css);
    }

    newCSS = () => {
        return `background-color:${this.state.colors[0]};
background-image: radial-gradient(${this.state.colors[1]} 15%, transparent 16%), radial-gradient(${this.state.colors[1]} 15%, transparent 16%);
background-size: ${this.state.width}px ${this.state.width}px;
background-position: 0 0, ${this.state.width / 2}px ${this.state.width / 2}px;`;
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
                [e.target.name]: e.target.value,
            })
        }
        const css = this.newCSS();
        this.props.updateCSS(css);
    }
    
    render() {
        const css = this.newCSS();
        return (
            <Box>
                <PolkaDotsForm {...this.state} 
                    handleColorChange={this.handleColorChange}
                    handleSlider={this.handleSlider}
                    updateCSS={this.props.updateCSS}
                    />
                <CSSBox css={css} />
            </Box>
        );
    }
}

export default PolkaDots;