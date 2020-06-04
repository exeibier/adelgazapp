import React from 'react';

//CSS
import './HamburguerMenu.css'

const toggleButton = props => (
    <button className='toggle-button' onClick={props.click}>
        <div className='toggle-button-line'/>
        <div className='toggle-button-line'/>
        <div className='toggle-button-line'/>
    </button>
);

export default toggleButton;