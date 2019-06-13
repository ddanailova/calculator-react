import React from 'react';
import Button from './../button/Button';
import './CustomizePad.css';

const CustomizePad =(props)=>{
    const {buttons,toggleCustomizeMode}=props;
    return(
        <section className="customize-pad">
        {
            Object.keys(buttons).map(key=>(
                    <Button 
                        key={key}
                        type={buttons[key].type}
                        toggleCustomizeMode={toggleCustomizeMode}
                        positionStyles={buttons[key].positionStyles}
                        extraStyles={buttons[key].extraStyles}
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