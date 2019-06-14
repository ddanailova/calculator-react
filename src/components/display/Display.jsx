import React from 'react';
import './Display.css';

const Display =(props)=>{
    const {input, activeCharIndex}=props;
    const inputChars = input.split("").map((char,i)=>{
        if(activeCharIndex === i){
            return <span className="active-char" key={`${char}-${i}`}>{char}</span>
        }
        return <span key={`${char}-${i}`}>{char}</span>
    });

    return (
        <section className="display">
            <div className="inner-display">
                {
                    inputChars
                }
            </div>
        </section>
    )
}

export default Display;