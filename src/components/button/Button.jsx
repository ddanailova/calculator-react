import React from 'react';
import './Button.css';

const Button =(props)=>{
    const {children, type, positionStyles, extraStyles, addToInput, removeFromInput, calculate, handleBack, handleForword, toggleCustomizeMode, customizable, fixed}=props;
    let styleClasses='btn';
    if(type){
        styleClasses = `${styleClasses} ${type}`;
    }
    if(positionStyles){
        styleClasses = `${styleClasses} ${positionStyles}`;
    }
    if(extraStyles){
        styleClasses = `${styleClasses} ${extraStyles}`;
    }

    if(customizable && children !== 'customize'){
        return(
            <div className={styleClasses}><input type="color"/>{children}</div>
        )
    }else if(type ==='number' || type === 'operator'){
        return(
            <div className={styleClasses} onClick={()=>addToInput(children)}>{children}</div>
        )
    } else if (children === 'del'){
        return(
            <div className={styleClasses} onClick={removeFromInput}>{children}</div>
        )
    } else if(children === '='){
        return(
            <div className={styleClasses} onClick={calculate}>{children}</div>
        )
    }else if(children === '<'){
        return(
            <div className={styleClasses} onClick={handleBack}>{children}</div>
        )
    }else if(children === '>'){
        return(
            <div className={styleClasses} onClick={handleForword}>{children}</div>
        )
    }else if(children === 'customize'){
        return(
            <div className={styleClasses} onClick={toggleCustomizeMode}>{children}</div>
        )
    }

    return(
        <div className={styleClasses}>{children}</div>
    )
}

export default Button;