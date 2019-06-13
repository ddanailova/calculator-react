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
            toggleCustomizeMode, 
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

    let dynamicStyle = {background, borderColor, borderStyle}

    if(customizable && children !== 'customize'){
        return(
            <div 
                className={styleClasses} 
                style={dynamicStyle}
                fixed={fixed?'true':'false'} 
                customizable='true'
                onClick={(ev)=>handlePositionChange(ev, children)}
            >
                {children}
                <input 
                    type="color" 
                    name={children} 
                    onChange={(ev)=>handleColorChange(ev)}
                />
            </div>
        )
    }else if(type ==='number' || type === 'operator'){
        return(
            <div className={styleClasses} style={dynamicStyle} onClick={()=>addToInput(children)}>{children}</div>
        )
    } else if (children === 'del'){
        return(
            <div className={styleClasses} style={dynamicStyle} onClick={removeFromInput}>{children}</div>
        )
    } else if(children === '='){
        return(
            <div className={styleClasses} style={dynamicStyle} onClick={calculate}>{children}</div>
        )
    }else if(children === '<'){
        return(
            <div className={styleClasses} style={dynamicStyle} onClick={handleBack}>{children}</div>
        )
    }else if(children === '>'){
        return(
            <div className={styleClasses} style={dynamicStyle} onClick={handleForword}>{children}</div>
        )
    }else if(children === 'customize'){
        return(
            <div className={styleClasses} style={dynamicStyle} onClick={toggleCustomizeMode}>{children}</div>
        )
    }

    return(
        <div className={styleClasses} style={dynamicStyle}>{children}</div>
    )
}

export default Button;