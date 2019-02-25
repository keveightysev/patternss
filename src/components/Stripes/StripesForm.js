import React from 'react';

import { Form } from '../../GlobalStyles';
import ColorPicker from '../ColorPicker';

const StripesForm = props => {
  return (
    <Form>
      {props.colors.map((color, index) => <ColorPicker color={color} index={index} handleColorChange={props.handleColorChange} key={index} />)}
      <div>
        <h2>Scale the Pattern</h2>
        <input type="range" min="10" max="999" value={props.width} onChange={props.handleSlider} />
        <h2>Select an Angle</h2>
        <input type="range" min="-1" max="91" value={props.angle} onChange={props.handleAngleChange} />
      </div>
    </Form>
  );
}

export default StripesForm;