import React from 'react';
import './Person.css';

const person = (props) =>{
    return (
        <div className="Person">
        <p onClick = {props.click1}> I'm a {props.name} and my age is {props.age} | click on first line</p>
        <button onClick = {props.click2}> Delete </button>
        <p>{props.children}</p>
        <input type= "text"  value ={props.name} onChange={props.changed} />
        
        </div>
    )
};


export default person;