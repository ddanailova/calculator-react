import React from 'react';
import './Button.css';

const Button =(props)=>{
    const {
            children, 
            type, 
            positionStyles, 
            extraStyles, 
            background,
            borderColor,
            borderStyle,
            addToInput, 
            removeFromInput, 
            calculate, 
            handleBack, 
            handleForword, 
            toggleCustomiseMode, 
            handleColorChange,
            handlePositionChange,
            customizable, 
            fixed
        } = props;

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

    let dynamicStyle = {background, borderColor, borderStyle};

    if(customizable && children !== 'customise'){
        return(
            <button 
                className={styleClasses} 
                style={dynamicStyle}
                fixed={fixed?'true':'false'} 
                customizable='true'
                onClick={(ev)=>handlePositionChange(ev, children)}
            >
                {children}
                <input type="color" name={children} onChange={(ev)=>handleColorChange(ev)}/>
            </button>
        )
    }else if(type ==='number' || type === 'operator'){
        return(
            <button className={styleClasses} style={dynamicStyle} onClick={()=>addToInput(children)}>{children}</button>
        )
    } else if (children === 'del'){
        return(
            <button className={styleClasses} style={dynamicStyle} onClick={removeFromInput}>{children}</button>
        )
    } else if(children === '='){
        return(
            <button className={styleClasses} style={dynamicStyle} onClick={calculate}>{children}</button>
        )
    }else if(children === '<'){
        return(
            <button className={styleClasses} style={dynamicStyle} onClick={handleBack}>{children}</button>
        )
    }else if(children === '>'){
        return(
            <button className={styleClasses} style={dynamicStyle} onClick={handleForword}>{children}</button>
        )
    }else if(children === 'customise'){
        return(
            <button className={styleClasses} style={dynamicStyle} onClick={toggleCustomiseMode}>{children}</button>
        )
    }

    return(
        <button className={styleClasses} style={dynamicStyle}>{children}</button>
    )
}

export default Button;