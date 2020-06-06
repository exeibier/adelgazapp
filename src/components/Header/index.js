import React from 'react';

//CSS
import './Header.css'

function Header (){
    return(
        <header>
            <div className='bg-header'>
              <img src='https://www.romania-insider.com/sites/default/files/styles/article_large_image/public/featured_images/Vegetables-supermarket-stoe-Pixabay.com_.jpg'/>  
            </div>
            <div className='header-text'>
              <h2>TIENDA</h2>
            </div>
        </header>
    )
}

export default Header