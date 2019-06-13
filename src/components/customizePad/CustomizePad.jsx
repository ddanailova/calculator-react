import React from 'react';
import Button from './../button/Button';
import './CustomizePad.css';

const CustomizePad =(props)=>{
    const {buttons,toggleCustomizeMode, handleColorChange,handlePositionChange}=props;
    return(
        <section className="customize-pad">
        {
            Object.keys(buttons).map(key=>(
                    <Button 
                        key={key}
                        type={buttons[key].type}
                        toggleCustomizeMode={toggleCustomizeMode}
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

export default CustomizePad;