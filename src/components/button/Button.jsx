import React from 'react';
import './Button.css';

const Button =(props)=>{
    const {children, type, addToInput, removeInput, calculate}=props;
    let styleClasses="btn";
    if(type){
        styleClasses = `${styleClasses} ${type}`;
    }
    if(children === '=' || children === 'customize'){
        styleClasses = `${styleClasses} highlight`;
    }

    if(addToInput){
        return(
            <div className={styleClasses} onClick={()=>addToInput(children)}>{children}</div>
        )
    } else if (removeInput){
        return(
            <div className={styleClasses} onClick={removeInput}>{children}</div>
        )
    } else if(calculate){
        return(
            <div className={styleClasses} onClick={calculate}>{children}</div>
        )
    }

    return(
        <div className={styleClasses}>{children}</div>
    )
}

export default Button;