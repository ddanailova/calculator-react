import React from 'react';
import './Button.css';

const Button =(props)=>{
    const {children, type, addToInput, removeFromInput, calculate, handleBack, handleForword, toggleCustomizeMode, customizable}=props;
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
    } else if(calculate){
        return(
            <div className={styleClasses} onClick={calculate}>{children}</div>
        )
    }else if(handleBack){
        return(
            <div className={styleClasses} onClick={handleBack}>{children}</div>
        )
    }else if(handleForword){
        return(
            <div className={styleClasses} onClick={handleForword}>{children}</div>
        )
    }else if(toggleCustomizeMode){
        return(
            <div className={styleClasses} onClick={toggleCustomizeMode}>{children}</div>
        )
    }else if(customizable){
        return(
            <div className={styleClasses}><input type="color"/>{children}</div>
        )
    }

    return(
        <div className={styleClasses}>{children}</div>
    )
}

export default Button;