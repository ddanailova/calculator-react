import React from 'react';
import Button from '../button/Button';
import './CustomisePad.css';

const CustomisePad =(props)=>{
    const {buttons,toggleCustomiseMode, handleColorChange,handlePositionChange}=props;
    return(
        <section className="customise-pad">
        {
            Object.keys(buttons).map(key=>(
                    <Button 
                        key={key}
                        type={buttons[key].type}
                        toggleCustomiseMode={toggleCustomiseMode}
                        handleColorChange={handleColorChange}
                        handlePositionChange={handlePositionChange}
                        positionStyles={buttons[key].positionStyles}
                        extraStyles={buttons[key].extraStyles}
                        background={ buttons[key].background}
                        borderColor={ buttons[key].borderColor}
                        borderStyle={ buttons[key].borderStyle}
                        fixed={buttons[key].fixed}
                        customizable
                    >{key}</Button>
                )
            )
        }
        </section>
    )
}

export default CustomisePad;