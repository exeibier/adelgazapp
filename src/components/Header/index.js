import React from 'react';

//CSS
import './Header.css'

function Header ({imgUrl, title}){
    return(
        <header>
            <div className='bg-header'>
              <img src={imgUrl}/>  
            </div>
            <div className='header-text'>
              <h2>{title}</h2>
            </div>
        </header>
    )
}

export default Header