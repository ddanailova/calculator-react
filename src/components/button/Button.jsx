import React from 'react';
import './Button.css';

const Button =(props)=>{
    const {children, type, addToInput, removeFromInput}=props;
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
    } else if (removeFromInput){
        return(
            <div className={styleClasses} onClick={removeFromInput}>{children}</div>
        )
    }

    return(
        <div className={styleClasses}>{children}</div>
    )
}

export default Button;