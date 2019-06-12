import React from 'react';
import Button from './../button/Button';
import './KeyPad.css';

const KeyPad =(props)=>{
    const {addToInput, removeFromInput, calculate, handleBack, handleForword, toggleCustomizeMode}=props;
    return(
        <section className="key-pad">
        <Button type="action" removeFromInput={removeFromInput}>del</Button>
        <Button type="action" handleBack={handleBack}>{'<'}</Button>
        <Button type="action" handleForword={handleForword} >{'>'}</Button>
        <Button type="action" toggleCustomizeMode={toggleCustomizeMode}>customize</Button>
        <Button type="number" addToInput={addToInput}>7</Button>
        <Button type="number" addToInput={addToInput}>8</Button>
        <Button type="number" addToInput={addToInput}>9</Button>
        <Button type="operator" addToInput={addToInput}>(</Button>
        <Button type="operator" addToInput={addToInput}>+</Button>
        <Button type="number" addToInput={addToInput}>4</Button>
        <Button type="number" addToInput={addToInput}>5</Button>
        <Button type="number" addToInput={addToInput}>6</Button>
        <Button type="operator" addToInput={addToInput}>)</Button>
        <Button type="operator" addToInput={addToInput}>-</Button>
        <Button type="number" addToInput={addToInput}>1</Button>
        <Button type="number" addToInput={addToInput}>2</Button>
        <Button type="number" addToInput={addToInput}>3</Button>
        <Button type="operator" addToInput={addToInput}>%</Button>
        <Button type="operator" addToInput={addToInput}>*</Button>
        <Button type="number" addToInput={addToInput}>0</Button>
        <Button type="operator" addToInput={addToInput}>.</Button>
        <Button type="action" calculate={calculate}>=</Button>
        <Button type="operator" addToInput={addToInput}>/</Button>
    </section>
    )
}

export default KeyPad;