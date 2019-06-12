import React from 'react';
import Button from './../button/Button';
import './CustomizePad.css';

const CustomizePad =(props)=>{
    const {toggleCustomizeMode}=props;
    return(
        <section className="customize-pad">
        <Button type="action" customizable>del</Button>
        <Button type="action" customizable>{'<'}</Button>
        <Button type="action" customizable>{'>'}</Button>
        <Button type="action" toggleCustomizeMode={toggleCustomizeMode}>customize</Button>
        <Button type="number" customizable>7</Button>
        <Button type="number" customizable>8</Button>
        <Button type="number" customizable>9</Button>
        <Button type="operator" customizable>(</Button>
        <Button type="operator" customizable>+</Button>
        <Button type="number" customizable>4</Button>
        <Button type="number" customizable>5</Button>
        <Button type="number" customizable>6</Button>
        <Button type="operator" customizable>)</Button>
        <Button type="operator" customizable>-</Button>
        <Button type="number" customizable>1</Button>
        <Button type="number" customizable>2</Button>
        <Button type="number" customizable>3</Button>
        <Button type="operator" customizable>%</Button>
        <Button type="operator" customizable>*</Button>
        <Button type="number" customizable>0</Button>
        <Button type="operator" customizable>.</Button>
        <Button type="action" customizable>=</Button>
        <Button type="operator" customizable>/</Button>
    </section>
    )
}

export default CustomizePad;