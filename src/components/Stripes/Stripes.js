import React from 'react';
import StripesForm from './StripesForm';
import StripesCSS from './StripesCSS';

class Stripes extends React.Component {
    constructor() {
        super();
        this.state = {
            displayColor1Picker: false,
            displayColor2Picker: false,
            degrees: 45,
            color1: {
                r: '152',
                g: '205',
                b: '141',
                a: '1',
            },
            color2: {
                r: '246',
                g: '240',
                b: '207',
                a: '1',
            },
            width: 100,
            height: 100,
        }
    }

    newCSS = () => {
        return `background: linear-gradient(
            45deg,
            rgba(${this.state.color1.r}, ${this.state.color1.g}, ${this.state.color1.b}, ${this.state.color1.a}) 25%, 
            rgba(${this.state.color2.r}, ${this.state.color2.g}, ${this.state.color2.b}, ${this.state.color2.a}) 25%, 
            rgba(${this.state.color2.r}, ${this.state.color2.g}, ${this.state.color2.b}, ${this.state.color2.a}) 50%, 
            rgba(${this.state.color1.r}, ${this.state.color1.g}, ${this.state.color1.b}, ${this.state.color1.a}) 50%, 
            rgba(${this.state.color1.r}, ${this.state.color1.g}, ${this.state.color1.b}, ${this.state.color1.a}) 75%, 
            rgba(${this.state.color2.r}, ${this.state.color2.g}, ${this.state.color2.b}, ${this.state.color2.a}) 75%, 
            rgba(${this.state.color2.r}, ${this.state.color2.g}, ${this.state.color2.b}, ${this.state.color2.a}) 100%
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
        this.setState({ color1: color.rgb });
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
        this.setState({ color1: color.rgb });
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
            <section>
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
            </section>
        );
    }
}

export default Stripes;