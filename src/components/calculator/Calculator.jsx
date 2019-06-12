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
            activeCharOffset:0,
            customizeMode:false
        }
    }

    addToInput=(value)=>{
        const {input}=this.state;
        const actionOperators =['.','+','-','*','/','%'];
        const isEndingWithActionOperator = actionOperators.includes(value) && actionOperators.includes(input.slice(-1));
        
        if(input==='0' || input ==='Invalid input' ){
            this.setState({
                input:value
            })
        }else if(!isEndingWithActionOperator){
            this.setState((prevState)=>({
                input:prevState.input+value
            }));
        }
    }

    removeInput=()=>{
        const willBeEmpty = this.state.input==='0' || this.state.input.length===1 || this.state.input==='Invalid input';

        willBeEmpty ?
            this.setState({
                input:'0'
            }):
            this.setState((prevState)=>({
                input:prevState.input.slice(0, prevState.input.length-1)
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

        this.setState({input:result.toString()});
    }

    render(){
        const {input, activeCharOffset}=this.state;
        return(
            <section className="wrapper">
                <Display input={input} activeCharOffset={activeCharOffset}/>
                <section className="key-pad">
                    <Button type="action" removeInput={this.removeInput}>del</Button>
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
                    <Button type="action" calculate={this.calculate}>=</Button>
                    <Button type="operator" addToInput={this.addToInput}>/</Button>
                </section>
            </section>
        )
    }
}

export default Calculator;