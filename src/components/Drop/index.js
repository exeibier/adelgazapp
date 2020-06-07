import React from 'react';

//CSS
import './Drop.css'
const Drop = props => (
    <div className='drop' onClick={props.click}/>
);

export default Drop;