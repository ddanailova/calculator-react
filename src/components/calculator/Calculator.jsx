import React, {Component} from 'react';
import Display from './../display/Display';
import Button from './../button/Button';
import * as math from 'mathjs';
import './Calculator.css';



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
                    !customizeMode ? <Display input={input} activeCharIndex={activeCharIndex}/> : null
                }
                
                <section className="key-pad">
                    <Button type="action" removeFromInput={this.removeFromInput}>del</Button>
                    <Button type="action" handleBack={this.handleBack}>{'<'}</Button>
                    <Button type="action" handleForword={this.handleForword} >{'>'}</Button>
                    <Button type="action" toggleCustomizeMode={this.toggleCustomizeMode}>customize</Button>
                    <Button type="number" addToInput={this.addToInput}>7</Button>
                    <Button type="number" addToInput={this.addToInput}>8</Button>
                    <Button type="number" addToInput={this.addToInput}>9</Button>
                    <Button type="operator" addToInput={this.addToInput}>(</Button>
                    <Button type="operator" addToInput={this.addToInput}>+</Button>
                    <Button type="number" addToInput={this.addToInput}>4</Button>
                    <Button type="number" addToInput={this.addToInput}>5</Button>
                    <Button type="number" addToInput={this.addToInput}>6</Button>
                    <Button type="operator" addToInput={this.addToInput}>)</Button>
                    <Button type="operator" addToInput={this.addToInput}>-</Button>
                    <Button type="number" addToInput={this.addToInput}>1</Button>
                    <Button type="number" addToInput={this.addToInput}>2</Button>
                    <Button type="number" addToInput={this.addToInput}>3</Button>
                    <Button type="operator" addToInput={this.addToInput}>%</Button>
                    <Button type="operator" addToInput={this.addToInput}>*</Button>
                    <Button type="number" addToInput={this.addToInput}>0</Button>
                    <Button type="operator" addToInput={this.addToInput}>.</Button>
                    <Button type="action" calculate={this.calculate}>=</Button>
                    <Button type="operator" addToInput={this.addToInput}>/</Button>
                </section>
            </section>
        )
    }
}

export default Calculator;