import React from 'react';
import { SketchPicker } from 'react-color';
import reactCSS from 'reactcss'



const ColorPicker = props => {
    const styles = reactCSS({
        'default': {
          color: {
            width: '36px',
            height: '14px',
            borderRadius: '2px',
            background: `rgba(${ props.color.r }, ${ props.color.g }, ${ props.color.b }, ${ props.color.a })`,
          },
          swatch: {
            padding: '5px',
            background: '#fff',
            borderRadius: '1px',
            boxShadow: '0 0 0 1px rgba(0,0,0,.1)',
            display: 'inline-block',
            cursor: 'pointer',
          },
          popover: {
            position: 'absolute',
            zIndex: '2',
          },
          cover: {
            position: 'fixed',
            top: '0px',
            right: '0px',
            bottom: '0px',
            left: '0px',
          },
        },
      });
  
      return (
        <div>

          <div style={ styles.swatch } onClick={ props.handleColorClick }>
            <div style={ styles.color } />
          </div>
          { props.displayColorPicker ? <div style={ styles.popover }>
            <div style={ styles.cover } onClick={ props.handleColorClose }/>
            <SketchPicker color={ props.color } onChange={ props.handleColorChange } />
          </div> : null }
  
        </div>
      )
}

export default ColorPicker;