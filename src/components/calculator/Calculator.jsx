import React, {Component, Fragment} from 'react';
import Display from './../display/Display';
import KeyPad from '../keyPad/KeyPad';
import * as math from 'mathjs';
import './Calculator.css';
import CustomisePad from '../customisePad/CustomisePad';
import initialButtonState, {defaultBorderStyle} from '../../data/initialButtonState';



class Calculator extends Component{
    constructor(props){
        super(props);

        this.state={
            input:"0",
            activeCharIndex:0,
            customiseMode:false,
            buttons:initialButtonState,
            startPosition:null,
        }
    }

    addToInput=(value)=>{
        const {input, activeCharIndex}=this.state;
        const inputStart = input.slice(0, activeCharIndex+1);
        const inputEnd = input.slice(activeCharIndex+1);
        
        (input==='0' || input ==='Invalid input') ?
            this.setState({
                input:value
            }):
            this.setState({
                input:inputStart + value + inputEnd,
                activeCharIndex:activeCharIndex + 1
            });
    }

    removeFromInput=()=>{
        const willBeEmpty = this.state.input === '0' || this.state.input.length ===1 || this.state.input ==='Invalid input';

        willBeEmpty ?
            this.setState({
                input:'0',
                activeCharIndex:0
            }):
            this.setState((prevState)=>({
                input:prevState.input.slice(0, prevState.activeCharIndex) + prevState.input.slice(prevState.activeCharIndex + 1),
                activeCharIndex:(prevState.activeCharIndex - 1) < 0 ? 0 : prevState.activeCharIndex-1,
            }))
        
    }

    calculate=()=>{
        const {input}=this.state;
        try{
           const result=math.evaluate(input);
           this.setState({
            input:result.toString(),
            activeCharIndex:result.toString().length-1
        });
        }catch(err){
            this.setState({
                input:'Invalid input',
                activeCharIndex:0
            });
        }

    }

    handleBack=()=>{
        const {activeCharIndex, input}=this.state;
        if(activeCharIndex < input.length && activeCharIndex >0){
            this.setState((prevState)=>({
                activeCharIndex:prevState.activeCharIndex-1
            }))
        }else{
            this.setState({
                activeCharIndex: input.length-1
            })
        }
    }

    handleForword=()=>{
        const {activeCharIndex, input}=this.state;
        if(activeCharIndex < input.length-1 && activeCharIndex >= 0){
            this.setState((prevState)=>({
                activeCharIndex:prevState.activeCharIndex+1
            }))
        }else{
            this.setState({
                activeCharIndex: input.length-1
            })
        }
    }

    toggleCustomiseMode = ()=>{
        this.setState((prevState)=>{
            const withtDefaultBorder = {...prevState.buttons};

            Object.keys(withtDefaultBorder).forEach(key=>withtDefaultBorder[key].borderStyle=defaultBorderStyle);
            
            return{
            customiseMode:!prevState.customiseMode,
            startPosition:null,
            buttons:withtDefaultBorder
        }})
    }

    handleColorChange=(ev)=>{
        const { name, value}=ev.target;
        const {buttons} = this.state;
        const targetButtonStyleChanged = {...buttons[name], background:value};
        if(name==='='){
            const customiseButtonStyleChanged = {...buttons.customise, background:value};
            const withNewHighlightBorder = {...buttons};
            Object.keys(withNewHighlightBorder).filter(key=>withNewHighlightBorder[key].type === 'number').forEach(key=>withNewHighlightBorder[key].borderColor=value);

            this.setState({
                buttons:{...withNewHighlightBorder,  [name]:targetButtonStyleChanged, 'customise':customiseButtonStyleChanged }
            })
        }else{
            this.setState({
                buttons:{...buttons,  [name]:targetButtonStyleChanged }
            })
        }        
    }

    handlePositionChange=(ev, keyValue)=>{
        const isFixed = ev.target.getAttribute('fixed') === 'true' ? true : false;
        const isCustomizable = ev.target.getAttribute('customizable') === 'true' ? true : false;

        if(!isFixed && isCustomizable){
            const styleClasses = ev.target.getAttribute('class');
            const {buttons, startPosition} =this.state;
            if(!startPosition){
                    const positionStyles = styleClasses.split(' ').slice(2).join(' ');
                    const targetButtonStyleChanged = {...buttons[keyValue], borderStyle:'dashed'};
        
                    this.setState({
                        startPosition:{[keyValue]:positionStyles},
                        buttons:{...buttons,  [keyValue]:targetButtonStyleChanged }
                    })
                
            }else{
                const startTargetKey = Object.keys(startPosition)[0];
                if(keyValue === startTargetKey){
                    const targetButtonStyleChanged = {...buttons[keyValue], borderStyle:defaultBorderStyle};
        
                    this.setState({
                        startPosition:null,
                        buttons:{...buttons,  [keyValue]:targetButtonStyleChanged }
                    })
                }else{
                    const styleClasses = ev.target.getAttribute('class');
                    const newPositionStyles = styleClasses.split(' ').slice(2).join(' ');
                    const startPositionStyleChanged = {...buttons[startTargetKey], positionStyles:newPositionStyles, borderStyle:defaultBorderStyle};
                    const endPositionStyleChanged = {...buttons[keyValue], positionStyles:startPosition[startTargetKey]};

                    this.setState({
                        startPosition:null,
                        buttons:{...buttons, [startTargetKey]:startPositionStyleChanged, [keyValue]:endPositionStyleChanged, }
                    })
                }
            }
        }
    }

    render(){
        const {input, buttons, activeCharIndex, customiseMode}=this.state;

        return(
            <section className="wrapper">
                {
                    !customiseMode ? 
                    <Fragment>
                        <Display 
                            input={input} 
                            activeCharIndex={activeCharIndex}
                        />
                        <KeyPad 
                            buttons={buttons}
                            addToInput={this.addToInput} 
                            removeFromInput={this.removeFromInput} 
                            calculate={this.calculate} 
                            handleBack={this.handleBack} 
                            handleForword={this.handleForword} 
                            toggleCustomiseMode={this.toggleCustomiseMode}
                        />
                    </Fragment>:
                    <CustomisePad 
                        buttons={buttons}
                        toggleCustomiseMode={this.toggleCustomiseMode}
                        handleColorChange={this.handleColorChange}
                        handlePositionChange={this.handlePositionChange}
                    />
                }
            </section>
        )
    }
}

export default Calculator;