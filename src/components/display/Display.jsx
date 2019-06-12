import React from 'react';
import './Display.css';

const Display =(props)=>{
    const {input, activeCharOffset}=props;
    const inputLength =input.length-1;
    const inputChars = input.split("").map((char,i)=>{
        if(activeCharOffset === inputLength-i){
            return <span className="active-char" key={`${char}-${i}`}>{char}</span>
        }
        return <span key={`${char}-${i}`}>{char}</span>
    });

    return (
        <div className="display">{
            inputChars
        }
        </div>
    )
}

export default Display;