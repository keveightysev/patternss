import React from 'react';

import { Form } from '../../GlobalStyles';
import ColorPicker from '../ColorPicker';

const PolkaDotsForm = props => {
  return (
    <Form>
      {props.colors.map((color, index) => <ColorPicker color={color} index={index} handleColorChange={props.handleColorChange} key={index} />)}
      <h2>Select a Width</h2>
      <div>
        <input type="range" min="10" max="999" name="width" value={props.width} onChange={props.handleSlider} />
      </div>
    </Form>
  );
}

export default PolkaDotsForm;