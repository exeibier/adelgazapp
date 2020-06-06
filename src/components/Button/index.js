import React from 'react';

//CSS
import './Button.css'

function Button ({btnName}){
    return(
        <div className='btn-wrapper'>
            <div className='generic-btn'><a></a>{btnName}</div>
        </div>
    )
}

export default Button;