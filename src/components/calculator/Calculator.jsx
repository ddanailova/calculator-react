import React, {Component, Fragment} from 'react';
import Display from './../display/Display';
import KeyPad from '../keyPad/KeyPad';
import * as math from 'mathjs';
import './Calculator.css';
import CustomizePad from '../customizePad/CustomizePad';



class Calculator extends Component{
    constructor(props){
        super(props);

        this.state={
            input:"0",
            activeCharIndex:0,
            customizeMode:false
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
        let result;
        try{
            result=math.evaluate(input);
        }catch(err){
            result="Invalid input";
        }
        this.setState({
            input:result.toString(),
            activeCharIndex:result.toString().length-1
        });
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

    toggleCustomizeMode = ()=>{
        this.setState((prevState)=>({
            customizeMode:!prevState.customizeMode
        }))
    }

    render(){
        const {input, activeCharIndex, customizeMode}=this.state;

        return(
            <section className="wrapper">
                {
                    !customizeMode ? 
                    <Fragment>
                        <Display 
                            input={input} 
                            activeCharIndex={activeCharIndex}
                        />
                        <KeyPad 
                            addToInput={this.addToInput} 
                            removeFromInput={this.removeFromInput} calculate={this.calculate} 
                            handleBack={this.handleBack} 
                            handleForword={this.handleForword} 
                            toggleCustomizeMode={this.toggleCustomizeMode}
                        />
                    </Fragment>:
                    <CustomizePad 
                        toggleCustomizeMode={this.toggleCustomizeMode}
                    />
                }

            </section>
        )
    }
}

export default Calculator;