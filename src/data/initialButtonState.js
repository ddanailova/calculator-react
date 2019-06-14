const defaultDarkBtnBackground ='#3c4e5f';
const defaultLightBtnBackground = '#4c5d6f';

const defaultBorderColor ='#f0f1f3';
const defaultBorderStyle = 'solid';
const defaultHighlightColor = '#ea8c73';


const initialButtonState = {
    "del":{
        "type":"action",
        "positionStyles":"col-start-1 row-start-1",
        "background":defaultLightBtnBackground,
        "borderColor":defaultBorderColor,
        "borderStyle":defaultBorderStyle,
        "fixed":false
    },
    "<":{
        "type":"action",
        "positionStyles":"col-start-2 row-start-1",
        "background":defaultLightBtnBackground,
        "borderColor":defaultBorderColor,
        "borderStyle":defaultBorderStyle,
        "fixed":false
    },
    ">":{
        "type":"action",
        "positionStyles":"col-start-3 row-start-1",
        "background":defaultLightBtnBackground,
        "borderColor":defaultBorderColor,
        "borderStyle":defaultBorderStyle,
        "fixed":false
    },
    "=":{
        "type":"action",
        "positionStyles":"col-start-3 row-start-5",
        "background":defaultHighlightColor,
        "borderColor":defaultBorderColor,
        "borderStyle":defaultBorderStyle,
        "fixed":true,
        "extraStyles":"highlight"
    },
    "customise":{
        "type":"action",
        "positionStyles":"col-start-4 row-start-1 till-end",
        "background":defaultHighlightColor,
        "borderColor":defaultBorderColor,
        "borderStyle":defaultBorderStyle,
        "fixed":true,
        "extraStyles":"highlight"
    },
    "0":{
        "type":"number",
        "positionStyles":"col-start-1 row-start-5",
        "background":defaultDarkBtnBackground,
        "borderColor":defaultHighlightColor,
        "borderStyle":defaultBorderStyle,
        "fixed":false
    },
    "1":{
        "type":"number",
        "positionStyles":"col-start-1 row-start-4",
        "background":defaultDarkBtnBackground,
        "borderColor":defaultHighlightColor,
        "borderStyle":defaultBorderStyle,
        "fixed":false
    },
    "2":{
        "type":"number",
        "positionStyles":"col-start-2 row-start-4",
        "background":defaultDarkBtnBackground,
        "borderColor":defaultHighlightColor,
        "borderStyle":defaultBorderStyle,
        "fixed":false
    },
    "3":{
        "type":"number",
        "positionStyles":"col-start-3 row-start-4",
        "background":defaultDarkBtnBackground,
        "borderColor":defaultHighlightColor,
        "borderStyle":defaultBorderStyle,
        "fixed":false
    },
    "4":{
        "type":"number",
        "positionStyles":"col-start-1 row-start-3",
        "background":defaultDarkBtnBackground,
        "borderColor":defaultHighlightColor,
        "borderStyle":defaultBorderStyle,
        "fixed":false
    },
    "5":{
        "type":"number",
        "positionStyles":"col-start-2 row-start-3",
        "background":defaultDarkBtnBackground,
        "borderColor":defaultHighlightColor,
        "borderStyle":defaultBorderStyle,
        "fixed":false
    },
    "6":{
        "type":"number",
        "positionStyles":"col-start-3 row-start-3",
        "background":defaultDarkBtnBackground,
        "borderColor":defaultHighlightColor,
        "borderStyle":defaultBorderStyle,
        "fixed":false
    },
    "7":{
        "type":"number",
        "positionStyles":"col-start-1 row-start-2",
        "background":defaultDarkBtnBackground,
        "borderColor":defaultHighlightColor,
        "borderStyle":defaultBorderStyle,
        "fixed":false
    },
    "8":{
        "type":"number",
        "positionStyles":"col-start-2 row-start-2",
        "background":defaultDarkBtnBackground,
        "borderColor":defaultHighlightColor,
        "borderStyle":defaultBorderStyle,
        "fixed":false
    },
    "9":{
        "type":"number",
        "positionStyles":"col-start-3 row-start-2",
        "background":defaultDarkBtnBackground,
        "borderColor":defaultHighlightColor,
        "borderStyle":defaultBorderStyle,
        "fixed":false
    },
    ".":{
        "type":"operator",
        "positionStyles":"col-start-2 row-start-5",
        "background":defaultLightBtnBackground,
        "borderColor":defaultBorderColor,
        "borderStyle":defaultBorderStyle,
        "fixed":false
    },
    "+":{
        "type":"operator",
        "positionStyles":"col-start-5 row-start-2",
        "background":defaultLightBtnBackground,
        "borderColor":defaultBorderColor,
        "borderStyle":defaultBorderStyle,
        "fixed":false
    },
    "-":{
        "type":"operator",
        "positionStyles":"col-start-5 row-start-3",
        "background":defaultLightBtnBackground,
        "borderColor":defaultBorderColor,
        "borderStyle":defaultBorderStyle,
        "fixed":false
    },
    "*":{
        "type":"operator",
        "positionStyles":"col-start-5 row-start-4",
        "background":defaultLightBtnBackground,
        "borderColor":defaultBorderColor,
        "borderStyle":defaultBorderStyle,
        "fixed":false
    },
    "/":{
        "type":"operator",
        "positionStyles":"col-start-5 row-start-5",
        "background":defaultLightBtnBackground,
        "borderColor":defaultBorderColor,
        "borderStyle":defaultBorderStyle,
        "fixed":false
    },
    "%":{
        "type":"operator",
        "positionStyles":"col-start-4 row-start-4",
        "background":defaultLightBtnBackground,
        "borderColor":defaultBorderColor,
        "borderStyle":defaultBorderStyle,
        "fixed":false
    },
    ")":{
        "type":"operator",
        "positionStyles":"col-start-4 row-start-3",
        "background":defaultLightBtnBackground,
        "borderColor":defaultBorderColor,
        "borderStyle":defaultBorderStyle,
        "fixed":false
    },
    "(":{
        "type":"operator",
        "positionStyles":"col-start-4 row-start-2",
        "background":defaultLightBtnBackground,
        "borderColor":defaultBorderColor,
        "borderStyle":defaultBorderStyle,
        "fixed":false
    },

    // "#":{
    //     "type":"operator",
    //     "positionStyles":"col-start-2",
    //     "background":defaultLightBtnBackground,
    //     "borderColor":defaultBorderColor,
    //     "borderStyle":defaultBorderStyle,
    //     "fixed":false
    // },
}


export {defaultDarkBtnBackground,defaultLightBtnBackground,defaultBorderColor,defaultBorderStyle, defaultHighlightColor}
export default initialButtonState;