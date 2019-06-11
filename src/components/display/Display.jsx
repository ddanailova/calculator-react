import React from 'react';
import './Display.css';

const Display =(props)=>{
    const {input}=props;
    return (
        <section className="display">{input}</section>
    )
}

export default Display;