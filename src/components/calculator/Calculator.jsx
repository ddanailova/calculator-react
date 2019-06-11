import React, {Component} from 'react';
import Display from './../display/Display';
import Button from './../button/Button';
import './Calculator.css';

class Calculator extends Component{
    constructor(props){
        super(props);

        this.state={
            input:"",
            customizeMode:false
        }
    }

    addToInput=(value)=>{
        this.setState((prevState)=>({
            input:prevState.input+value
        }))
    }

    removeFromInput=()=>{
        if(this.state.input){
            console.log('remove');
            this.setState((prevState)=>{
                return{
                input:prevState.input.slice(0, prevState.input.length-1)
            }})
        }
    }

    render(){
        const {input}=this.state;
        return(
            <section className="wrapper">
                <Display input={input}/>
                <section className="buttonsBox">
                    <Button type="action" removeFromInput={this.removeFromInput}>del</Button>
                    <Button type="action">{'<'}</Button>
                    <Button type="action">{'>'}</Button>
                    <Button type="action">customize</Button>
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
                    <Button type="action">=</Button>
                    <Button type="operator" addToInput={this.addToInput}>/</Button>
                </section>
            </section>
        )
    }
}

export default Calculator;