import React from 'react';
import { SketchPicker } from 'react-color';
import reactCSS from 'reactcss';

const StripesForm = props => {
    const styles = reactCSS({
        'default': {
          color1: {
            width: '36px',
            height: '14px',
            borderRadius: '2px',
            background: `rgba(${ props.color1.r }, ${ props.color1.g }, ${ props.color1.b }, ${ props.color1.a })`,
          },
          color2: {
            width: '36px',
            height: '14px',
            borderRadius: '2px',
            background: `rgba(${ props.color2.r }, ${ props.color2.g }, ${ props.color2.b }, ${ props.color2.a })`,
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
        <>
        <div>
        <div style={ styles.swatch } onClick={ props.handleColor1Click }>
          <div style={ styles.color1 } />
        </div>
        { props.displayColor1Picker ? <div style={ styles.popover }>
          <div style={ styles.cover } onClick={ props.handleColor1Close }/>
          <SketchPicker color={ props.color1 } onChange={ props.handleColor1Change } />
        </div> : null }
        </div>

        <div>
        <div style={ styles.swatch } onClick={ props.handleColor2Click }>
          <div style={ styles.color2 } />
        </div>
        { props.displayColor2Picker ? <div style={ styles.popover }>
          <div style={ styles.cover } onClick={ props.handleColor2Close }/>
          <SketchPicker color={ props.color2 } onChange={ props.handleColor2Change } />
        </div> : null }
        </div>
        </>
    );
}

export default StripesForm;