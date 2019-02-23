import React from 'react';
import StripesForm from './StripesForm';

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
            width: 56.57,
            height: 56.57,
        }
    }

    handleColor1Click = () => {
        this.setState({ displayColor1Picker: !this.state.displayColor1Picker })
    };
    
    handleColor1Close = () => {
        this.setState({ displayColor1Picker: false })
    };

    handleColor2Click = () => {
        this.setState({ displayColor2Picker: !this.state.displayColor2Picker })
    };
    
    handleColor2Close = () => {
        this.setState({ displayColor2Picker: false })
    };
    
    handleColor1Change = (color) => {
        this.setState({ color1: color.rgb })
    };

    handleColor2Change = (color) => {
        this.setState({ color2: color.rgb })
    };

    render() {
        return (
            <section>
                <StripesForm {...this.state} 
                    handleColor1Click={this.handleColor1Click}
                    handleColor1Close={this.handleColor1Close}
                    handleColor2Click={this.handleColor2Click}
                    handleColor2Close={this.handleColor2Close}
                    handleColor1Change={this.handleColor1Change}
                    handleColor2Change={this.handleColor2Change}
                    />
                <div>CSS will go here</div>
            </section>
        );
    }
}

export default Stripes;