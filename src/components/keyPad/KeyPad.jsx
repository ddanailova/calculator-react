import React from 'react';
import Button from './../button/Button';
import './KeyPad.css';

const KeyPad =(props)=>{
    const {buttons, addToInput, removeFromInput, calculate, handleBack, handleForword, toggleCustomizeMode}=props;
    return(
        <section className="key-pad">
            {
                Object.keys(buttons).map(key=>(
                        <Button 
                            key={key}
                            type={buttons[key].type}
                            addToInput={addToInput} 
                            removeFromInput={removeFromInput} 
                            calculate={calculate} 
                            handleBack={handleBack} 
                            handleForword={handleForword} 
                            toggleCustomizeMode={toggleCustomizeMode}
                            positionStyles={buttons[key].positionStyles}
                            extraStyles={buttons[key].extraStyles}
                            fixed={buttons[key].fixed}
                        >{key}</Button>
                    )
                )
            }
        </section>
    )
}

export default KeyPad;